import Head from "next/head";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import { React, useState, useEffect } from "react";
import { Pagination } from "react-bootstrap"; // Assuming you're using Bootstrap for pagination

export default function About() {
  const [newsCards, setNewsCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9; // Number of cards to display per page

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/news");
        const articles = response.data; // Ensure correct data access
        setNewsCards(articles); // Set the articles to state
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  function truncateString(str, num) {
    return str?.length > num ? str.slice(0, num) + "..." : str;
  }

  // Pagination logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = newsCards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(newsCards.length / cardsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h1 className="text-center mt-4 mb-4">News</h1> {/* Centered title */}
        
        <div className="row justify-content-center">
          {currentCards.map((article) => (
            <div key={article.id} className="col-lg-4 col-md-6 mb-4">
              <NewsCard
                articleId={article.id}
                title={truncateString(article.title, 50)}
                description={truncateString(article.description, 95)}
                imageUrl={article.url_image}
                author={article.author}
                publishedAt={article.publish_date}
                source={article.source}
              />
          </div>
          ))}
        </div>
        
        {/* Pagination */}
        <Pagination className="justify-content-center">
          <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </Pagination.Prev>
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </Pagination.Next>
        </Pagination>
      </main>
    </div>
  );
}
