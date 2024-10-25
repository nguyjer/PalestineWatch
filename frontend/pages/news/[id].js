import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { React, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

export default function ArticlePage() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);

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

    fetchArticle();
  }, [id]); // Refetch whenever `id` changes

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
            className="img-fluid mb-3" 
            style={{ maxHeight: '300px', width: 'auto', objectFit: 'contain' }} // Made image smaller, no cropping
          />
        </div>
        <div className="mb-4 text-center">
          <p><strong>Author:</strong> {article.author}</p>
          <p><strong>Published on:</strong> {new Date(article.publish_date).toLocaleDateString()}</p>
          <p><strong>Source:</strong> {article.source}</p>
        </div>
        <article className="mb-5">
          <p>{article.content}</p> {/* No cropping, full content displayed */}
        </article>
        <div className="text-center">
          <button className="btn btn-primary" onClick={() => router.back()}>Go Back</button>
        </div>
      </main>
    </div>
  );
}
