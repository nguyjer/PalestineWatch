import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.overlay}>
        <main className={styles.mainContent}>
          <h1 className={styles.title}>Palestine Watch</h1>
          <p className={styles.description}>
            Website by Kenny Nguyen, Jeremy Nguyen, William Matherne, Rohan
            Damani, Aaryan Samal
          </p>
        </main>
      </div>

      <div className={styles.infoSection}>
        <h1>Palestine Casualties Count:</h1>
        <p className={styles.description}>42,385 killed</p>
        <h1>Info:</h1>
        <p className={styles.description}>
          A political website for all who believe that freedom for the
          Palestinian people is an integral part of achieving collective
          liberation. We provide resources and information to help you learn
          more about the suppression of the Palestinian people.
        </p>
      </div>
    </div>
  );
}
