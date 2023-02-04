import React from "react";
import style from "./Task.module.scss";
import checkIcon from "../../assets/images/icon-check.svg";

const Task = ({ task }) => {
  console.log("task: ", task);
  return (
    <div className={style["task-wrapper"]}>
      <div className={style["checkbox-circle"]}></div>
      <div className={style["input-wrapper"]}>
        <label htmlFor="task-text"></label>
        <input id="task-text" type="text" placeholder={task.task} />
      </div>
    </div>
  );
};

export default Task;
