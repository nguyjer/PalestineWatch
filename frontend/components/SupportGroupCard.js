import Link from "next/link";

export default function SupportCard({
  groupName,
  groupEmail,
  groupCity,
  groupState,
  groupZipCode,
  groupLink,
}) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "10px",
        borderRadius: "8px",
        width: "250px",
      }}
    >
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
