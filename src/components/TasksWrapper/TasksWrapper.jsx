import React from "react";
import Task from "../Task/Task.jsx";
import style from "./TasksWrapper.module.scss";

const TasksWrapper = (props) => {
  const { tasks, setTasks, children } = props;
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  const handleChangeTask = (task) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  };

  console.log("tasks: ", tasks);
  return (
    <div className={style.wrapper}>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              handleDeleteTask={handleDeleteTask}
              handleChangeTask={handleChangeTask}
            ></Task>
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
