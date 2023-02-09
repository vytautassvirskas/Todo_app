import React from "react";
import Task from "../Task/Task.jsx";
import style from "./TasksWrapper.module.scss";

const TasksWrapper = (props) => {
  const { tasks, setTasks, children } = props;
  const handleDeleteTask = (taskId) => {
    console.log("delete btn");
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (taskId) => {};

  console.log("tasks: ", tasks);
  return (
    <div className={style.wrapper}>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              task={task}
              key={task.id}
              handleDeleteTask={handleDeleteTask}
            ></Task>
            // <li key={task.id} style={{ padding: "20px", color: "white" }}>
            //   <span style={{ marginRight: "20px" }}>{task.taskName}</span>
            //   <span style={{ marginRight: "20px" }}>{task.category}</span>
            //   <button
            //     style={{ cursor: "pointer" }}
            //     onClick={() => handleEditTask(task.id)}
            //   >
            //     Edit
            //   </button>
            //   <button
            //     style={{ cursor: "pointer" }}
            //     onClick={() => handleDeleteTask(task.id)}
            //   >
            //     Delete
            //   </button>
            // </li>
          ))
        ) : (
          <p
            style={{ textAlign: "center", color: "white", paddingTop: "30px" }}
          >
            No tasks yet.
          </p>
        )}
        <div className={style.dashboard}></div>
      </ul>
      {children}
    </div>
  );
};

export default TasksWrapper;
