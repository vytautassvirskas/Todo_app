import React, { useRef } from "react";
import style from "./TaskInput.module.scss";

const TaskInput = ({ forwardRef, placeholder, task, onChange }) => {
  return (
    <div className={style["input-wrapper"]}>
      <label htmlFor="task-text"></label>
      <input
        ref={forwardRef}
        id="task-text"
        type="text"
        name="taskName"
        value={task.taskName}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TaskInput;
