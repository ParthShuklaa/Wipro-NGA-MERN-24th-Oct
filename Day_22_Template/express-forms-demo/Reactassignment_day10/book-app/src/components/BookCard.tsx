import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

type BookCardProps = {
    title: string;
    author: string;
    price: number;
    onClick?: () => void;
};

function BookCard({ title, author, price, onClick }: BookCardProps) {
    return (
        <Card className="mb-3" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <strong>Author:</strong> {author}
                </Card.Text>
                <Card.Text>
                    <strong>Price:</strong> ${price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

BookCard.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onClick: PropTypes.func,
};

export default BookCard;
