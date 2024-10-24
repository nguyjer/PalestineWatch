import React from 'react';
import { Card } from 'react-bootstrap';
import Link from "next/link";

function ExploreCard({link, type}) {
    return (
        <Link href={link} passHref>
            <Card style={{ cursor: 'pointer' }}>
                <Card.Title><u>Explore a Different {type}</u></Card.Title>
            </Card>
        </Link>
    );
}

export default ExploreCard;
