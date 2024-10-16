//import styles from "../styles/ModelPage.module.css";
//import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import SupportCard from "../components/SupportGroupCard";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is installed

export default function SupportGroups() {
  const [supportGroups, setSupportGroups] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const groupSize = 3; // Number of groups per page

  useEffect(() => {
    // Hard code groups
    setSupportGroups([
      {
        id: 1,
        name: "Adalah-NY: Campaign for the Boycott of Israel",
        email: "info@adalahny.org",
        city: "New York City",
        state: "NY",
        zipCode: "10603",
        link: "https://adalahny.org/",
        urlImage:
          "https://images.squarespace-cdn.com/content/v1/6168ba7212c0a730b7d1b341/1634259315744-1AJ2CK53J61TVFCXC59K/Bye-bye+Leviev+December+2017.png?format=1500w",
      },
      {
        id: 2,
        name: "Al-Awda PRRC",
        email: "amanibarakat@gmail.com",
        city: "Coral Springs",
        state: "FL",
        zipCode: "33075",
        link: "https://al-awdapalestine.org/",
        urlImage:
          "https://al-awdapalestine.org/wp-content/uploads/2017/07/Al-AWDA-LARGE-WEB-LOGO.jpg",
      },
      {
        id: 3,
        name: "Chicago Faith Coalition on Middle East Policy",
        email: "No Email Available",
        city: "Chicago",
        state: "IL",
        zipCode: "60605",
        link: "	http://www.chicagofaithcoalition.org/",
        urlImage:
          "https://www.chicagofaithcoalition.org/images/KidsTearDownSignWall.jpg",
      },
      {
        id: 4,
        name: "Palestine Legal",
        email: "info@palestinelegal.org",
        city: "Chicago",
        state: "IL",
        zipCode: "60613",
        link: "https://palestinelegal.org/",
        urlImage:
          "https://palestinelegal.org/images/palestine-legal-logo.png",
      },
      {
        id: 5,
        name: "US Campaign for Palestinian Rights",
        email: "info@uscpr.org",
        city: "Washington",
        state: "DC",
        zipCode: "20036",
        link: "https://uscpr.org/",
        urlImage:
          "https://uscpr.org/wp-content/uploads/2017/08/cropped-uscpr-logo.png",
      },
      {
        id: 6,
        name: "American Muslims for Palestine",
        email: "info@ampalestine.org",
        city: "Bridgeview",
        state: "IL",
        zipCode: "60455",
        link: "https://www.ampalestine.org/",
        urlImage:
          "https://www.ampalestine.org/sites/default/files/AMP-logo.png",
      },
      // Add more groups if needed
    ]);
  }, []);

  // Dynamically calculate total number of pages
  const totalPages = Math.ceil(supportGroups.length / groupSize);

  // Get the current page's support groups
  const currentGroups = supportGroups.slice(
    (currentPage - 1) * groupSize,
    currentPage * groupSize
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Support Groups in the U.S.</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {currentGroups.map((group) => (
            <SupportCard
              key={group.id}
              id={group.id}
              groupName={group.name}
              groupEmail={group.email}
              groupCity={group.city}
              groupState={group.state}
              groupZipCode={group.zipCode}
              groupLink={group.link}
              groupImageURL={group.urlImage}
            />
          ))}
        </div>

        {/* Pagination */}
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>

            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}
