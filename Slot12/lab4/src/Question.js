import React from "react";

const Question = ({ question, options, onAnswerSelect, currentAnswer }) => {
  return (
    <div>
      <h2>{question}</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {options.map((option, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <button
              className="btn btn-outline-primary"
              onClick={() => onAnswerSelect(option)}
              style={{
                backgroundColor: option === currentAnswer ? "#cce5ff" : "",
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
