import React, { useState, useEffect } from "react";
import style from "./NewTaskWrapper.module.scss";

const NewTaskWrapper = () => {
  const [newTask, setNewTask] = useState({
    taskName: "",
    isCompleted: "false",
    category: "",
  });
  const [tasks, setTasks] = useState([]);
  const [isNameTyped, setIsNameTyped] = useState(false);

  const handleChange = (e) => {
    setNewTask((prevNewTask) => {
      return { ...newTask, [e.target.name]: e.target.value };
    });
  };
  const categories = ["Personal", "Work"];

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsNameTyped(true);
    }
  };

  const handleSelectCategory = (e) => {
    console.log("e.target.name: ", e.target.name);
    console.log("e.target.value: ", e.target.value);
    // setNewTask((prevNewTask) => {
    //   const updatedNewTask = {
    //     ...prevNewTask,
    //     [e.target.name]: e.target.value,
    //   };
    //   setTasks((prevTasks) => [updatedNewTask, ...prevTasks]);

    //   return updatedNewTask;
    // });
    setNewTask((prevNewTask) => {
      return { ...prevNewTask, [e.target.name]: e.target.value };
    });
    setTasks((prevTasks, preNewTask) => [newTask, ...prevTasks]);
    setIsNameTyped(false);

    // setNewTask({
    //   taskName: "",
    //   isCompleted: "false",
    //   category: "",
    // });
  };

  useEffect(() => {
    console.log("newTask atsinaujino", newTask);
  }, [newTask]);

  useEffect(() => {
    console.log("tasks atsinaujino", tasks);
  }, [tasks]);

  return (
    <div className={style["new-task-wrapper"]}>
      <div className={style["checkbox-circle"]}></div>
      <div
        className={
          isNameTyped ? style["input-wrapper--hidden"] : style["input-wrapper"]
        }
      >
        <label htmlFor="task-text"></label>
        <input
          className={style.input}
          id="task-text"
          type="text"
          name="taskName"
          placeholder="Create new todo"
          value={newTask.taskName}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      {isNameTyped && (
        <>
          <select
            className="filter-select"
            defaultValue="default"
            name="category"
            onChange={handleSelectCategory}
          >
            <option value="default" disabled>
              Category
            </option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          <button type="button" onClick={() => setIsNameTyped(false)}>
            back
          </button>
        </>
      )}
    </div>
  );
};

export default NewTaskWrapper;
