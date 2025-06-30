import React, { useState, useEffect, createContext, useContext } from "react";
import Question from "./Question";
import Score from "./Score";
import { quizData } from "./quizData";
import "bootstrap/dist/css/bootstrap.min.css";

const AnswerContext = createContext();

const Quiz = () => {
  const [questions, setQuestions] = useState(quizData);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [newOptions, setNewOptions] = useState(["", "", ""]);
  const [newCorrectAnswer, setNewCorrectAnswer] = useState("");

  useEffect(() => { console.log("Loaded questions:", questions); }, [questions]);

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
    const isCorrect = option === questions[currentQuestion].correctAnswer;
    if (isCorrect) setScore(score + 1);
    setTimeout(() => {
      if (currentQuestion + 1 >= questions.length) {
        setQuizEnd(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer("");
      }
    }, 500);
  };
  const handleReplay = () => { setCurrentQuestion(0); setScore(0);
                            setQuizEnd(false); setSelectedAnswer(""); };
  const handleShare = () => {
    alert(`Sharing your result: ${score} / ${questions.length}`); };
  const handleAddQuestion = () => {
    if (!newQuestion || newOptions.some((o) => !o) || !newCorrectAnswer) {
      alert("Please fill in all fields.");
      return;
    }
    const newQ = { question: newQuestion, answers: [...newOptions],  
                    correctAnswer: newCorrectAnswer, };
    setQuestions([...questions, newQ]);   setNewQuestion("");
    setNewOptions(["", "", ""]);   setNewCorrectAnswer("");
  };
  const handleOptionChange = (value, index) => {
    const updatedOptions = [...newOptions];
    updatedOptions[index] = value;
    setNewOptions(updatedOptions);
  };

  return (
    <AnswerContext.Provider value={selectedAnswer}>
      <div className="container mt-4">
        <div className="card p-3 mb-4">
          <h4>Add New Question</h4>
          <input type="text" className="form-control mb-2"
            placeholder="Enter question" value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)} />
          {newOptions.map((opt, idx) => (
            <input  key={idx}  type="text"  className="form-control mb-2"
              placeholder={`Option ${idx + 1}`}  value={opt}
              onChange={(e) => handleOptionChange(e.target.value, idx)}  />
          ))}
          <input  type="text"  className="form-control mb-2"
            placeholder="Correct answer (must match one option above)"
            value={newCorrectAnswer}
            onChange={(e) => setNewCorrectAnswer(e.target.value)} />
          <button className="btn btn-primary" onClick={handleAddQuestion}>
            Add Question
          </button>
        </div>

        {quizEnd ? (
          <Score  score={score}  totalQuestions={questions.length}
              onReplay={handleReplay}  onShare={handleShare}  />
        ) : (
          <>
            <Question  question={questions[currentQuestion].question}
              options={questions[currentQuestion].answers}
              onAnswerSelect={handleAnswerSelect} currentAnswer={selectedAnswer}  />
            <p>
              Question {currentQuestion + 1} of {questions.length}
            </p>
            {selectedAnswer && (
              <p className="fw-bold">
                {selectedAnswer ===  questions[currentQuestion].correctAnswer
                  ? "✅ Correct!"  : "❌ Incorrect"}
              </p>
            )}
          </>
        )}
      </div>
    </AnswerContext.Provider>
  );
};

export default Quiz;