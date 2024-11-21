import Head from "next/head";
import SupportCard from "../components/SupportGroupCard";
import NewsCard from "../components/NewsCard";
import CountryCard from "../components/CountryCard";
import { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap"; // Assuming you're using Bootstrap for pagination
import axios, { all } from "axios";
import SearchBar from "../components/SearchBar";

export default function searchAll() {
  const [allCards, setAllCards] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const cardsPerPage = 9;

  const handleSearch = async (searchParams) => {
    try {
      setSearchTerm(searchParams);

      // Fetch data from all three endpoints
      const [groupsResponse, newsResponse, countriesResponse] =
        await Promise.all([
          axios.get("https://api.palestinewatch.me/api/support-groups", {
            params: { query: searchParams },
          }),
          axios.get("https://api.palestinewatch.me/api/news", {
            params: { query: searchParams },
          }),
          axios.get("https://api.palestinewatch.me/api/countries", {
            params: { query: searchParams },
          }),
        ]);
      const uniqueCountries = Array.from(
        new Map(countriesResponse.data.map((country) => [country.coa_iso, country])).values()
      );
      // Merge all results with a type field to identify them
      const mergedResults = [
        ...groupsResponse.data.map((item) => ({ ...item, type: "group" })),
        ...newsResponse.data.map((item) => ({ ...item, type: "news" })),
        ...uniqueCountries.map((item) => ({
          ...item,
          type: "country",
        })),
      ];
      setAllCards(mergedResults);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  // Pagination logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentGroups = allCards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(allCards.length / cardsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  function truncateString(str, num) {
    return str?.length > num ? str.slice(0, num) + "..." : str;
  }
  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/watermelon.ico" />
      </Head>
      <main className="container">
        <h1 className="text-center mt-4 mb-4">All Model Search</h1>
        {/* Pass handleSearch to SearchBar */}
        <SearchBar
          onSearch={handleSearch}
          sortLabels={["Name", "City", "State", "Email", "Zip Code"]}
        />
        <h2 className="text-center mb-4">
          Number of Instances: {allCards.length}
        </h2>
        <div className="row justify-content-center">
          {currentGroups.map((card) => (
            <div key={card.id} className="col-lg-4 col-md-6 mb-4">
              {card.type === "group" ? (
                <SupportCard
                  id={card.id}
                  groupName={card.name}
                  groupEmail={card.email}
                  groupCity={card.city}
                  groupState={card.state}
                  groupZipCode={card.zipcode}
                  groupLink={card.link}
                  groupImageURL={card.url_image}
                  searchTerm={searchTerm}
                />
              ) : card.type === "news" ? (
                <NewsCard
                  articleId={card.id}
                  title={truncateString(card.title, 50)}
                  description={truncateString(card.description, 95)}
                  imageUrl={card.url_image}
                  author={card.author}
                  publishedAt={card.publish_date}
                  source={card.source}
                  searchTerm={searchTerm}
                />
              ) : card.type === "country" ? (
                <CountryCard
                  id={card.id}
                  country={card.official_name}
                  flag={card.flag_url}
                  capital={card.capital}
                  population={card.population}
                  region={card.region}
                  subregion={card.subregion}
                  searchTerm={searchTerm}
                />
              ) : null}
            </div>
          ))}
        </div>
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
