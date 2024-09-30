import React from 'react';
import { Card } from 'react-bootstrap';
import Link from "next/link";
import Styles from './NewsCard.module.css';

function NewsCard({articleId, title, description, imageUrl, author, publishedAt}) {
    return (
        <Link href={`/NewsPages/${articleId}`} passHref className={Styles.removeUnderline}>
          <Card className={Styles.newsCard} style={{ cursor: 'pointer' }}>
            <Card.Title>{title}</Card.Title>
            <Card.Img className={Styles.newsImg} variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Text>{description}</Card.Text>
              <Card.Text>Author: {author}</Card.Text>
              <Card.Text>Published At: {publishedAt}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
    );
}

export default NewsCard;