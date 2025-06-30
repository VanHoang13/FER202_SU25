import React from "react";

const Score = ({ score, totalQuestions, onReplay, onShare }) => {
  return (
    <div>
      <h2>Quiz Finished!</h2>
      <p>
        Your Score: {score} / {totalQuestions}
      </p>
      <div>
        <button onClick={onReplay}>Replay</button>
        <button onClick={onShare}>Share Score</button>
      </div>
    </div>
  );
};

export default Score;
