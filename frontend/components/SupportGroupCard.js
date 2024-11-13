import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SupportCard({
  id,
  groupName,
  groupEmail,
  groupCity,
  groupState,
  groupZipCode,
  groupLink,
  groupImageURL,
  searchTerm,
}) {

  const highlightText = (text, term) => {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, "i"); // Match only the first occurrence, case-insensitive
    const matchIndex = text.search(regex);
    if (matchIndex === -1) return text; 
    // Highlight the first match
    const beforeMatch = text.slice(0, matchIndex);
    const matchText = text.slice(matchIndex, matchIndex + term.length);
    const afterMatch = text.slice(matchIndex + term.length);

    return (
      <>
        {beforeMatch}
        <span style={{ backgroundColor: "yellow" }}>{matchText}</span>
        {afterMatch}
      </>
    );
  };

  return (
    <div
      className="card h-100 d-flex flex-column text-center"
      style={{ minHeight: "50vh" }}
    >
      <img
        src={
          groupImageURL === "No Image Found" ||
          !groupImageURL.startsWith("http")
            ? "/Designer.png"
            : groupImageURL
        }
        alt={`${groupName} image`}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column flex-grow-1">
        <h5 className="card-title">{highlightText(groupName, searchTerm)}</h5>
        <div className="mb-2">
          <p className="card-text mb-1">
            Email: {highlightText(groupEmail || "Missing Data", searchTerm)}
          </p>
          <p className="card-text mb-1">
            City: {highlightText(groupCity || "Missing Data", searchTerm)}
          </p>
          <p className="card-text mb-1">
            State: {highlightText(groupState || "Missing Data", searchTerm)}
          </p>
          <p className="card-text mb-1">
            Zip Code:{" "}
            {highlightText(groupZipCode || "Missing Data", searchTerm)}
          </p>
        </div>
        <div className="mt-auto d-flex justify-content-center">
          <Link
            href={`/support-groups/${id}`}
            className="btn btn-light mt-2"
            style={{ width: "80%" }}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
