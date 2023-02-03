import React from "react";
import Task from "../Task/Task.jsx";
import style from "./TasksWrapper.module.scss";

const TasksWrapper = ({ tasks }) => {
  console.log("tasks: ", tasks);
  return (
    <div>
      {tasks.length > 0 &&
        tasks.map((task, i) => <Task key={i} task={task}></Task>)}
    </div>
  );
};

export default TasksWrapper;
