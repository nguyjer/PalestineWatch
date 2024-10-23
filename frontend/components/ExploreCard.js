import React from 'react';
import { Card } from 'react-bootstrap';
import Link from "next/link";
<<<<<<< HEAD
import Styles from '../styles/ExploreCard.module.css';
=======
>>>>>>> 2ba86119c7f8de9f9c8a60d39ac9943d16e0498f

function ExploreCard({link, type}) {
    return (
        <Link href={link} passHref>
<<<<<<< HEAD
            <Card className={Styles.exploreCard} style={{ cursor: 'pointer' }}>
                <Card.Title className={Styles.cardTitle}><u>Explore a Different {type}</u></Card.Title>
=======
            <Card style={{ cursor: 'pointer' }}>
                <Card.Title><u>Explore a Different {type}</u></Card.Title>
>>>>>>> 2ba86119c7f8de9f9c8a60d39ac9943d16e0498f
            </Card>
        </Link>
    );
}

export default ExploreCard;