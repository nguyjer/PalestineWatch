// components/NavBar.js
import styles from "./NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <p>Palestine Watch</p>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/support-groups">
            Support Groups
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/countries">
            Countries
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/news">
            News
          </Link>
        </li>
      </ul>
    </nav>
  );
}
