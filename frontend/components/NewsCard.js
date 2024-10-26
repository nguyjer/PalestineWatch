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
}) {
  // Function to truncate the description to 85 characters
  function truncateString(str, num) {
    return str?.length > num ? str.slice(0, num) + "..." : str;
  }

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
          {truncateString(description, 85)} {/* Truncate to 85 characters */}
        </p>
        <p className="card-text">
          <small className="text-muted">
            By {truncateString(author, 20) || "Unknown"} | {source || "Unknown"} <br></br> {new Date(publishedAt).toLocaleDateString()}
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
