import React, { useEffect, useState } from "react";
import Task from "../Task/Task.jsx";
import style from "./TasksList.module.scss";

const TasksList = (props) => {
  const { tasks, setTasks, categories, filterStatus, filterCategory } = props;
  const [filteredTasks, setFilteredTasks] = useState([...tasks]);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [overIndex, setOverIndex] = useState(null);
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

  const handleDragStart = (e, index, taskId) => {
    const draggingIndexOfTasks = tasks.findIndex((t) => t.id === taskId);
    setDraggingIndex(draggingIndexOfTasks);
  };

  const handleDragOver = (e, index, taskId) => {
    e.preventDefault();
    const overIndexOfTasks = tasks.findIndex((t) => t.id === taskId);
    setOverIndex(overIndexOfTasks);
  };

  const handleDragEnd = () => {
    const draggedItem = tasks[draggingIndex];
    const newTasks = [...tasks];
    newTasks.splice(draggingIndex, 1);
    newTasks.splice(overIndex, 0, draggedItem);
    setTasks(newTasks);
  };
  useEffect(() => {
    console.log("tasks atsinaujino: ", tasks);
  }, [tasks]);

  useEffect(() => {
    const filteredTasks = tasks.filter(({ status, category }) => {
      const isStatusMatch = filterStatus === "all" || status === filterStatus;
      const isCategoryMatch =
        filterCategory === "all" || category.toLowerCase() === filterCategory;
      return isStatusMatch && isCategoryMatch;
    });
    setFilteredTasks(filteredTasks);
  }, [tasks, filterStatus, filterCategory]);

  const wrapperClassName =
    filteredTasks.length > 0 ? style.wrapper : style["wrapper--empty"];

  return (
    <div className={wrapperClassName}>
      <ul>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => (
            <Task
              key={task.id}
              task={task}
              handleDeleteTask={handleDeleteTask}
              handleChangeTask={handleChangeTask}
              categories={categories}
              draggable="true"
              onDragStart={(e) => handleDragStart(e, index, task.id)}
              onDragOver={(e) => handleDragOver(e, index, task.id)}
              onDragEnd={handleDragEnd}
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
