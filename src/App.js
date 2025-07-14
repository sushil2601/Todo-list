import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  //adding the todo item
  const handleAddTdod = () => {
    if (input.trim() === "") return;

    const item = {
      id: todoList.length + 1,
      text: input.trim(),
      completed: false,
    };
    // const newTodo = [...todoList];
    setTodoList((prev) => [...prev, item]);
    setInput("");
  };

  //delete the Todo
  const deleteTodo = (id) => {
    setTodoList(todoList.filter((t) => t.id !== id));
  };

  //handling the toggle
  const handledToggle = (id) => {
    setTodoList(
      todoList.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      })
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Enter Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
        />
        <button className="button" onClick={() => handleAddTdod()}>
          ADD
        </button>
        <ul className="todo-container">
          {todoList.map((todo) => (
            <li key={todo.id} className="list">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handledToggle(todo.id)}
              />
              <span className={todo.completed ? "strike-through" : ""}>
                {todo.text}
              </span>
              <button className="delete" onClick={() => deleteTodo(todo.id)}>
                DELETE
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
