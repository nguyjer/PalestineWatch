import Head from "next/head";
import SupportCard from "../components/SupportGroupCard";
import { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap"; // Assuming you're using Bootstrap for pagination
import axios from "axios";
import SearchBar from "../components/SearchBar";

export default function SupportGroups() {
  const [supportGroups, setSupportGroups] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9; 

  useEffect(() => {
    const fetchSupportGroups = async () => {
      try {
        const response = await axios.get(
          "https://api.palestinewatch.me/api/support-groups"
        );
        const groups = response.data;
        setSupportGroups(groups); // Set the full list of groups
        setFilteredGroups(groups); // Initially, show all groups
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    fetchSupportGroups();
  }, []);

  const handleSearch = async (searchParams) => {
    try {
      console.log("Searching with params:", searchParams);
      const response = await axios.get(
        "https://api.palestinewatch.me/api/support-groups",
        { params: { query: searchParams } }
      );
      setSupportGroups(response.data);
      setCurrentPage(1); // Reset to first page after searching
    } catch (error) {
      console.error("Error fetching filtered groups:", error);
    }
  };

  // Pagination logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentGroups = supportGroups.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(supportGroups.length / cardsPerPage);

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

  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/watermelon.ico" />
      </Head>
      <main className="container">
        <h1 className="text-center mt-4 mb-4">Support Groups</h1>
        <p className="text-center mb-4">
          Support groups are vital for maintaining morale, raising funds, and
          delivering aid to the Palestinian people. By fostering a sense of
          solidarity and hope, these groups keep communities engaged and
          motivated. They also play a critical role in mobilizing financial
          resources through donations and fundraising efforts, which are
          essential for humanitarian assistance.
        </p>
        {/* Pass handleSearch to SearchBar */}
        <SearchBar onSearch={handleSearch} />
        <h2 className="text-center mb-4">
          Number of Groups: {supportGroups.length}
        </h2>
        <div className="row justify-content-center">
          {currentGroups.map((group) => (
            <div key={group.id} className="col-lg-4 col-md-6 mb-4">
              <SupportCard
                id={group.id}
                groupName={group.name}
                groupEmail={group.email}
                groupCity={group.city}
                groupState={group.state}
                groupZipCode={group.zipcode}
                groupLink={group.link}
                groupImageURL={group.url_image}
              />
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
