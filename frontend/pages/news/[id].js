import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import CountryCard from "../../components/CountryCard";
import SupportCard from "../../components/SupportGroupCard";

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
      console.log("article");
      if (id) {
        // Only fetch data if `id` is available
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
      console.log("Fetching country...");
      try {
        const response = await axios.get(
          `https://api.palestinewatch.me/api/countries/${article.countryId}`
        );
        const data = response.data;
        console.log(data);
        setCountry(data || {});
      } catch (error) {
        console.error("Error fetching country:", error);
      }
    };
    const fetchSupportGroup = async () => {
      console.log("Fetching support group...");
      try {
        const response = await axios.get(
          `https://api.palestinewatch.me/api/support-groups/${article.supportGroupId}`
        );
        const group = response.data;
        console.log(group);
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
        <link rel="icon" href="/watermelon.ico" />
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
          {supportGroup && Object.keys(supportGroup).length > 0 ? (
            <div className="col-lg-4 col-md-6 mb-4">
              <SupportCard
                id={supportGroup.id}
                groupName={truncateString(supportGroup.name, 50)}
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
                id={country.id} // Using coa_iso as the ID
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
