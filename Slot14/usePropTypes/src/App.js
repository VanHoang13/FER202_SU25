import React from "react";
import MyForm from "./MyForm";

const App = () => {
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi lúc", new Date().toLocaleString(), ":", formData);
    alert("Dữ liệu đã được gửi thành công!");
  };

  return (
    <div className="App">
      <h1>Ứng Dụng React - Demo Validation</h1>
      <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;