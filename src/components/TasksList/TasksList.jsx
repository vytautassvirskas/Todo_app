import React from "react";
import Task from "../Task/Task.jsx";
import style from "./TasksList.module.scss";

const TasksList = (props) => {
  const {
    tasks,
    setTasks,
    categories,
    filterStatus,
    setFilterStatus,
    filterCategory,
    children,
  } = props;

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

  const filteredTasks = tasks.filter(({ status, category }) => {
    const isStatusMatch = filterStatus === "all" || status === filterStatus;
    const isCategoryMatch =
      filterCategory === "all" || category.toLowerCase() === filterCategory;
    return isStatusMatch && isCategoryMatch;
  });

  return (
    <div className={style.wrapper}>
      <ul>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              handleDeleteTask={handleDeleteTask}
              handleChangeTask={handleChangeTask}
              categories={categories}
            ></Task>
          ))
        ) : (
          <p
            style={{
              textAlign: "center",
              color: "white",
              paddingTop: "1.875rem",
            }}
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

export default TasksList;
