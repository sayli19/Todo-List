import React from "react";
import "./TodoList.css";
import deletepng from "./delete.png";
import editpng from "./edit.png";
import addTodo from "./addTodo.png";
function TodoList({ todolist, deleteTask }) {
  const todoList = todolist.map((todo) => {
    return (
      <div key={todo.id}>
        <div className="taskItem">
          <table className="tbl">
            <tr>
              <td className="taskDetails">{todo.task}</td>
              <td className="editBtnTd">
                <button className="editBtn">
                  <img className="editImg" src={editpng} alt="edit"></img>
                </button>
              </td>
              <td className="delBtnTd">
                <button className="delBtn" onClick={() => deleteTask(todo.id)}>
                  <img className="delImg" src={deletepng} alt="delete"></img>
                </button>
              </td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    );
  });
  if (todoList.length > 0) {
    return <div>{todoList}</div>;
  } else {
    return (
      <div>
        <img className="addTodo" src={addTodo} alt="addTodo"></img>
        <p className="noListText">
          <b>Hurray! You have completed all the tasks !!</b>
        </p>
      </div>
    );
  }
}

export default TodoList;
