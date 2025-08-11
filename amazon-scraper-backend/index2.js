import axios from 'axios';
import fs from 'fs/promises';

async function fetchHtml(url){
  const response = await axios.get(url, {
    headers: {
      // Opcional: evita bloqueio por alguns sites
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    }
  });
  return response.data; // HTML completo da página
}

const url = 'https://www.amazon.com/s?k=keyboard';
fetchHtml(url).then(async html => {
  console.log(html); // HTML completo aqui

  // Salva os resultados em um arquivo JSON local
  await fs.writeFile('amazon-products.html', html, 'utf-8');

    console.log('✅ Resultados salvos em amazon-products.html');
});
