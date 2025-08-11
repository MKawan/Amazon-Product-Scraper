document.addEventListener('DOMContentLoaded', () => {
  const keywordInput = document.getElementById('keywordInput') as HTMLInputElement;
  const scrapeButton = document.getElementById('scrapeButton') as HTMLButtonElement;
  const resultsDiv = document.getElementById('results') as HTMLDivElement;
  const errorDiv = document.getElementById('error') as HTMLDivElement;
  const loadingDiv = document.getElementById('loading') as HTMLDivElement;
  const prevPageBtn = document.getElementById('prevPage') as HTMLButtonElement;
  const nextPageBtn = document.getElementById('nextPage') as HTMLButtonElement;
  const pageNumberSpan = document.getElementById('pageNumber') as HTMLSpanElement;
  
  interface Product {
    title: string;
    url: string | null;
    image: string | null;
    price: string | null;
    rating: string | null;
    reviews: string | null;
    status: string | null;
    delivery: string | null;
  }

  interface ApiResponse {
    keyword: string;
    page: number;
    resultsCount: number;
    products: Product[];
  }

  let currentPage = 1;
  let currentKeyword = '';

  // Function to fetch and display results for given keyword and page
  async function fetchAndDisplay(keyword: string, page: number) {
    errorDiv.textContent = '';
    resultsDiv.innerHTML = '';
    loadingDiv.style.display = 'block'; // Show loading spinner
    scrapeButton.disabled = true;
    prevPageBtn.disabled = true;
    nextPageBtn.disabled = true;

    try {
      // Fetch data from backend API
      const response = await fetch(`http://localhost:3000/api/scrape/?keyword=${encodeURIComponent(keyword)}&page=${page}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse full response object
      const data: ApiResponse = await response.json();
      const products = data.products;

      if (!Array.isArray(products) || products.length === 0) {
        errorDiv.textContent = 'No products found.';
        return;
      }

      // Display product cards
      products.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'product-card';

        const img = document.createElement('img');
        img.src = product.image || '';
        img.alt = product.title || '';

        const info = document.createElement('div');
        info.className = 'product-info';

        const title = document.createElement('div');
        title.className = 'product-title';
        title.textContent = product.title;

        const price = document.createElement('div');
        price.className = 'product-price';
        price.textContent = product.price || 'No price available';

        const rating = document.createElement('div');
        rating.className = 'product-rating';
        rating.textContent = product.rating || 'No rating';

        const reviews = document.createElement('div');
        reviews.className = 'product-reviews';
        reviews.textContent = product.reviews || '';

        const status = document.createElement('div');
        status.className = 'product-status';
        status.textContent = product.status || '';

        const delivery = document.createElement('div');
        delivery.className = 'product-delivery';
        delivery.textContent = product.delivery || '';

        const link = document.createElement('a');
        link.href = product.url || '#';
        link.target = '_blank';
        link.textContent = 'View on Amazon';

        info.appendChild(title);
        info.appendChild(price);
        info.appendChild(rating);
        info.appendChild(reviews);
        info.appendChild(status);
        info.appendChild(delivery);
        info.appendChild(link);

        card.appendChild(img);
        card.appendChild(info);
        resultsDiv.appendChild(card);
      });

      // Update current page and keyword
      console.log('Current page:', data.page);
      currentPage = data.page;
      currentKeyword = data.keyword;

      // Update number of the page
      pageNumberSpan.textContent = `Page ${currentPage}`;

      // Enable/disable pagination buttons
      prevPageBtn.disabled = currentPage <= 1;
      // Assuming each page has 35 results max, enable Next only if resultsCount equals max per page (adjust accordingly)
      nextPageBtn.disabled = data.resultsCount < 35;

    } catch (error) {
      console.error('Frontend error:', error);
      errorDiv.textContent = 'Failed to fetch results. Ensure the backend is running.';
    } finally {
      loadingDiv.style.display = 'none'; // Hide loading spinner
      scrapeButton.disabled = false;
    }
  }

  // Search button click handler
  scrapeButton.addEventListener('click', () => {
    const keyword = keywordInput.value.trim();

    if (!keyword) {
      errorDiv.textContent = 'Please enter a keyword.';
      return;
    }

    currentPage = 1; // Reset to first page on new search
    fetchAndDisplay(keyword, currentPage);
  });

  // Pagination buttons
  prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      fetchAndDisplay(currentKeyword, currentPage - 1);
    }
  });

  nextPageBtn.addEventListener('click', () => {
    fetchAndDisplay(currentKeyword, currentPage + 1);
  });
});
