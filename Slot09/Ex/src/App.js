import NameList from "./components/NameList";
import UserProfile from "./components/UserProfile";
import Welcome from "./components/Welcome";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

import StudentCard from "./components/StudentCard";

function App() {
  const userData = { name: "khoancde180606@fpt.edu.vn", age: 21 };
  const namesList = ["khoancde180606@fpt.edu.vn", "test@fpt.edu.vn"];

  const students = [
    { name: "hoanglvde180999@fpt.edu.vn", age: 21, avatar: "/images/hoang.png" },
    { name: "lamlppde180789@fpt.edu.vn", age: 21, avatar: "/images/lam.png" },
    { name: "huynsgde180987@fpt.edu.vn", age: 21, avatar: "/images/shuy.png" },
  ];
  return (
    <>
      <Welcome name="khoancde180606@fpt.edu.vn" />
      <UserProfile user={userData} />
      <NameList names={namesList} />
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
