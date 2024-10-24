import { useEffect, useState } from "react";
import Head from "next/head";
import CountryCard from "../components/CountryCard";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination } from "react-bootstrap"; // Importing Bootstrap for pagination

const ITEMS_PER_PAGE = 3; // Number of countries per page

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [countryDetails, setCountryDetails] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const opts = {
      page: 1,
      yearFrom: 2014,
      yearTo: 2023,
      coa: "JOR,LBN,SYR",
      cf_type: "ISO",
    };

    const baseUrl = "https://api.unhcr.org/population/v1/unrwa/";
    const queryString = new URLSearchParams(opts).toString();
    const apiUrl = `${baseUrl}?${queryString}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response error " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        const uniqueCountries = [];
        const countrySet = new Set();
        let idCounter = 1;

        data["items"].forEach((country) => {
          if (!countrySet.has(country.coa_iso)) {
            countrySet.add(country.coa_iso);
            uniqueCountries.push({
              ...country,
              id: idCounter,
            });
            idCounter += 1;
          }
        });
        setCountries(uniqueCountries);
        fetchCountryDetails(uniqueCountries);
      })
      .catch((error) => {
        console.error("Problem with fetch: ", error);
      });
  }, []);

  const fetchCountryDetails = async (countries) => {
    const details = {};

    for (const country of countries) {
      const coaIso = country.coa_iso;

      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/alpha/${coaIso}`
        );
        const countryData = res.data[0];

        details[coaIso] = {
          flag: countryData.flags.png,
          capital: countryData.capital ? countryData.capital[0] : "Unknown",
          population: countryData.population.toLocaleString(),
          region: countryData.region,
          subregion: countryData.subregion,
        };
      } catch (error) {
        console.error(`Problem with country - ${coaIso}:`, error);
      }
    }

    setCountryDetails(details);
  };

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
        <h2 className="text-center mb-4">Number of Countries: {countries.length}</h2>
        <div className="row justify-content-center">
          {currentCountries.map((country, index) => {
            const coaIso = country.coa_iso;
            const details = countryDetails[coaIso] || {};
            const id = country.id;

            return (
              <div key={id} className="col-lg-4 col-md-6 mb-4">
                <CountryCard
                  id={id}
                  country={country.coa_name}
                  flag={details.flag}
                  capital={details.capital}
                  population={details.population}
                  region={details.region}
                  subregion={details.subregion}
                />
              </div>
            );
          })}
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
