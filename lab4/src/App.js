import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import Question from './components/Question';
import Result from './components/Result';
import { quizData } from './components/quizData';
import './App.css';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userQuestions, setUserQuestions] = useState(quizData);
  const [isAddingQuestion, setIsAddingQuestion] = useState(false);
  const [newQuestion, setNewQuestion] = useState({ text: '', options: ['', '', ''], correctAnswer: '' });

  useEffect(() => {
    console.log('Câu hỏi hiện tại:', userQuestions[currentQuestionIndex]);
  }, [currentQuestionIndex, userQuestions]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleCheckAnswer = () => {
    if (!selectedAnswer) {
      alert('Vui lòng chọn một câu trả lời!');
      return;
    }
    if (selectedAnswer === userQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < userQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
    } else {
      setShowResult(true);
    }
  };

  const handleReplay = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setScore(0);
    setShowResult(false);
  };

  const handleAddQuestion = () => {
    if (newQuestion.text && newQuestion.options.every(opt => opt) && newQuestion.correctAnswer) {
      setUserQuestions([...userQuestions, { id: userQuestions.length + 1, ...newQuestion }]);
      setNewQuestion({ text: '', options: ['', '', ''], correctAnswer: '' });
      setIsAddingQuestion(false);
    } else {
      alert('Vui lòng điền đầy đủ thông tin câu hỏi!');
    }
  };

  return (
    <Container className="mt-5">
      <h1>Ứng dụng Quiz</h1>
      <Button variant="secondary" onClick={() => setIsAddingQuestion(true)} className="mb-3">
        Thêm câu hỏi mới
      </Button>
      {isAddingQuestion && (
        <div className="mb-4 p-3 border rounded">
          <div className="mb-2">
            <input
              className="form-control"
              value={newQuestion.text}
              onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })}
              placeholder="Nhập câu hỏi"
            />
          </div>
          {newQuestion.options.map((opt, idx) => (
            <div key={idx} className="mb-2">
              <input
                className="form-control"
                value={opt}
                onChange={(e) => {
                  const newOptions = [...newQuestion.options];
                  newOptions[idx] = e.target.value;
                  setNewQuestion({ ...newQuestion, options: newOptions });
                }}
                placeholder={`Lựa chọn ${idx + 1}`}
              />
            </div>
          ))}
          <div className="mb-2">
            <input
              className="form-control"
              value={newQuestion.correctAnswer}
              onChange={(e) => setNewQuestion({ ...newQuestion, correctAnswer: e.target.value })}
              placeholder="Nhập đáp án đúng"
            />
          </div>
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
          question={userQuestions[currentQuestionIndex]}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          onCheckAnswer={handleCheckAnswer}
        />
      ) : (
        <Result score={score} total={userQuestions.length} onReplay={handleReplay} />
      )}
    </Container>
  );
}

export default App;