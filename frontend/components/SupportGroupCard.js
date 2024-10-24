// components/SupportCard.js

import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

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
    <div className="card h-100 d-flex flex-column">
      <img
        src={groupImageURL || "/placeholder-image.jpg"}
        alt={`${groupName} image`}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }} // Ensuring uniform image height
      />
      <div className="card-body d-flex flex-column flex-grow-1">
        <h5 className="card-title">{groupName}</h5>
        <div className="mb-2">
          <p className="card-text mb-1">Email: {groupEmail || "Loading..."}</p>
          <p className="card-text mb-1">City: {groupCity || "Missing Data"}</p>
          <p className="card-text mb-1">State: {groupState || "Missing Data"}</p>
          <p className="card-text mb-1">Zip Code: {groupZipCode || "Missing Data"}</p>
        </div>
        {groupLink ? (
          <Link
            href={
              groupLink.startsWith("http://") || groupLink.startsWith("https://")
                ? groupLink
                : `https://${groupLink}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="card-link" // Using card-link for subtle styling
          >
            Link to Website
          </Link>
        ) : (
          <p className="card-text">No website available</p>
        )}
        <div className="mt-auto">
        <Link href={`/support-groups/${id}`} className="btn btn-primary mt-2 align-self-start">
          Read More
        </Link>
        </div>
      </div>
    </div>
  );
}
