// pages/about.js
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContent}>
        <h1 >About Page</h1>
        <p>
          This is the About page for Palestine Watch.
        </p>
      </main>
    </div>
  );
}
