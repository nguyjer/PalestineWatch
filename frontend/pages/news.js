// pages/about.js

import Head from "next/head";
import NewsCard from "../components/NewsCard";
import { React, useState, useEffect } from "react";
import { Pagination } from "react-bootstrap"; // Assuming you're using Bootstrap for pagination

export default function About() {
  const [newsCards, setNewsCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3; // Number of cards to display per page

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const articles = [
          {
            article_id: "1",
            author: "N/A",
            title: "Biden says wider Mideast war 'has to be avoided'",
            description: "WASHINGTON: US President Joe Biden said on Sunday (Sep 29) that a regional conflict in the Middle East \"has to be avoided,\" as fresh Israeli strikes killed nearly 50 in Lebanon, and hit targets in Gaza and as far afield as Yemen.",
            url: "https://www.channelnewsasia.com/world/biden-says-wider-mideast-war-has-be-avoided-4648141",
            urlToImage: "https://onecms-res.cloudinary.com/image/upload/s--Mo7nl6Uk--/fl_relative,g_south_east,l_one-cms:core:watermark:ap_data-1,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/biden_57699.jpg?itok=sYnFCdwA",
            publishedAt: "2024-09-29T19:42:06Z",
            content: "WASHINGTON: US President Joe Biden said on Sunday (Sep 29) that a regional conflict in the Middle East \"has to be avoided,\" as fresh Israeli strikes killed nearly 50 in Lebanon, and hit targets in Ga…",
            source: "CNA"
          },
          {
            article_id: "2",
            author: "Olivier Pironet",
            title: "Israel: controlling the past to control the future",
            description: "Israel's attempt to dispossess the Palestinians has for decades included laying siege to their culture. It begins with trying to erase their history from the land and extends to every aspect of daily life.",
            url: "https://mondediplo.com/2024/10/03palestine",
            urlToImage: "https://mondediplo.com/IMG/arton10554.jpg",
            publishedAt: "2024-09-29T18:33:21Z",
            content: "Virgin Atlantic caused an outcry in late 2017 with a new inflight menu that included Palestinian couscous salad.",
            source: "Mondediplo.com"
          },
          {
            article_id: "3",
            author: "RAHIMY RAHIM",
            title: "Anwar’s firm stance on Palestine crucial, says Mehdi Hasan",
            description: "KUALA LUMPUR: Prime Minister Datuk Seri Anwar Ibrahim’s firm stance on Palestine, especially in front of Western leaders, has been crucial and necessary, says renown British-American journalist Mehdi Hasan.",
            url: "https://www.thestar.com.my/news/nation/2024/09/30/anwars-firm-stance-on-palestine-crucial-says-mehdi-hasan",
            urlToImage: "https://apicms.thestar.com.my/uploads/images/2024/09/30/2938532.JPG",
            publishedAt: "2024-09-29T16:00:00Z",
            content: "KUALA LUMPUR: Prime Minister Datuk Seri Anwar Ibrahim’s firm stance on Palestine, especially in front of Western leaders, has been crucial and necessary.",
            source: "The Star Online"
          },
          // Add more articles here
        ];

        setNewsCards(articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
  }

  // Pagination logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = newsCards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(newsCards.length / cardsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Determine visible page numbers
  let visiblePages = [];
  if (totalPages <= 3) {
    visiblePages = [...Array(totalPages).keys()].map((i) => i + 1);
  } else {
    if (currentPage <= 2) {
      visiblePages = [1, 2, 3];
    } else if (currentPage >= totalPages - 1) {
      visiblePages = [totalPages - 2, totalPages - 1, totalPages];
    } else {
      visiblePages = [currentPage - 1, currentPage, currentPage + 1];
    }
  }

  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className="container">
        <h1 className="text-center mt-4 mb-4">News</h1> {/* Centered title */}
        
        {/* Summary below the word "News" */}
        <p className="text-center mb-4">
        News outlets play a crucial role in raising awareness about the situation in Palestine by providing information to a global audience. They highlight key developments, humanitarian issues, and the perspectives of those affected by the conflict. By reporting on events, injustices, and negotiations, news organizations help inform public opinion, foster international discourse, and encourage diplomatic or humanitarian action. Without media coverage, the complexities of the situation and the voices of Palestinians might be overlooked or underrepresented.
        </p>
        
        <div className="row justify-content-center">
          {currentCards.map((article) => (
            <div key={article.article_id} className="col-lg-4 col-md-6 mb-4">
              <NewsCard
                articleId={article.article_id}
                title={truncateString(article.title, 50)}
                description={truncateString(article.description, 95)}
                imageUrl={article.urlToImage}
                author={article.author}
                publishedAt={article.publishedAt}
                source={article.source}
              />
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <Pagination className="justify-content-center">
          <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </Pagination.Prev>
          {visiblePages.map((pageNumber) => (
            <Pagination.Item
              key={pageNumber}
              active={pageNumber === currentPage}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
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
