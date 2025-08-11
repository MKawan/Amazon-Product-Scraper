import express from 'express';
import cors from 'cors';
import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';

const app = express();
const PORT = 3000;

app.use(cors({
  origin: 'http://localhost:5173',
}));

app.get('/api/scrape', async (req, res) => {
  const keyword = req.query.keyword as string;
  const page = parseInt(req.query.page as string) || 1;

  if (!keyword) {
    return res.status(400).json({ error: 'Keyword query parameter is required.' });
  }

  const searchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}&page=${page}`;

  try {
    console.log(`Buscando Amazon via Puppeteer: ${searchUrl}`);

    const browser = await puppeteer.launch({
      executablePath: '/usr/bin/google-chrome', // caminho do chromium instalado no sistema
      headless: true,
    });
    const pageP = await browser.newPage();

    await pageP.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36');
    await pageP.goto(searchUrl, { waitUntil: 'networkidle2' });

    const html = await pageP.content();
    await browser.close();

    const $ = cheerio.load(html);
    const products: any[] = [];

    // seu scraping aqui (igual antes)

    $('div.sg-col-inner').each((_, el) => {
      const container = $(el).find('div.puis-card-container').first();
      if (!container.length) return;

      const title = container.find('h2 span').text().trim() || null;
      const relativeUrl = container.find('a.a-link-normal').attr('href') || '';
      const url = relativeUrl ? `https://www.amazon.com${relativeUrl}` : null;

      const image = container.find('img.s-image').attr('src') || null;
      const price = container.find('span.a-price > span.a-offscreen').first().text().trim() || null;
      const rating = container.find('i.a-icon span.a-icon-alt').first().text().trim() || null;
      const reviews = container.find('span.a-size-base').last().text().trim() || null;
      const status = container.find('span[aria-label]').first().attr('aria-label') || null;
      let delivery: string | null = null;

      container.find('div.a-row.a-size-base.a-color-secondary').each((_, el2) => {
        const txt = $(el2).text().trim();
        if (txt.toLowerCase().includes('delivery')) delivery = txt;
      });

      products.push({
        title,
        url,
        image,
        price,
        rating,
        reviews,
        status,
        delivery,
      });
    });

    return res.json({
      keyword,
      page,
      resultsCount: products.length,
      products,
    });

  } catch (error: any) {
    console.error('Erro no scraping:', error.message);
    return res.status(500).json({ error: error.message || 'Falha ao fazer scraping' });
  }
});

app.listen(PORT, () => {
  console.log(`Server rodando em http://localhost:${PORT}`);
});
