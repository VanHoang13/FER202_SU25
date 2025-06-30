import React from "react";

const Question = ({ question, options, onAnswerSelect, currentAnswer }) => {
  return (
    <div className="mb-4">
      <h4>{question}</h4>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {options.map((option, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <button
              className="btn btn-outline-primary"
              onClick={() => onAnswerSelect(option)}
              style={{
                backgroundColor: option === currentAnswer ? "#cce5ff" : "",
                borderColor: option === currentAnswer ? "#0069d9" : "",
                color: option === currentAnswer ? "#004085" : "",
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