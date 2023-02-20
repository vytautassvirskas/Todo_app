import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./NewTaskEntry.module.scss";
import Circle from "../atoms/Circle/Circle.jsx";
import TaskInput from "../atoms/TaskInput/TaskInput.jsx";
import Dropdown from "../atoms/Dropdown/Dropdown.jsx";
import Button from "../atoms/Button/Button.jsx";

const NewTaskEntry = (props) => {
  const { tasks, setTasks, categories } = props;
  const [newTask, setNewTask] = useState({
    id: uuidv4(),
    taskName: "",
    status: "active",
    category: "",
  });
  const [isSpinArrow, setIsSpinArrow] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    if (e.target.value.trim().length > 30) {
      return;
    }
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSelectCategory = (e) => {
    setNewTask({ ...newTask, category: e.target.innerHTML });
  };

  const handleAddNewTask = () => {
    if (!newTask.taskName && !newTask.category) {
      inputRef.current.focus();
      return;
    }
    if (!newTask.taskName) {
      inputRef.current.focus();
      return;
    }
    if (!newTask.category) {
      setIsSpinArrow(true);
      setTimeout(() => {
        setIsSpinArrow(false);
      }, 600);
      return;
    }
    setTasks([newTask, ...tasks]);
    setNewTask({
      id: uuidv4(),
      taskName: "",
      status: "active",
      category: "",
    });
  };

  return (
    <>
      <div className={style["new-task-wrapper"]}>
        <Circle circleType={"unactive"}></Circle>
        <div className={style["task-data"]}>
          <TaskInput
            forwardRef={inputRef}
            placeholder="Create a new todo..."
            task={newTask}
            onChange={handleChange}
          ></TaskInput>
          <Dropdown
            categories={categories}
            isActive={newTask.category ? true : false}
            dropDownTitle={newTask.category ? newTask.category : "Category"}
            isSpinArrow={isSpinArrow}
            onClick={handleSelectCategory}
          ></Dropdown>
        </div>
        <Button
          style={{ marginLeft: "auto" }}
          btnType="blue"
          onClick={handleAddNewTask}
        >
          Add task
        </Button>
      </div>
    </>
  );
};

export default NewTaskEntry;
