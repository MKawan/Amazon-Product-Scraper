# Amazon Product Scraper

![Amazon Product Scraper Logo](https://github.com/MKawan/Amazon-Product-Scraper/raw/main/assets/logo.png)

## Overview

The **Amazon Product Scraper** is a full-stack web scraping application designed to extract detailed product information from Amazon. Built with a modern tech stack, it offers both backend and frontend components to facilitate seamless data extraction and presentation.

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

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building the API.
- **Puppeteer**: Headless browser automation for scraping Amazon pages.
- **TypeScript**: Superset of JavaScript for type safety.

### Frontend

- **HTML5 & CSS3**: Markup and styling for the user interface.
- **TypeScript**: For type safety and modern JavaScript features.
- **Responsive Design**: Ensures compatibility across various devices.

## Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/MKawan/Amazon-Product-Scraper.git
   cd Amazon-Product-Scraper
   ```
2. **Install Dependencies**

### For both backend and frontend (if separate):

  ```bash
  npm install
  ```

Run the Backend
   ```bash
    npm run start
   ```
  - The backend API will run at http://localhost:3000.

  - Open the Frontend

  - Open index.html in your browser or run a local server pointing to the frontend folder.

### Usage

   - Enter a keyword in the search box (e.g., "laptop").

   - Click the Search button to start scraping Amazon.

   - Results will be displayed with product image, title, price, rating, reviews, and more.

   - Use Next and Back buttons to navigate pages.

### Contributing

### Contributions are welcome! To contribute:

  - Fork the repo

  - Create a feature branch (git checkout -b feature-name)

  - Commit your changes (git commit -m "Add feature")

  - Push to your branch (git push origin feature-name)

  - Open a Pull Request

- Please follow code style and include meaningful commit messages.

## License

- This project is licensed under the MIT License. See LICENSE for details.

   # Disclaimer: This project is for educational use only. Make sure to respect Amazon’s Terms of Service when scraping data.
