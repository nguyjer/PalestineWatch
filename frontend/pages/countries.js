import { useEffect, useState } from "react";
import Head from "next/head";
import CountryCard from "../components/CountryCard";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination } from "react-bootstrap"; // Importing Bootstrap for pagination
import SearchBar from "../components/SearchBar";

const ITEMS_PER_PAGE = 9; // Number of countries per page
const PAGINATION_LIMIT = 3; // Number of pagination items to show at a time

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://api.palestinewatch.me/api/countries"
        );
        const data = response.data;

        // Filter unique countries based on coa_iso
        const uniqueCountries = Array.from(
          new Map(data.map((country) => [country.coa_iso, country])).values()
        );

        setCountries(uniqueCountries); // Set the unique countries data to state
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = async (searchParams) => {
    try {
      setSearchTerm(searchParams);
      const response = await axios.get(
        "https://api.palestinewatch.me/api/countries",
        { params: { query: searchParams } }
      );
      const data = response.data;

      // Filter unique countries based on coa_iso
      const uniqueCountries = Array.from(
        new Map(data.map((country) => [country.coa_iso, country])).values()
      );

      setCountries(uniqueCountries);
      setCurrentPage(1); // Reset to first page after searching
    } catch (error) {
      console.error("Error fetching filtered countries:", error);
    }
  }

  // Pagination logic
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentCountries = countries.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(countries.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Determine the range of page numbers to show in pagination
  const startPage = Math.max(1, currentPage - Math.floor(PAGINATION_LIMIT / 2));
  const endPage = Math.min(totalPages, startPage + PAGINATION_LIMIT - 1);

  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/watermelon.ico" />
      </Head>
      <main className="container">
        <h1 className="text-center mt-4 mb-4">Countries</h1>
        <p className="text-center mb-4">
          Recognition as a sovereign state is vital for Palestine, as it affirms
          its identity, enables participation in global diplomacy, and
          facilitates access to humanitarian aid. This legitimacy is essential
          for advocating its rights and seeking justice on the international
          stage. During times of war, these asylum countries are crucial as they
          provide safety and stability for those fleeing conflict, allowing
          displaced individuals to rebuild their lives. Asylum countries also
          promote international solidarity and raise awareness of the struggles
          faced by those affected by violence, making recognition and asylum
          essential in protecting and uplifting communities in crisis. The
          following countries have shown support for Palestine and have provided
          asylum to refugees during the conflict:
        </p>
        <SearchBar onSearch={handleSearch} />
        <h2 className="text-center mb-4">
          Number of Countries: {countries.length}
        </h2>
        <div className="row justify-content-center">
          {currentCountries.map((country, index) => (
            <div key={country.id || index} className="col-lg-4 col-md-6 mb-4">
              <CountryCard
                id={country.id} // Using coa_iso as the ID
                country={country.official_name}
                flag={country.flag_url}
                capital={country.capital}
                population={country.population}
                region={country.region}
                subregion={country.subregion}
                searchTerm={searchTerm}
              />
            </div>
          ))}
        </div>
        {/* Pagination */}
        <Pagination className="justify-content-center mt-4">
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Pagination.Prev>
          {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
            const pageNumber = startPage + index;
            return (
              <Pagination.Item
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </Pagination.Item>
            );
          })}
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
