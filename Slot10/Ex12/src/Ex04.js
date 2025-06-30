import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, ListGroup, Row, Col } from 'react-bootstrap';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="text-center mt-5">
      <Row>
        <Col md={7}>
          <Form.Group>
            <Form.Control type="text" value={task} onChange={(e) => setTask(e.target.value)}
              placeholder="Please input a Task" className="mb-3"/>
          </Form.Group>
          <Button variant="danger" onClick={handleAddTask}>Add Todo</Button>
        </Col>

        <Col md={5}>
          <div className="mt-3">
            <h3>Todo List</h3>
            <ListGroup>
              {tasks.map((task, index) => (
                <ListGroup.Item key={index} className="d-flex justify-content-between">
                  {task}
                  <Button variant="danger" size="sm" onClick={() => handleDeleteTask(index)}> Delete</Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default TodoList;
