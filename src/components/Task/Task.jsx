import React from "react";
import style from "./Task.module.scss";
import checkIcon from "../../assets/images/icon-check.svg";
import Button from "../atoms/Button/Button.jsx";
import Delete from "../atoms/Delete/Delete.jsx";

const Task = ({ task, handleDeleteTask }) => {
  console.log("task: ", task);
  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };
  return (
    <li key={task.id} className={style["task-wrapper"]}>
      <div className={style["checkbox-circle"]}></div>
      <div className={style["input-wrapper"]}>
        <label htmlFor="task-text"></label>
        <input
          id="task-text"
          type="text"
          name="taskName"
          value={task.taskName}
          onChange={handleChange}
        />
      </div>
      <span style={{ marginRight: "20px" }}>{task.category}</span>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => handleEditTask(task.id)}
      >
        Edit
      </button>
      <Button onClick={() => handleDeleteTask(task.id)}>
        <Delete className={style.delete}></Delete>
      </Button>
      <Button onClick={() => handleDeleteTask(task.id)}>
        <span>clear all</span>
      </Button>
    </li>
  );
};

export default Task;
