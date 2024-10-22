import Head from "next/head";
import SupportCard from "../components/SupportGroupCard";
import { React, useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";  // Assuming you're using Bootstrap for pagination

export default function SupportGroups() {
  const [supportGroups, setSupportGroups] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const groupsPerPage = 3; // Number of support groups to display per page

  useEffect(() => {
    const fetchSupportGroups = async () => {
      try {
        const groups = [
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
            link: "http://www.chicagofaithcoalition.org/",
            urlImage:
              "https://www.chicagofaithcoalition.org/images/KidsTearDownSignWall.jpg",
          },
        ];

        setSupportGroups(groups);
      } catch (error) {
        console.error('Error fetching support groups:', error);
      }
    };

    fetchSupportGroups();
  }, []);

  function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
  }

  // Pagination logic
  const indexOfLastGroup = currentPage * groupsPerPage;
  const indexOfFirstGroup = indexOfLastGroup - groupsPerPage;
  const currentGroups = supportGroups.slice(indexOfFirstGroup, indexOfLastGroup);

  const totalPages = Math.ceil(supportGroups.length / groupsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h1 className="text-center mt-4 mb-4">Support Groups</h1> {/* Centered title */}
        
        <div className="row justify-content-center">
          {currentGroups.map((group) => (
            <div key={group.id} className="col-lg-4 col-md-6 mb-4">
              <SupportCard
                id={group.id}
                groupName={truncateString(group.name, 50)}
                groupEmail={group.email}
                groupCity={group.city}
                groupState={group.state}
                groupZipCode={group.zipCode}
                groupLink={group.link}
                groupImageURL={group.urlImage}
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
