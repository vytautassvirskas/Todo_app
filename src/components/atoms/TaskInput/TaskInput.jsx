import React, { useRef } from "react";
import style from "./TaskInput.module.scss";

const TaskInput = ({
  forwardRef,
  placeholder,
  task,
  onChange,
  ...restProps
}) => {
  return (
    <input
      {...restProps}
      ref={forwardRef}
      id="task-text"
      type="text"
      name="taskName"
      value={task.taskName}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TaskInput;
