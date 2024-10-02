import Link from "next/link";
import styles from "../styles/SupportGroupCard.module.css";

export default function SupportCard({
  groupName,
  groupEmail,
  groupCity,
  groupState,
  groupZipCode,
  groupLink,
}) {
  return (
    <div className={styles.supportCard}>
      <h2>{groupName}</h2>
      <p>Email: {groupEmail || "Loading..."}</p>
      <p>City: {groupCity || "Missing Data"}</p>
      <p>State: {groupState || "Missing Data"}</p>
      <p>Zip Code: {groupZipCode || "Missing Data"}</p>
      {groupLink ? (
        <Link
          href={
            groupLink.startsWith("http://") || groupLink.startsWith("https://")
              ? groupLink
              : `https://${groupLink}`
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Link to Website</u>
        </Link>
      ) : (
        <p>No website available</p>
      )}
    </div>
  );
}
