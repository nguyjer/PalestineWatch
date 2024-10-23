// components/NewsCard.js

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
  return (
    <div className="card h-100 d-flex flex-column">
      <img
        src={imageUrl || "/placeholder-image.jpg"}
        alt={`${title} image`}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }} // Ensuring uniform image height
      />
      <div className="card-body d-flex flex-column flex-grow-1">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">
            By {author || "Unknown"} | {new Date(publishedAt).toLocaleDateString()} | {source || "Unknown"}
          </small>
        </p>
        {/* Adding a spacer to push the button to the bottom */}
        <div className="mt-auto">
          <Link href={`/news/${articleId}`} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
