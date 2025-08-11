# Amazon Product Scraper

## Overview

The **Amazon Product Scraper** is a full-stack web scraping application designed to extract detailed product information from Amazon. Built with a modern tech stack, it offers both backend and frontend components to facilitate seamless data extraction and presentation.

<img width="1356" height="652" alt="Captura de tela de 2025-08-11 16-53-57" src="https://github.com/user-attachments/assets/9828fd0d-483a-49a6-92c0-bc15afd6342b" />

## Features

- **Keyword-Based Search**: Input a search term to retrieve a list of products matching the query.
- **Pagination Support**: Navigate through multiple pages of search results.
- **Product Details**: For each product, gather information such as:
  - Title
  - Price
  - Rating
  - Number of Reviews
  - Availability Status
  - Delivery Information
  - Product URL
  - Product Image
- **User-Friendly Interface**: A responsive frontend to display the scraped data in an organized manner.

## Tech Stack

### Backend

- **Bun**: A fast, all-in-one JavaScript runtime for server-side execution.
- **Express.js**: Web framework for building the API.
- **Puppeteer**: Headless browser automation for scraping Amazon pages.
- **TypeScript**: Superset of JavaScript for type safety.

### Frontend

- **HTML5 & CSS3**: Markup and styling for the user interface.
- **TypeScript**: For type safety and modern JavaScript features.
- **Responsive Design**: Ensures compatibility across various devices.

## Installation & Setup

### Prerequisites

- [Bun](https://bun.sh/) (v1.0 or higher)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/MKawan/Amazon-Product-Scraper.git
   cd Amazon-Product-Scraper
   ```

2. **Install Dependencies**

   For both backend and frontend (if separate):

   ```bash
   bun install
   ```

3. **Run the Backend**

   ```bash
   bun run start
   ```

   - The backend API will run at `http://localhost:3000`.

4. **Open the Frontend**

   - Open `index.html` in your browser or run a local server pointing to the frontend folder. For example, using Bun's built-in server:

     ```bash
     bun run dev
     ```
<iframe width="560" height="315" src="https://www.youtube.com/embed/HD-ajtcCseM?si=S3_T_nDkTCT9w4JW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Usage

- Enter a keyword in the search box (e.g., "laptop").
- Click the **Search** button to start scraping Amazon.
- Results will be displayed with product image, title, price, rating, reviews, and more.
- Use **Next** and **Back** buttons to navigate pages.

## Configuration

- **Bun Configuration**: Ensure Bun is installed globally or locally in the project. To install Bun globally:

  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

- **Environment Variables**: Configure environment variables in a `.env` file (if applicable) for sensitive data like proxy settings or API keys. Example:

  ```plaintext
  PORT=3000
  PUPPETEER_EXECUTABLE_PATH=/path/to/chromium
  ```

- **Dependencies Management**: Bun handles dependencies efficiently. To add a new package:

  ```bash
  bun add <package-name>
  ```

- **Scripts**: Update the `package.json` scripts to leverage Bun's commands:

  ```json
  {
    "scripts": {
      "start": "bun run src/index.ts",
      "dev": "bun --hot run src/index.ts"
    }
  }
  ```

## Contributing

Contributions are welcome! To contribute:

- Fork the repository.
- Create a feature branch (`git checkout -b feature-name`).
- Commit your changes (`git commit -m "Add feature"`).
- Push to your branch (`git push origin feature-name`).
- Open a Pull Request.

Please follow code style guidelines, use TypeScript conventions, and include meaningful commit messages.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Disclaimer

This project is for **educational use only**. Ensure compliance with Amazon’s Terms of Service when scraping data. Misuse may lead to IP bans or legal consequences.
