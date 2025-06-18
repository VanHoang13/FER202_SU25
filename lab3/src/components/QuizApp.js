import React, { useState } from "react";
import { Container, Button, Form, InputGroup } from "react-bootstrap";
import Question from "./Question";
import Result from "./Result";

const QuizApp = () => {
  const [questions, setQuestions] = useState([
    { id: 1, text: "What is 2 + 2?", options: ["3", "4", "5"], correctAnswer: "4" },
    { id: 2, text: "What is the capital of Vietnam?", options: ["Hanoi", "Ho Chi Minh", "Da Nang"], correctAnswer: "Hanoi" },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAddingQuestion, setIsAddingQuestion] = useState(false);
  const [newQuestion, setNewQuestion] = useState({ text: "", options: ["", "", ""], correctAnswer: "" });

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleCheckAnswer = () => {
    if (!selectedAnswer) {
      alert("Vui lòng chọn một câu trả lời!");
      return;
    }
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };

  const handleReplay = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
  };

  const handleAddQuestion = () => {
    if (newQuestion.text && newQuestion.options.every(opt => opt) && newQuestion.correctAnswer) {
      setQuestions([...questions, { id: questions.length + 1, ...newQuestion }]);
      setNewQuestion({ text: "", options: ["", "", ""], correctAnswer: "" });
      setIsAddingQuestion(false);
    } else {
      alert("Vui lòng điền đầy đủ thông tin câu hỏi!");
    }
  };

  return (
    <Container className="mt-5">
      <h1>Quiz Application</h1>
      <Button variant="secondary" onClick={() => setIsAddingQuestion(true)} className="mb-3">
        Thêm câu hỏi mới
      </Button>
      {isAddingQuestion && (
        <div className="mb-4 p-3 border rounded">
          <InputGroup className="mb-2">
            <InputGroup.Text>Câu hỏi</InputGroup.Text>
            <Form.Control
              value={newQuestion.text}
              onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })}
              placeholder="Nhập câu hỏi"
            />
          </InputGroup>
          {newQuestion.options.map((opt, idx) => (
            <InputGroup key={idx} className="mb-2">
              <InputGroup.Text>Lựa chọn {idx + 1}</InputGroup.Text>
              <Form.Control
                value={opt}
                onChange={(e) => {
                  const newOptions = [...newQuestion.options];
                  newOptions[idx] = e.target.value;
                  setNewQuestion({ ...newQuestion, options: newOptions });
                }}
                placeholder={`Lựa chọn ${idx + 1}`}
              />
            </InputGroup>
          ))}
          <InputGroup className="mb-2">
            <InputGroup.Text>Đáp án đúng</InputGroup.Text>
            <Form.Control
              value={newQuestion.correctAnswer}
              onChange={(e) => setNewQuestion({ ...newQuestion, correctAnswer: e.target.value })}
              placeholder="Nhập đáp án đúng"
            />
          </InputGroup>
          <Button variant="primary" onClick={handleAddQuestion} className="me-2">
            Lưu câu hỏi
          </Button>
          <Button variant="danger" onClick={() => setIsAddingQuestion(false)}>
            Hủy
          </Button>
        </div>
      )}
      {!showResult ? (
        <Question
          question={questions[currentQuestionIndex]}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          onCheckAnswer={handleCheckAnswer}
        />
      ) : (
        <Result score={score} total={questions.length} onReplay={handleReplay} />
      )}
    </Container>
  );
};

export default QuizApp;