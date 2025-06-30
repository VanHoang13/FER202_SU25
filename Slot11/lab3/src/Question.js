import React from "react";

const Question = ({ question, options, onAnswerSelect, currentAnswer }) => {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <button
              className="btn btn-secondary"
              onClick={() => onAnswerSelect(option)}
              style={{
                backgroundColor: option === currentAnswer ? "#b3e0ff" : "",
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
