import Link from "next/link";
import styles from "../styles/SupportGroupCard.module.css";

export default function SupportCard({
  id,
  groupName,
  groupEmail,
  groupCity,
  groupState,
  groupZipCode,
  groupLink,
  groupImageURL,
}) {
  return (
    <div className={styles.supportCard}>
      <h2>{groupName}</h2>
      <img
        src={groupImageURL || "/placeholder-image.jpg"} // Use a placeholder if no image URL
        alt={`${groupName} image`}
        className={styles.supportCardImage}
      />
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
          <p></p>
        </Link>
      ) : (
        <p>No website available</p>
      )}
      <Link href={`/support-groups/${id}`}>
        <u>Expand</u>
      </Link>
    </div>
  );
}
