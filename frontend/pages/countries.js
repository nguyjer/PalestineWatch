import { useEffect, useState } from "react";
import Head from "next/head";
import CountryCard from "../components/CountryCard";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination } from "react-bootstrap"; // Importing Bootstrap for pagination

const ITEMS_PER_PAGE = 3; // Number of countries per page

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://api.palestinewatch.me/api/countries"
        );
        const data = response.data; // Access the data directly

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

  // Pagination logic
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentCountries = countries.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(countries.length / ITEMS_PER_PAGE);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/watermelon.ico" />
      </Head>
      <main className="container">
        <h1 className="text-center mt-4 mb-4">Countries</h1>{" "}
        {/* Centered title */}
        {/* Summary below the word "Countries" */}
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
        <h2 className="text-center mb-4">
          Number of Countries: {countries.length}
        </h2>
        <div className="row justify-content-center">
          {currentCountries.map((country, index) => (
            <div key={country.id || index} className="col-lg-4 col-md-6 mb-4">
              <CountryCard
                id={country.id} // Using coa_iso as the ID
                country={country.coa_name}
                flag={country.flag_url}
                capital={country.capital}
                population={country.population}
                region={country.region}
                subregion={country.subregion}
              />
            </div>
          ))}
        </div>
        {/* Pagination */}
        <Pagination className="justify-content-center mt-4">
          <Pagination.Prev
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </Pagination.Prev>
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Pagination.Next>
        </Pagination>
      </main>
    </div>
  );
}
