import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import CountryCard from "../../components/CountryCard";
import SupportCard from "../../components/SupportGroupCard";
import Link from "next/link";

export default function ArticlePage() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);
  const [country, setCountry] = useState(null);
  const [supportGroup, setSupportGroup] = useState(null);

  function truncateString(str, num) {
    return str?.length > num ? str.slice(0, num) + "..." : str;
  }

  useEffect(() => {
    const fetchArticle = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `https://api.palestinewatch.me/api/news/${id}`
          );
          const fetchedArticle = response.data;
          setArticle(fetchedArticle);
        } catch (error) {
          console.error("Error fetching article:", error);
        }
      }
    };
    fetchArticle();
  }, [id]);

  useEffect(() => {
    if (!article) return;

    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          `https://api.palestinewatch.me/api/countries/${article.countryId}`
        );
        const data = response.data;
        setCountry(data || {});
      } catch (error) {
        console.error("Error fetching country:", error);
      }
    };

    const fetchSupportGroup = async () => {
      try {
        const response = await axios.get(
          `https://api.palestinewatch.me/api/support-groups/${article.supportGroupId}`
        );
        const group = response.data;
        setSupportGroup(group || {});
      } catch (error) {
        console.error("Error fetching group:", error);
      }
    };

    fetchCountry();
    fetchSupportGroup();
  }, [article]);

  if (!article) {
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
            className="img-fluid mb-3 pt-5"
            style={{ maxHeight: "50vh", width: "auto", objectFit: "contain" }}
          />
        </div>
        
        {/* Group author, published date, and source closer together */}
        <div className="mb-4 text-center">
          <p className="mb-1">
            <strong>Author:</strong> {article.author}
          </p>
          <p className="mb-1">
            <strong>Published on:</strong>{" "}
            {new Date(article.publish_date).toLocaleDateString()}
          </p>
          <p className="mb-1">
            <strong>Source:</strong> {article.source}
          </p>
        </div>
        
        <article className="mb-5 text-center">
          <p>{article.content}</p> {/* No cropping, full content displayed */}
        </article>

        {/* Read More button linking to the original article */}
        <div className="text-center mb-5 pb-5">
            <Link href={article.url}>
                Full Article
            </Link>
        </div>

        {/* Explore More section */}
        <div className="text-center mt-5">
          <h1>Explore More</h1>
        </div>
        <div className="row justify-content-center mt-4">
          {supportGroup && Object.keys(supportGroup).length > 0 ? (
            <div className="col-lg-4 col-md-6 mb-4">
              <SupportCard
                id={supportGroup.id}
                groupName={truncateString(supportGroup.name, 50 )}
                groupEmail={supportGroup.email}
                groupCity={supportGroup.city}
                groupState={supportGroup.state}
                groupZipCode={supportGroup.zipcode}
                groupLink={supportGroup.link}
                groupImageURL={supportGroup.url_image}
              />
            </div>
          ) : (
            <p>No support group available</p>
          )}
          {country && Object.keys(country).length > 0 ? (
            <div className="col-lg-4 col-md-6 mb-4">
              <CountryCard
                id={country.id}
                country={country.official_name}
                flag={country.flag_url}
                capital={country.capital}
                population={country.population}
                region={country.region}
                subregion={country.subregion}
              />
            </div>
          ) : (
            <p>No country available</p>
          )}
        </div>
      </main>
    </div>
  );
}
