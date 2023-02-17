import React from "react";
import Task from "../Task/Task.jsx";
import style from "./TasksList.module.scss";

const TasksList = (props) => {
  const { tasks, setTasks, categories, filterStatus, filterCategory } = props;
  const wrapperClassName =
    tasks.length > 0 ? style.wrapper : style["wrapper--empty"];
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
    <div className={wrapperClassName}>
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
          <p className={style.empty}>No tasks yet.</p>
        )}
        <div className={style.dashboard}></div>
      </ul>
    </div>
  );
};

export default TasksList;
