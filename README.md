<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Amazon Product Scraper</title>
</head>
<body>

  <h1>🛒 Amazon Product Scraper</h1>

  <h2>🔍 Overview</h2>

  <p>
    The <strong>Amazon Product Scraper</strong> is a full-stack web scraping application designed to extract detailed product information from Amazon. Built with a modern tech stack, it offers both backend and frontend components to facilitate seamless data extraction and presentation.
  </p>

  <img width="1356" height="652" alt="Captura de tela de 2025-08-11 16-53-57" src="https://github.com/user-attachments/assets/9828fd0d-483a-49a6-92c0-bc15afd6342b" />

  <h2>✨ Features</h2>

  <ul>
    <li><strong>Keyword-Based Search</strong>: Input a search term to retrieve a list of products matching the query.</li>
    <li><strong>Pagination Support</strong>: Navigate through multiple pages of search results.</li>
    <li><strong>Product Details</strong>: For each product, gather information such as:
      <ul>
        <li>Title</li>
        <li>Price</li>
        <li>Rating</li>
        <li>Number of Reviews</li>
        <li>Availability Status</li>
        <li>Delivery Information</li>
        <li>Product URL</li>
        <li>Product Image</li>
      </ul>
    </li>
    <li><strong>User-Friendly Interface</strong>: A responsive frontend to display the scraped data in an organized manner.</li>
  </ul>

  <h2>🛠️ Tech Stack</h2>

  <h3>🖥️ Backend</h3>
  <ul>
    <li><strong>Bun</strong>: A fast, all-in-one JavaScript runtime for server-side execution.</li>
    <li><strong>Express.js</strong>: Web framework for building the API.</li>
    <li><strong>Puppeteer</strong>: Headless browser automation for scraping Amazon pages.</li>
    <li><strong>TypeScript</strong>: Superset of JavaScript for type safety.</li>
  </ul>

  <h3>🎨 Frontend</h3>
  <ul>
    <li><strong>HTML5 &amp; CSS3</strong>: Markup and styling for the user interface.</li>
    <li><strong>TypeScript</strong>: For type safety and modern JavaScript features.</li>
    <li><strong>Responsive Design</strong>: Ensures compatibility across various devices.</li>
  </ul>

  <h2>⚙️ Installation &amp; Setup</h2>

  <h3>📋 Prerequisites</h3>
  <ul>
    <li><a href="https://bun.sh/" target="_blank" rel="noopener noreferrer">Bun</a> (v1.0 or higher)</li>
  </ul>

  <h3>🚀 Steps</h3>
  <ol>
    <li><strong>Clone the Repository</strong>
      <pre><code>git clone https://github.com/MKawan/Amazon-Product-Scraper.git
cd Amazon-Product-Scraper
      </code></pre>
    </li>
    <li><strong>Install Dependencies</strong>
      <pre><code>bun install
      </code></pre>
    </li>
    <li><strong>Run the Backend</strong>
      <pre><code>bun run start
      </code></pre>
      <p>The backend API will run at <code>http://localhost:3000</code>.</p>
    </li>
    <li><strong>Open the Frontend</strong>
      <p>Open <code>index.html</code> in your browser or run a local server pointing to the frontend folder. For example, using Bun's built-in server:</p>
      <pre><code>bun run dev
      </code></pre>
    </li>
  </ol>

  <h2>🎬 Demo</h2>

  <p>Watch a demo of the Amazon Product Scraper in action:</p>

  <iframe width="560" height="315" src="https://www.youtube.com/embed/HD-ajtcCseM?si=ThNNRg4EZo1TWxm0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  <h3>📝 Usage</h3>
  <ul>
    <li>Enter a keyword in the search box (e.g., "laptop").</li>
    <li>Click the <strong>Search</strong> button to start scraping Amazon.</li>
    <li>Results will be displayed with product image, title, price, rating, reviews, and more.</li>
    <li>Use <strong>Next</strong> and <strong>Back</strong> buttons to navigate pages.</li>
  </ul>

  <h2>🔧 Configuration</h2>
  <ul>
    <li><strong>Bun Configuration</strong>: Ensure Bun is installed globally or locally in the project. To install Bun globally:
      <pre><code>curl -fsSL https://bun.sh/install | bash
      </code></pre>
    </li>
    <li><strong>Environment Variables</strong>: Configure environment variables in a <code>.env</code> file (if applicable) for sensitive data like proxy settings or API keys. Example:
      <pre><code>PORT=3000
PUPPETEER_EXECUTABLE_PATH=/path/to/chromium
      </code></pre>
    </li>
    <li><strong>Dependencies Management</strong>: Bun handles dependencies efficiently. To add a new package:
      <pre><code>bun add &lt;package-name&gt;
      </code></pre>
    </li>
    <li><strong>Scripts</strong>: Update the <code>package.json</code> scripts to leverage Bun's commands:
      <pre><code>{
  "scripts": {
    "start": "bun run src/index.ts",
    "dev": "bun --hot run src/index.ts"
  }
}
      </code></pre>
    </li>
  </ul>

  <h2>🤝 Contributing</h2>
  <p>Contributions are welcome! To contribute:</p>
  <ul>
    <li>Fork the repository.</li>
    <li>Create a feature branch (<code>git checkout -b feature-name</code>).</li>
    <li>Commit your changes (<code>git commit -m "Add feature"</code>).</li>
    <li>Push to your branch (<code>git push origin feature-name</code>).</li>
    <li>Open a Pull Request.</li>
  </ul>
  <p>Please follow code style guidelines, use TypeScript conventions, and include meaningful commit messages.</p>

  <h2>📄 License</h2>
  <p>This project is licensed under the MIT License. See <a href="LICENSE" target="_blank" rel="noopener noreferrer">LICENSE</a> for details.</p>

  <h2>⚠️ Disclaimer</h2>
  <p>This project is for <strong>educational use only</strong>. Ensure compliance with Amazon’s Terms of Service when scraping data. Misuse may lead to IP bans or legal consequences.</p>

</body>
</html>
