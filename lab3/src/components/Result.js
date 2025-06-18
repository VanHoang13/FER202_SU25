import React from "react";
import { Button } from "react-bootstrap";

const Result = ({ score, total, onReplay }) => {
  const handleShare = () => {
    const resultText = `Điểm của tôi: ${score}/${total}`;
    navigator.clipboard.writeText(resultText).then(() => {
      alert("Kết quả đã được sao chép: " + resultText);
    });
  };

  return (
    <div className="text-center">
      <h3>Kết quả</h3>
      <p>Điểm của bạn: <strong>{score} / {total}</strong></p>
      <p>{score === total ? "Tuyệt vời!" : "Cố gắng hơn nhé!"}</p>
      <Button variant="success" onClick={onReplay} className="me-2 mt-3">
        Chơi lại
      </Button>
      <Button variant="info" onClick={handleShare} className="mt-3">
        Chia sẻ
      </Button>
    </div>
  );
};

export default Result;