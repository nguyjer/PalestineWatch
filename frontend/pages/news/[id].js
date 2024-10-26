import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { React, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

import SupportCard from "../../components/SupportGroupCard";

export default function ArticlePage() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);
  const [country, setCountry] = useState(null);
  const [supportGroups, setSupportGroups] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (id) { // Only fetch data if `id` is available
        try {
          const response = await axios.get(`https://api.palestinewatch.me/api/news/${id}`);
          const fetchedArticle = response.data;
          setArticle(fetchedArticle);
        } catch (error) {
          console.error("Error fetching article:", error);
        }
      }
    };

    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          `https://api.palestinewatch.me/api/countries/${article.countryId}`
        ); // Fetch the article details
        const data = await response.data;
        console.log(data);
        setCountry(data[id] || {});
      } catch (error) {
        console.error("Error fetching country:", error);
      }
    };

    const fetchSupportGroups = async () => {
      try {
        const response = await axios.get(
          `https://api.palestinewatch.me/api/support-group/${article.supportGroupId}`
        );
        const group = await response.data;
        setSupportGroups(group || {});
      } catch (error) {
        console.error("Error fetching group:", error);
      }
    };

    fetchArticle();
    fetchCountry();
    fetchSupportGroups();
  }, [id]); // Refetch whenever `id` changes

  if (!article) {
    return <div>Loading...</div>;
  }
  if (!country) {
    return <div>Loading...</div>;
  }
  if (!supportGroups) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{article.title || "Article Details"} - Palestine Watch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h2 className="text-center mt-4 mb-4">{article.title}</h2>
        <div className="text-center mb-4">
          <img
            src={article.url_image}
            alt={article.title}
            className="img-fluid mb-3"
            style={{ maxHeight: "300px", width: "auto", objectFit: "contain" }} // Made image smaller, no cropping
          />
        </div>
        <div className="mb-4 text-center">
          <p>
            <strong>Author:</strong> {article.author}
          </p>
          <p>
            <strong>Published on:</strong>{" "}
            {new Date(article.publish_date).toLocaleDateString()}
          </p>
          <p>
            <strong>Source:</strong> {article.source}
          </p>
        </div>
        <article className="mb-5">
          <p>{article.content}</p> {/* No cropping, full content displayed */}
        </article>
        <div className="text-center">
          <button className="btn btn-primary" onClick={() => router.back()}>
            Go Back
          </button>
        </div>
        <h1>Explore More: </h1>
        <div>
          {supportGroups && Object.keys(supportGroups).length > 0 ? (
            <SupportCard {...supportGroups} />
          ) : (
            <p>No support group available</p>
          )}
          {country && Object.keys(country).length > 0 ? (
            <CountryCard {...country} />
          ) : (
            <p>No country available</p>
          )}
        </div>

      </main>
    </div>
  );
}
