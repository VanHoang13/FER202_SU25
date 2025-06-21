import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Question = ({ question, selectedAnswer, onAnswerSelect, onCheckAnswer }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <h3 className="mb-3">{question.text}</h3>
        <Form>
          {question.options.map((option, index) => (
            <Form.Check
              key={index}
              type="radio"
              label={option}
              name="answer"
              checked={selectedAnswer === option}
              onChange={() => onAnswerSelect(option)}
              className="mb-2"
            />
          ))}
        </Form>
        <Button
          variant="primary"
          onClick={onCheckAnswer}
          disabled={!selectedAnswer}
          className="mt-3"
        >
          Kiểm tra
        </Button>
        {selectedAnswer && (
          <p className="mt-2">
            Đã chọn: <strong>{selectedAnswer}</strong>
          </p>
        )}
      </Card.Body>
    </Card>
  );
};

export default Question;