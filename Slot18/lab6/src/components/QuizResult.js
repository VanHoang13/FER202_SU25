// src/components/QuizResult.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetQuiz } from '../slices/quizSlice';
import { useNavigate } from 'react-router-dom';

const QuizResult = () => {
  const { questions, submitted } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!submitted) {
    navigate('/quiz');
    return null;
  }

  return (
    <div>
      <div className="text-center bg-dark text-white p-4 mb-4" style={{ fontSize: '2em' }}>
        Quiz Review
      </div>
      {questions.map((question) => (
        <div
          key={question.id}
          className="card p-3 mb-3"
          style={{
            backgroundColor:
              question.selectedAnswer === question.correctAnswer ? '#d4edda' : '#f8d7da',
            borderLeft: '5px solid #28a745',
          }}
        >
          <h5>
            Q{question.id}. {question.text}
          </h5>
          <ul className="list-group">
            {question.options.map((option) => (
              <li
                key={option}
                className={`list-group-item ${
                  question.selectedAnswer === option ? 'bg-warning' : ''
                }`}
              >
                <span className="me-2">○</span>
                {option} {question.selectedAnswer === option && '(Your answer)'}
              </li>
            ))}
          </ul>
          <p className="mt-2" style={{ backgroundColor: '#e9ecef', padding: '5px' }}>
            Right answer is: <strong>{question.correctAnswer}</strong>
          </p>
        </div>
      ))}
      <div className="d-flex justify-content-start mt-4">
        <button className="btn btn-info me-2" onClick={() => navigate('/quiz')}>
          Quiz
        </button>
        <button className="btn btn-info me-2" onClick={() => navigate('/quiz/review')}>
          Quiz Review
        </button>
        <button className="btn btn-success" onClick={() => dispatch(resetQuiz())}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuizResult;