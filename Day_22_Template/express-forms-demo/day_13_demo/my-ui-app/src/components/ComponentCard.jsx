import React from "react";
import { Card, Button } from "react-bootstrap"; // Import from react-bootstrap

function ComponentCard({ image, title, text }) {
  return (
    <Card style={{ width: "18rem" }}>
      {image && <Card.Img variant="top" src={image} alt={title} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" href="#d">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ComponentCard;