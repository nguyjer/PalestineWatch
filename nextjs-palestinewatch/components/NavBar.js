// components/NavBar.js
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
            <p>Palestine Watch</p>
        </li>
        <li className={styles.navItem}>
            <p>About</p>
        </li>
        <li className={styles.navItem}>
            <p>Support Groups</p>
        </li>
        <li className={styles.navItem}>
          <p>Countries</p>
        </li>
        <li className={styles.navItem}>
          <p>News</p>
        </li>
      </ul>
    </nav>
  );
}
