import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.overlay}></div> {/* Overlay */}
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Palestine Watch</h1>

        <p className={styles.description}>
          Website by Kenny Nguyen, Jeremy Nguyen, William Matherne,
          Rohan Damani, Aaryan Samal
        </p>
      </main>
    </div>
  );
}
