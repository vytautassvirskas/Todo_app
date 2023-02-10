import React from "react";
import style from "./Task.module.scss";
import Button from "../atoms/Button/Button.jsx";
import Delete from "../atoms/Delete/Delete.jsx";
import Check from "../atoms/Check/Check.jsx";
import Circle from "../atoms/Circle/Circle.jsx";

const Task = ({ task, handleDeleteTask, handleChangeTask }) => {
  console.log("task: ", task);

  let checkCircle;
  if (task.isCompleted) {
    checkCircle = (
      <Circle
        circleType={"checked"}
        onClick={() => handleChangeTask({ ...task, isCompleted: false })}
      >
        <Check></Check>
      </Circle>
    );
  } else {
    checkCircle = (
      <Circle
        circleType={"active"}
        onClick={() => handleChangeTask({ ...task, isCompleted: true })}
      ></Circle>
    );
  }

  return (
    <li key={task.id} className={style["task-wrapper"]}>
      {checkCircle}
      <div className={style["input-wrapper"]}>
        <label htmlFor="task-text"></label>
        <input
          id="task-text"
          type="text"
          name="taskName"
          value={task.taskName}
          onChange={() => console.log("hi")}
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
        <Delete></Delete>
      </Button>
    </li>
  );
};

export default Task;
