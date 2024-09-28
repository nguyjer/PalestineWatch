// pages/about.js
import Head from "next/head";
import styles from "../styles/Home.module.css";


export default function About() {
  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/favicon.ico" />
          </Head>
          
          <main className={styles.mainContent}>
            <h1>News Page</h1>
            <p>This is the News page for Palestine Watch.</p>
          </main>
    </div>
  );
}
