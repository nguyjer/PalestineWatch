import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

export default function NewsCard({
  articleId,
  title,
  description,
  imageUrl,
  author,
  publishedAt,
  source,
  searchTerm
}) {
  // Function to truncate the description to 85 characters
  function truncateString(str, num) {
    return str?.length > num ? str.slice(0, num) + "..." : str;
  }

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
    <div className="card h-100 d-flex flex-column"
     style={{ minHeight: '50vh' }}> {/* Setting minHeight to 50vh */}
      <img
        src={imageUrl || "/placeholder-image.jpg"}
        alt={`${title} image`}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }} // Ensuring uniform image height
      />
      <div className="card-body d-flex flex-column flex-grow-1">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {highlightText(truncateString(description, 85), searchTerm)} {/* Truncate to 85 characters */}
        </p>
        <p className="card-text">
          <small className="text-muted">
            By {highlightText(truncateString(author, 20), searchTerm) || "Unknown"} | {highlightText(source, searchTerm) || "Unknown"} <br></br> {highlightText(new Date(publishedAt).toLocaleDateString(), searchTerm)}
          </small>
        </p>
        {/* Adding a spacer to push the button to the bottom */}
        <div className="mt-auto d-flex justify-content-center">
          <Link href={`/news/${articleId}`} className="btn btn-light" style={{ width: "80%" }}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
