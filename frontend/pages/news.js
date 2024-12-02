import Head from "next/head";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import { React, useState, useEffect } from "react";
import { Pagination } from "react-bootstrap"; // Assuming you're using Bootstrap for pagination
import SearchBar from "../components/SearchBar";


export default function News() {
  const [newsCards, setNewsCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const cardsPerPage = 9; // Number of cards to display per page

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        "https://api.palestinewatch.me/api/news"
      );
      const articles = response.data; // Ensure correct data access
      setNewsCards(articles); // Set the articles to state
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {

    fetchNews();
  }, []);

  const handleSort = (sortType) => {
    console.log("Sorting by:", sortType);
    if (sortType === "Sort By") {
      fetchNews();
    }
    else if (sortType === "Author") {
      const sortedNews = [...newsCards].sort((a, b) =>
        a.author.localeCompare(b.author)
      );
      setNewsCards(sortedNews);
      setCurrentPage(1); 
    }
    else if (sortType === "Publish Date") {
      const sortedNews = [...newsCards].sort((a, b) =>
        new Date(a.publish_date) - new Date(b.publish_date)
      );
      setNewsCards(sortedNews);
      setCurrentPage(1); 
    }
    else if (sortType === "Description") {
      const sortedNews = [...newsCards].sort((a, b) =>
        a.description.localeCompare(b.description)
      );
      setNewsCards(sortedNews);
      setCurrentPage(1); 
    }
  };

  function truncateString(str, num) {
    return str?.length > num ? str.slice(0, num) + "..." : str;
  }

  // Pagination logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = newsCards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(newsCards.length / cardsPerPage);

   const handlePageChange = (pageNumber) => {
     setCurrentPage(pageNumber);

     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   };
  
  const handleSearch = async (searchParams) => {
    try {
      setSearchTerm(searchParams);
      const response = await axios.get(
        "https://api.palestinewatch.me/api/news",
        { params: { query: searchParams } }
      );
      setNewsCards(response.data);
      setCurrentPage(1); // Reset to first page after searching
    } catch (error) {
      console.error("Error fetching filtered news:", error);
    }
  }

  // Calculate visible page numbers
  const maxVisiblePages = 3;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = startPage + maxVisiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/watermelon.ico" />
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
        <SearchBar onSearch={handleSearch} onSort={handleSort} sortLabels={["Author", "Publish Date", "Description"]} />
        <h2 className="text-center mb-4">
          Number of Articles: {newsCards.length}
        </h2>
        <div className="row justify-content-center">
          {currentCards.map((article) => (
            <div key={article.article_id} className="col-lg-4 col-md-6 mb-4">
              <NewsCard
                articleId={article.id}
                title={truncateString(article.title, 50)}
                description={truncateString(article.description, 95)}
                imageUrl={article.url_image}
                author={article.author}
                publishedAt={article.publish_date}
                source={article.source}
                searchTerm={searchTerm}
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
          {pageNumbers.map((pageNumber) => (
            <Pagination.Item
              key={pageNumber}
              active={pageNumber === currentPage}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
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
