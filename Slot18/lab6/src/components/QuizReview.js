// src/components/QuizReview.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetQuiz } from '../slices/quizSlice';
import { useNavigate } from 'react-router-dom';

const QuizReview = () => {
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
      
      {/* Question Grid */}
      <div className="card p-4 mb-4" style={{ backgroundColor: '#d1ecf1' }}>
        <div className="row">
          {questions.map((question, index) => (
            <div key={question.id} className="col-md-2 col-sm-3 col-4 mb-3">
              <div className="text-center">
                <div>
                  <strong>Question No</strong><br />
                  <u>{question.id}</u>
                </div>
                <div className="mt-2">
                  <strong>Answered</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-start">
        <button className="btn btn-info me-2" onClick={() => navigate('/quiz')}>
          Quiz
        </button>
        <button className="btn btn-info me-2" onClick={() => navigate('/quiz/result')}>
          Quiz Review
        </button>
        <button className="btn btn-success" onClick={() => dispatch(resetQuiz())}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuizReview;