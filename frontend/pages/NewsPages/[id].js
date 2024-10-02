// pages/articles/[id].js
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import styles from './id.module.css';

function ArticlePage() {
  const router = useRouter();
  const { id } = router.query; // Retrieve the dynamic article ID from the URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (!id) return;

    // Fetch the article details using the article ID
    const fetchArticle = async () => {
      // try {
      //   const response = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_545062b7bdf34301e4b818b3adf93fc0734ee&id=${id}`);
      //   const data = await response.json();
      //   console.log(data);
      //   //setArticle(data.results[0]); 
      // } catch (error) {
      //   console.error('Error fetching article:', error);
      // }
      const articleData = [{
        article_id: "1",
        author: "N/A",
        title: "Biden says wider Mideast war 'has to be avoided'",
        description: "WASHINGTON: US President Joe Biden said on Sunday (Sep 29) that a regional conflict in the Middle East \"has to be avoided,\" as fresh Israeli strikes killed nearly 50 in Lebanon, and hit targets in Gaza and as far afield as Yemen. Asked by a reporter about the…",
        url: "https://www.channelnewsasia.com/world/biden-says-wider-mideast-war-has-be-avoided-4648141",
        urlToImage: "https://onecms-res.cloudinary.com/image/upload/s--Mo7nl6Uk--/fl_relative,g_south_east,l_one-cms:core:watermark:ap_data-1,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/biden_57699.jpg?itok=sYnFCdwA",
        publishedAt: "2024-09-29T19:42:06Z",
        content: "WASHINGTON: US President Joe Biden said on Sunday (Sep 29) that a regional conflict in the Middle East \"has to be avoided,\" as fresh Israeli strikes killed nearly 50 in Lebanon, and hit targets in Ga… [+152 chars]", 
        source: "CNA"}, 
        {article_id: "2",
        author: "Olivier Pironet",
        title: "Israel: controlling the past to control the future",
        description: "Israel's attempt to dispossess the Palestinians has for decades included laying siege to their culture. It begins with trying to erase their history from the land and extends to every aspect of daily life.\n\n-\n2024/10\n\n/ \narticle",
        url: "https://mondediplo.com/2024/10/03palestine",
        urlToImage: "https://mondediplo.com/IMG/arton10554.jpg",
        publishedAt: "2024-09-29T18:33:21Z",
        content: "Virgin Atlantic caused an outcry in late 2017 with a new inflight menu that included Palestinian couscous salad. This was in fact maftoul, a popular traditional dish in the Middle East. An indignant … [+3386 chars]", 
        source: "Mondediplo.com"}, { article_id: "3",
        author: "RAHIMY RAHIM",
        title: "Anwar’s firm stance on Palestine crucial, says Mehdi Hasan",
        description: "KUALA LUMPUR: Prime Minister Datuk Seri Anwar Ibrahim’s firm stance on Palestine, especially in front of Western leaders, has been crucial and necessary, says renown British-American journalist Mehdi Hasan (pic). Read full story",
        url: "https://www.thestar.com.my/news/nation/2024/09/30/anwars-firm-stance-on-palestine-crucial-says-mehdi-hasan",
        urlToImage: "https://apicms.thestar.com.my/uploads/images/2024/09/30/2938532.JPG",
        publishedAt: "2024-09-29T16:00:00Z",
        content: "KUALA LUMPUR: Prime Minister Datuk Seri Anwar Ibrahims firm stance on Palestine, especially in front of Western leaders, has been crucial and necessary, says renown British-American journalist Mehdi … [+1843 chars]",
        source: "The Star Online"
        }
        ]

    setArticle(articleData.find((article) => article.article_id === id))
    };

    fetchArticle();
  }, [id]);

  function removeBracketedText(str) {
    // Use a regular expression to find and remove any trailing bracketed text, e.g., "(...)" or "[...]"
    return str.replace(/\s?[\[\(][^\[\]\(\)]+[\]\)]$/, '');
  }

  if (!article) return <p>Loading...</p>;

  return (
    <main className={styles.mainContent}>
    <div className={styles.ArticleTitle}><h1>{article.title}</h1></div>
    <div className={styles.ArticlePage}>
        <div ><img className={styles.ArticleImage} src={article.urlToImage} alt="Article Image" />        </div>
            <p>{removeBracketedText(article.content)}<a href={article.url}>Read More</a></p>
            <p>Source: {article.source}</p>
            <p>Published on: {article.publishedAt}</p>
    </div>
    </main>
  );
} 

export default ArticlePage;
