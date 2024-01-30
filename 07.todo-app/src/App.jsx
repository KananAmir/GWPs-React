import { useState } from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [inputValue, setInputValue] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);

  const handleAddTodo = () => {
    if (inputValue) {
      let updatedTodos = [...todos, { id: uuidv4(12), todoText: inputValue }];
      setTodos(updatedTodos);
      console.log(todos);
      console.log(updatedTodos);

      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setInputValue("");
    } else {
      setErrorStatus(true);
    }
  };

  const handleDeleteTodo = (id) => {
    let updatedTodos = [...todos.filter((item) => item.id !== id)];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  return (
    <>
      <h1>TODO APP</h1>
      <Container>
        <Row className="d-flex justify-content-center my-5">
          <Col xs={5}>
            <InputGroup>
              <Form.Control
                placeholder="add todo.."
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setErrorStatus(false);
                }}
                value={inputValue}
                className={errorStatus && "border-1 border-danger"}
              />
            </InputGroup>
            {errorStatus && <p className="text-danger">You should add todo!</p>}
          </Col>
          <Col xs={2} className="d-flex justify-content-end align-items-start">
            <Button onClick={() => handleAddTodo()}>ADD</Button>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col xs={7}>
            <ListGroup>
              {todos.map((todo) => {
                return (
                  <ListGroup.Item
                    key={todo.id}
                    variant="success"
                    className="mb-4 d-flex justify-content-between align-items-center"
                  >
                    <span>{todo.todoText}</span>
                    <div className="actions d-flex gap-3">
                      <FaTrashCan onClick={() => handleDeleteTodo(todo.id)} />
                      <FaRegEdit />
                    </div>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
