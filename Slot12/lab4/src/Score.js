import React from "react";

const Score = ({ score, totalQuestions, onReplay, onShare }) => {
  return (
    <div>
      <h2>Quiz Finished!</h2>
      <p>
        Your Score: {score} / {totalQuestions}
      </p>
      <div>
        <button className="btn btn-success me-2" onClick={onReplay}>
          Replay
        </button>
        <button className="btn btn-secondary" onClick={onShare}>
          Share Score
        </button>
      </div>
    </div>
  );
};

export default Score;
