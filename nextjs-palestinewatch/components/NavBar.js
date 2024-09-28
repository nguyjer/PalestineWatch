// components/NavBar.js
import styles from "./NavBar.module.css";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter

export default function NavBar() {
  const router = useRouter(); // Use useRouter to get the current path

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li
          className={`${styles.navItem} ${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          <Link href="/">PalestineWatch</Link>
        </li>
        <li
          className={`${styles.navItem} ${
            router.pathname === "/about" ? styles.active : ""
          }`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`${styles.navItem} ${
            router.pathname === "/support-groups" ? styles.active : ""
          }`}
        >
          <Link href="/support-groups">Support Groups</Link>
        </li>
        <li
          className={`${styles.navItem} ${
            router.pathname === "/countries" ? styles.active : ""
          }`}
        >
          <Link href="/countries">Countries</Link>
        </li>
        <li
          className={`${styles.navItem} ${
            router.pathname === "/news" ? styles.active : ""
          }`}
        >
          <Link href="/news">News</Link>
        </li>
      </ul>
    </nav>
  );
}
