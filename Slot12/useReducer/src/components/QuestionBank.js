import React, { useReducer, useEffect, useState } from "react";
import { Button, Container, Card } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// State ban đầu
const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: "", // ✅/❌ phản hồi
  highScore: Number(localStorage.getItem("highScore")) || 0,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      const isCorrect =
        action.payload === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        selectedOption: action.payload,
        feedback: isCorrect
          ? "correct"
          : `incorrect:${state.questions[state.currentQuestion].answer}`,
      };

    case "NEXT_QUESTION":
      const wasCorrect =
        state.selectedOption ===
        state.questions[state.currentQuestion].answer;
      const nextScore = wasCorrect ? state.score + 1 : state.score;
      const isLast = state.currentQuestion + 1 === state.questions.length;

      if (isLast && nextScore > state.highScore) {
        localStorage.setItem("highScore", nextScore);
      }

      return {
        ...state,
        score: nextScore,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        feedback: "",
        showScore: isLast,
        highScore: isLast ? Math.max(nextScore, state.highScore) : state.highScore,
      };

    case "RESTART_QUIZ":
      return {
        ...initialState,
        highScore: state.highScore,
      };

    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore, feedback, highScore } =
    state;

  const [timeLeft, setTimeLeft] = useState(10);

  // Đồng hồ đếm ngược
  useEffect(() => {
    if (showScore) return;

    if (timeLeft === 0) {
      dispatch({ type: "NEXT_QUESTION" });
      setTimeLeft(10);
      return;
    }

    const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, showScore]);

  // Reset đồng hồ mỗi khi chuyển câu
  useEffect(() => {
    setTimeLeft(10);
  }, [currentQuestion]);

  const handleOptionSelect = (option) => {
    if (!selectedOption) {
      dispatch({ type: "SELECT_OPTION", payload: option });
    }
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
    setTimeLeft(10);
  };

  return (
    <Container className="mt-4">
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>
              Your Score: {score} / {questions.length}
            </h2>
            <h4>🏆 High Score: {highScore}</h4>
            <Button variant="primary" onClick={handleRestartQuiz}>
              Restart Quiz
            </Button>
          </div>
        ) : (
          <>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5>
                Question {currentQuestion + 1} / {questions.length}
              </h5>
              <span style={{ color: timeLeft < 5 ? "red" : "black" }}>
                ⏳ {timeLeft}s
              </span>
            </div>

            <h4>{questions[currentQuestion].question}</h4>
            <div className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedOption === option
                      ? "success"
                      : "outline-secondary"
                  }
                  className="m-2"
                  onClick={() => handleOptionSelect(option)}
                  disabled={!!selectedOption}
                >
                  {option}
                </Button>
              ))}
            </div>

            {feedback && (
              <div className="mt-3">
                {feedback === "correct" ? (
                  <div className="text-success fw-bold">
                    <FaCheckCircle /> Correct! 🎉
                  </div>
                ) : (
                  <div className="text-danger fw-bold">
                    <FaTimesCircle /> Incorrect! The correct answer is:{" "}
                    {feedback.split(":")[1]}
                  </div>
                )}
              </div>
            )}

            <Button
              variant="primary"
              className="mt-3"
              disabled={!selectedOption}
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions.length - 1
                ? "🏁 Finish Quiz"
                : "Next Question"}
            </Button>
          </>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;
