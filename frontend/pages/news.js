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
        const response = await axios.get("https://18.117.144.78/api/news");
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
        {/* Summary below the word "News" */}
        <p className="text-center mb-4">
          News outlets play a crucial role in raising awareness about the
          situation in Palestine by providing information to a global audience.
          They highlight key developments, humanitarian issues, and the
          perspectives of those affected by the conflict. By reporting on
          events, injustices, and negotiations, news organizations help inform
          public opinion, foster international discourse, and encourage
          diplomatic or humanitarian action. Without media coverage, the
          complexities of the situation and the voices of Palestinians might be
          overlooked or underrepresented.
        </p>
        <h2 className="text-center mb-4">
          Number of Articles: {newsCards.length}
        </h2>
        <div className="row justify-content-center">
          {currentCards.map((article) => (
            <div key={article.article_id} className="col-lg-4 col-md-6 mb-4">
              <NewsCard
                articleId={article.article_id}
                title={truncateString(article.title, 50)}
                description={truncateString(article.description, 95)}
                imageUrl={article.urlToImage}
                author={article.author}
                publishedAt={article.publishedAt}
                source={article.source}
              />
            </div>
          ))}
        </div>
        {/* Pagination */}
        <Pagination className="justify-content-center">
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
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
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Pagination.Next>
        </Pagination>
      </main>
    </div>
  );
}
