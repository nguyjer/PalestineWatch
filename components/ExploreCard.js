import React from 'react';
import { Card } from 'react-bootstrap';
import Link from "next/link";
import Styles from '../styles/ExploreCard.module.css';

function ExploreCard({link, type}) {
    return (
        <Link href={link} passHref>
            <Card className={Styles.exploreCard} style={{ cursor: 'pointer' }}>
                <Card.Title className={Styles.cardTitle}><u>Explore a Different {type}</u></Card.Title>
            </Card>
        </Link>
    );
}

export default ExploreCard;