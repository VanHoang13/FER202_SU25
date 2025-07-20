// src/components/Quiz.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnswer, setCurrentQuestion, submitQuiz } from '../slices/quizSlice';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const { questions, currentQuestion, submitted } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    dispatch(selectAnswer({ questionId: questions[currentQuestion].id, answer: option }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      dispatch(setCurrentQuestion(currentQuestion + 1));
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      dispatch(setCurrentQuestion(currentQuestion - 1));
    }
  };

  const handleFirst = () => {
    dispatch(setCurrentQuestion(0));
  };

  const handleLast = () => {
    dispatch(setCurrentQuestion(questions.length - 1));
  };

  const handleSubmit = () => {
    dispatch(submitQuiz());
    navigate('/quiz/review');
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    <div>
      <div className="text-center bg-dark text-white p-4 mb-4" style={{ fontSize: '2em' }}>
        JavaScript Quiz
      </div>
      <div className="card p-4 shadow-sm">
        <h4>
          Q.{currentQuestionData.id} {currentQuestionData.text}
        </h4>
        <div className="row">
          {currentQuestionData.options.map((option, index) => (
            <div key={index} className="col-md-6 mb-3">
              <div 
                className={`p-3 ${currentQuestionData.selectedAnswer === option ? 'bg-primary text-white' : 'bg-light'}`}
                style={{ cursor: 'pointer', borderRadius: '5px', border: '1px solid #ddd' }}
                onClick={() => handleOptionSelect(option)}
              >
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name={`question${currentQuestionData.id}`}
                    id={`option${index}`}
                    value={option}
                    checked={currentQuestionData.selectedAnswer === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                  <label className="form-check-label" htmlFor={`option${index}`}>
                    {option}
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center gap-2 mt-4">
          <button className="btn btn-primary" onClick={handleFirst}>
            First
          </button>
          <button className="btn btn-primary" onClick={handlePrev} disabled={currentQuestion === 0}>
            Prev
          </button>
          <button
            className="btn btn-primary"
            onClick={handleNext}
            disabled={currentQuestion === questions.length - 1}
          >
            Next
          </button>
          <button className="btn btn-primary" onClick={handleLast}>
            Last
          </button>
        </div>
        <div className="d-flex justify-content-start mt-4">
          <button className="btn btn-info me-2" onClick={() => navigate('/')}>
            Quiz
          </button>
          <button className="btn btn-info me-2">
            Quiz Review
          </button>
          <button
            className="btn btn-success"
            onClick={handleSubmit}
            disabled={submitted}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;