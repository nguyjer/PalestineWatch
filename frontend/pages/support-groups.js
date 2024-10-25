import Head from "next/head";
import SupportCard from "../components/SupportGroupCard";
import { React, useState, useEffect } from "react";
import { Pagination } from "react-bootstrap"; // Assuming you're using Bootstrap for pagination

export default function SupportGroups() {
  const [supportGroups, setSupportGroups] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const groupsPerPage = 3; // Number of support groups to display per page

  useEffect(() => {
    const fetchSupportGroups = async () => {
      try {
        const response = await axios.get(
          "http://api.palestinewatch.me/api/support-groups"
        );
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
  const currentGroups = supportGroups.slice(
    indexOfFirstGroup,
    indexOfLastGroup
  );

  const totalPages = Math.ceil(supportGroups.length / groupsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/watermelon.ico" />
      </Head>
      <main className="container">
        <h1 className="text-center mt-4 mb-4">Support Groups</h1>{" "}
        {/* Centered title */}
        {/* Summary below the word "Support Groups" */}
        <p className="text-center mb-4">
          Support groups are vital for maintaining morale, raising funds, and
          delivering aid to the Palestinian people. By fostering a sense of
          solidarity and hope, these groups keep communities engaged and
          motivated. They also play a critical role in mobilizing financial
          resources through donations and fundraising efforts, which are
          essential for humanitarian assistance. Additionally, support groups
          help coordinate and distribute aid, ensuring that essential supplies
          like food, medical care, and shelter reach those in need despite
          difficult conditions on the ground.
        </p>
        <h2 className="text-center mb-4">
          Number of Groups: {supportGroups.length}
        </h2>
        <div className="row justify-content-center">
          {currentGroups.map((group) => (
            <div key={group.id} className="col-lg-4 col-md-6 mb-4">
              <SupportCard
                id={group.id}
                groupName={truncateString(group.name, 50)}
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
