<<<<<<< HEAD
import React from 'react';
import { Card } from 'react-bootstrap';
import Link from "next/link";
import Styles from './NewsCard.module.css';

function NewsCard({articleId, title, description, imageUrl, author, publishedAt, source}) {
    return (
        <Link href={`/news/${articleId}`} passHref className={Styles.removeUnderline}>
          <Card className={Styles.newsCard} style={{ cursor: 'pointer' }}>
            <Card.Title>{title}</Card.Title>
            <Card.Img className={Styles.newsImg} variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Text>{description}</Card.Text>
              <Card.Text>Author: {author}</Card.Text>
              <Card.Text>Published At: {publishedAt}</Card.Text>
              <Card.Text>Source: {source}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
    );
}

export default NewsCard;
=======
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
            By {author || "Unknown"} | {new Date(publishedAt).toLocaleDateString()}
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
>>>>>>> 2ba86119c7f8de9f9c8a60d39ac9943d16e0498f
