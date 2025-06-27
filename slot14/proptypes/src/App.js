import React from 'react';
import UserProfile2 from './components/UserProfile2';

const App = () => {
  const handleFormSubmit = (formData) => {
    console.log('Dữ liệu đã gửi:', formData);
  };

  return (
    <div className="App">
      <h1 className="text-center mt-4">Ứng Dụng React</h1>
      <UserProfile2 name="Nguyễn Văn A" age={25} onSubmit={handleFormSubmit} />
      <UserProfile2 name="Nguyễn Văn B" age="twenty five" onSubmit={handleFormSubmit} />
      <UserProfile2 name="" age={30} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;