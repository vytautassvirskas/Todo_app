import React, { useRef } from "react";
import style from "./TaskInput.module.scss";

const TaskInput = ({ forwardRef, inputType, task, onChange }) => {
  return (
    <div className={style["input-wrapper"]}>
      <label htmlFor="task-text"></label>
      <input
        ref={forwardRef}
        id="task-text"
        type="text"
        name="taskName"
        value={task.taskName}
        placeholder={inputType === "new" ? "Create a new todo..." : ""}
        onChange={onChange}
      />
    </div>
  );
};

export default TaskInput;
