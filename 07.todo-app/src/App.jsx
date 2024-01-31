import { useRef, useState } from "react";
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
  const [editStatus, setEditStatus] = useState(false);
  const [editId, setEditId] = useState(null);

  const inputRef = useRef();

  const handleAddTodo = () => {
    if (inputValue) {
      let updatedTodos = [
        ...todos,
        { id: uuidv4(12), todoText: inputValue, completed: false },
      ];
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
    setInputValue("");
    setEditStatus(false);
  };

  const handleEditTodo = (id) => {
    let editedTodo = todos.find((item) => item.id === id);
    // console.log(editedTodo);
    setInputValue(editedTodo.todoText);
    setEditStatus(true);
    setEditId(id);

    // console.log(inputRef.current);
    inputRef.current.focus();
  };

  const handleEditTodoRow = () => {
    let editedTodoIndex = todos.findIndex((item) => item.id === editId);

    if (editedTodoIndex !== -1) {
      let updatedTodos = [...todos];
      updatedTodos[editedTodoIndex].todoText = inputValue;
      setTodos([...updatedTodos]);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }

    setEditStatus(false);
    setInputValue("");
  };

  const handleCompletedTodo = (checked, id) => {
    let indx = todos.findIndex((item) => item.id === id);

    // console.log(indx);
    if (indx !== -1) {
      let updatedTodos = [...todos];
      updatedTodos[indx].completed = checked;
      setTodos([...updatedTodos]);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }
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
                ref={inputRef}
              />
            </InputGroup>
            {errorStatus && <p className="text-danger">You should add todo!</p>}
          </Col>
          <Col xs={2} className="d-flex justify-content-end align-items-start">
            {!editStatus ? (
              <Button onClick={() => handleAddTodo()}>ADD</Button>
            ) : (
              <Button onClick={() => handleEditTodoRow()}>Edit</Button>
            )}
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
                    <div className="d-flex gap-2 align-items-center">
                      <InputGroup.Checkbox
                        checked={todo.completed}
                        aria-label="Checkbox for following text input"
                        onChange={(e) =>
                          handleCompletedTodo(e.target.checked, todo.id)
                        }
                      />
                      <span
                        style={{
                          textDecoration: todo.completed && "line-through",
                        }}
                      >
                        {todo.todoText}
                      </span>
                    </div>
                    <div className="actions d-flex gap-3">
                      <FaTrashCan onClick={() => handleDeleteTodo(todo.id)} />
                      <FaRegEdit onClick={() => handleEditTodo(todo.id)} />
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
