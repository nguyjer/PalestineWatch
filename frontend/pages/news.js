// pages/about.js
import Head from "next/head";
import styles from "../styles/News.module.css";
import NewsCard from "../components/NewsCard";
import { Card } from 'react-bootstrap';
import { React, useState, useEffect } from "react";


export default function About() {
  const [newsCards, setNewsCards] = useState([]);
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        // const response = await fetch(
        //   `https://newsdata.io/api/1/latest?apikey=pub_545062b7bdf34301e4b818b3adf93fc0734ee&q=Palestinian+territories+OR+Gaza+OR+West+Bank+OR+Palestinian+Authority+NOT+Hezbollah&language=en`
        // );
        // const data = await response.json();

        // const uniqueArticles = data.results
        //   .filter((article) => article.image_url) // Ensure `image_url` exists
        //   .filter((article, index, self) =>
        //     index === self.findIndex((a) => a.title === article.title)
        //   );

        // const articles = uniqueArticles.map((article, index) => ({
        //   article_id: article.article_id,
        //   title: article.title,
        //   description: article.description,
        //   content: article.description || article.title,
        //   image_url: article.image_url || "https://via.placeholder.com/150",
        //   pub_date: article.pubDate,
        //   country: article.country,
        // }));
        
        //console.log(articles);
        // const articles = [{article_id: "f8cbd7e33bcb798ec4a8ff8db5603097",content: "After Israel dialed up its attack on Hezbollah, deaths and displacements have shot up in Lebanon",
        //   country: ['india'], description: "After Israel dialed up its attack on Hezbollah, deaths and displacements have shot up in Lebanon",
        //   image_url: "https://th-i.thgim.com/public/incoming/6vy4b8/article68693337.ece/alternates/LANDSCAPE_1200/Lebanon_Israel_23568.jpg",
        //   pub_date: "2024-09-29 07:27:47", title: "Israel-Hezbollah conflict: Deaths and displacement rise in Lebanon"}, {article_id: "e9b4c88e57991a9ff61b50034b1fda7c",
        //   content: "Several others injured when Israeli army targeted civilian homes in northern, central Gaza",country: ['turkey'],description: "Several others injured when Israeli army targeted civilian homes in northern, central Gaza",
        //   image_url: "https://cdnuploads.aa.com.tr/uploads/Contents/2024/09/29/thumbs_b_c_c897236dfdda1dee2d8fe06a106171a0.jpg?v=104924",pub_date: "2024-09-29 07:48:39",
        //   title: "6 Palestinians killed in Israeli airstrikes on homes in Gaza"},
        //   {article_id: "c7ddada2d72e49f32cedcf6823603ed7", content: "UNITED NATIONS (AP) — European, Arab and Islamic nations have launched an initiative to strengthen support for a Palestinian state and its institutions, and prepare for a future after the war in Gaza and escalating conflict in Lebanon, Norway's foreign minister said Friday.",
        //     country: ['philippines'],description: "UNITED NATIONS (AP) — European, Arab and Islamic nations have launched an initiative to strengthen support for a Palestinian state and its institutions, and prepare for a future after the war in Gaza and escalating conflict in Lebanon, Norway's foreign minister said Friday.",
        //     image_url: "https://images.mb.com.ph/production/AP_24271750245937_41c26e286d.jpg",pub_date: "2024-09-29 01:10:17",title: "Europeans, Arab and Muslim nations launch a new initiative for an independent Palestinian state"}
        // ]

        const articles = [{
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

        // Set the articles into the newsCards array state
        setNewsCards(articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  function truncateString (str, num){
    // Check if the string length is greater than the specified number of characters
    if (str.length > num) {
      // Return the truncated string with "..."
      return str.slice(0, num) + "...";
    } else {
      // If the string length is less than or equal to the limit, return the original string
      return str;
  }
  };

  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.mainContent}>
            <div className={styles.newsCardContainer}>
              {newsCards.map((article) => (
                <li key={article.article_id} style={{ listStyle: 'none', margin: '10px' }}>
                <NewsCard
                  articleId={article.article_id}
                  title={truncateString(article.title, 50)}
                  description={truncateString(article.description, 95)}
                  imageUrl={article.urlToImage}
                  author={article.author}
                  publishedAt={article.publishedAt}
                />
              </li>))}            
            </div>
          </main>
    </div>
  );
}
