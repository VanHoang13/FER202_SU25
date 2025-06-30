import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Title({ text }) {
  return <h1>{text}</h1>;
}

function Description({ text }) {
  return <p>{text}</p>;
}

function Image({ url }) {
  return <img src={url} alt="Image" style={{ width: '100%' }} />;
}

function SimpleCard({ item }) {
  return (
    <div style={{ border: '1px solid orange', padding: '20px', width: '300px' }}>
      <Image url={item.imageUrl} />
      Title: <Title text={item.title} />
      Description: <Description text={item.description} />
    </div>
  );
}

function App() {
  const item = {
    title: 'Ex04',
    description: 'Nguyen Cong Khoa - SE18D08.',
    imageUrl: '/images/itel.png',
  };

  return <SimpleCard item={item} />;
}

export default App;
