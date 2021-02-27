import { useState } from "react";

import "./App.css";
import AddTask from "./Components/AddTask";
import TodoList from "./Components/TodoList";
import todoicon from "./Components/todoicon.png";
function App() {
  const [todolist, setTodoList] = useState([
    { id: 1, task: "Buy 1L milk" },
    { id: 2, task: "Do laundry" },
    { id: 3, task: "Search apartment" },
  ]);

  const addNewTask = (newTask) => {
    const newId = Math.random() * 10;
    setTodoList([
      ...todolist,
      {
        id: newId,
        task: newTask,
      },
    ]);
  };

  const deleteTask = (id) => {
    const newTodoList = todolist.filter((task) => {
      return task.id !== id;
    });
    setTodoList(newTodoList);
  };

  return (
    <div className="mainApp">
      <div className="App">
        <img className="todoicon" src={todoicon} alt="todoicon"></img>
        <p>
          <b>Sayli's To-do List</b>
        </p>
        <br></br>
        <AddTask addNewTask={addNewTask} />
        <TodoList todolist={todolist} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
