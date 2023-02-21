import React, { useEffect, useState } from "react";
import Task from "../Task/Task.jsx";
import style from "./TasksList.module.scss";

const TasksList = (props) => {
  const { tasks, dispatch, categories, filterStatus, filterCategory } = props;
  const [filteredTasks, setFilteredTasks] = useState([...tasks]);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [overIndex, setOverIndex] = useState(null);
  let wrapperClassName;

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      taskId: taskId,
    });
  };
  const handleChangeTask = (task) => {
    dispatch({
      type: "edited",
      task: task,
    });
  };

  const handleDragStart = (e, taskId) => {
    const draggingIndexOfTasks = tasks.findIndex((t) => t.id === taskId);
    setDraggingIndex(draggingIndexOfTasks);
  };

  const handleDragOver = (e, taskId) => {
    e.preventDefault();
    const overIndexOfTasks = tasks.findIndex((t) => t.id === taskId);
    setOverIndex(overIndexOfTasks);
  };

  const handleDragEnd = () => {
    const draggedItem = tasks[draggingIndex];
    const newTasks = [...tasks];
    newTasks.splice(draggingIndex, 1);
    newTasks.splice(overIndex, 0, draggedItem);
    dispatch({
      type: "dragged",
      newTasks: newTasks,
    });
  };

  useEffect(() => {
    const filteredTasks = tasks.filter(({ status, category }) => {
      const isStatusMatch = filterStatus === "all" || status === filterStatus;
      const isCategoryMatch =
        filterCategory === "all" || category.toLowerCase() === filterCategory;
      return isStatusMatch && isCategoryMatch;
    });
    setFilteredTasks(filteredTasks);
  }, [tasks, filterStatus, filterCategory]);

  wrapperClassName =
    filteredTasks.length > 0 ? style.wrapper : style["wrapper--empty"];

  return (
    <div className={wrapperClassName}>
      {filteredTasks.length > 0 ? (
        <ul>
          {filteredTasks.map((task, index) => (
            <Task
              key={task.id}
              task={task}
              handleDeleteTask={handleDeleteTask}
              handleChangeTask={handleChangeTask}
              categories={categories}
              isDraggable={true}
              draggable="true"
              onDragStart={(e) => handleDragStart(e, task.id)}
              onDragOver={(e) => handleDragOver(e, task.id)}
              onDragEnd={handleDragEnd}
            ></Task>
          ))}
        </ul>
      ) : (
        <p className={style.empty}>No tasks yet.</p>
      )}
    </div>
  );
};

export default TasksList;
