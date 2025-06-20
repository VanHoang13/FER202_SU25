import React, { useReducer, useEffect, useState } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "Thủ đô của Úc là gì?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Hành tinh nào được gọi là Hành tinh Đỏ?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "Đại dương lớn nhất trên Trái Đất là gì?",
      options: [
        "Đại Tây Dương",
        "Ấn Độ Dương",
        "Thái Bình Dương",
        "Bắc Băng Dương",
      ],
      answer: "Thái Bình Dương",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: null,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload, feedback: null };
    case "SUBMIT_ANSWER":
      if (state.currentQuestion >= state.questions.length) {
        return state; // Ngăn xử lý nếu vượt giới hạn
      }
      const isCorrectSubmit =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        feedback: {
          isCorrect: isCorrectSubmit,
          message: isCorrectSubmit
            ? "Đúng! 🎉"
            : `Sai! Đáp án đúng là ${state.questions[state.currentQuestion].answer}`,
        },
      };
    case "NEXT_QUESTION":
      if (state.currentQuestion >= state.questions.length) {
        return { ...state, showScore: true }; // Kết thúc nếu vượt giới hạn
      }
      const isCorrectNext =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      const nextQuestion = state.currentQuestion + 1;
      return {
        ...state,
        score: isCorrectNext ? state.score + 1 : state.score,
        currentQuestion: nextQuestion,
        selectedOption: "",
        feedback: null,
        showScore: nextQuestion >= state.questions.length,
      };
    case "RESTART_QUIZ":
      return { ...initialState };
    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore, feedback } = state;
  const [timeLeft, setTimeLeft] = useState(10);
  const [highScore, setHighScore] = useState(() => {
    return localStorage.getItem("highScore") ? parseInt(localStorage.getItem("highScore")) : 0;
  });

  // Đồng hồ đếm ngược
  useEffect(() => {
    if (!showScore && timeLeft > 0 && currentQuestion < questions.length) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !feedback && currentQuestion < questions.length) {
      dispatch({ type: "SUBMIT_ANSWER" });
    }
  }, [timeLeft, showScore, feedback, currentQuestion, questions.length]);

  // Reset thời gian khi chuyển câu hỏi
  useEffect(() => {
    setTimeLeft(10);
  }, [currentQuestion]);

  // Lưu điểm cao
  useEffect(() => {
    if (showScore && score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score);
    }
  }, [showScore, score, highScore]);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
  };

  const handleSubmitAnswer = () => {
    dispatch({ type: "SUBMIT_ANSWER" });
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
              Điểm của bạn: {score} / {questions.length}
            </h2>
            <h4>Điểm cao nhất: {highScore} / {questions.length}</h4>
            <Button variant="primary" onClick={handleRestartQuiz}>
              Làm lại Quiz
            </Button>
          </div>
        ) : (
          <div>
            <h4>
              Câu hỏi {currentQuestion + 1}/{questions.length}:<br />
              {questions[currentQuestion]?.question || "Không có câu hỏi"}
            </h4>
            <ProgressBar
              now={((currentQuestion + 1) / questions.length) * 100}
              label={`${currentQuestion + 1}/${questions.length}`}
              className="my-3"
            />
            <p style={{ color: timeLeft < 5 ? "red" : "black" }}>
              Thời gian còn lại: {timeLeft}s
            </p>
            <div className="mt-3">
              {questions[currentQuestion]?.options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedOption === option ? "success" : "outline-secondary"
                  }
                  className="m-2"
                  onClick={() => handleOptionSelect(option)}
                  disabled={feedback}
                >
                  {option}
                </Button>
              ))}
            </div>
            {feedback && (
              <p className="mt-3">
                {feedback.isCorrect ? (
                  <span>
                    <FaCheckCircle color="green" /> {feedback.message}
                  </span>
                ) : (
                  <span>
                    <FaTimesCircle color="red" /> {feedback.message}
                  </span>
                )}
              </p>
            )}
            <Button
              variant="primary"
              className="mt-3 me-2"
              disabled={!selectedOption || feedback}
              onClick={handleSubmitAnswer}
            >
              Gửi đáp án
            </Button>
            {feedback && (
              <Button
                variant="primary"
                className="mt-3"
                onClick={handleNextQuestion}
              >
                {currentQuestion === questions.length - 1
                  ? "Hoàn thành Quiz"
                  : "Câu tiếp theo"}
              </Button>
            )}
          </div>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;
