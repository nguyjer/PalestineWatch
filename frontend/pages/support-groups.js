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
        const response = await axios.get("http://127.0.0.1:5000/api/support-groups");
        const groups = await response.data; // Ensure correct data access
        setSupportGroups(groups); // Set the articles to state
      } catch (error) {
        console.error("Error fetching news:", error);
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
