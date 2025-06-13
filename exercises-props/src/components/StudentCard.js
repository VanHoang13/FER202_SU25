import React from "react";
import { Card, Button } from "react-bootstrap";

const StudentCard = ({ student }) => {
  return (
    <Card style={{ width: "18rem" }} className="mb-4">
      <Card.Img
        variant="top"
        src={student.avatar}
        alt={`${student.name}'s avatar`}
        style={{ maxWidth: "100%", height: "250px", objectFit: "cover" }} // Added styles to reduce size
      />
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>Age: {student.age}</Card.Text>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;
