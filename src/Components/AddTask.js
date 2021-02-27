import { useState } from "react";
import "./AddTask.css";

function AddTask({ addNewTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTask(task);
  };
  return (
    <div class="mainDiv">
      <form className="formInp" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="addInput"
          placeholder="Add new task"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="addBtn">Add</button>
      </form>
    </div>
  );
}

export default AddTask;
