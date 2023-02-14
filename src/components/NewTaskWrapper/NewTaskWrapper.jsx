import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./NewTaskWrapper.module.scss";
import Circle from "../atoms/Circle/Circle.jsx";
import TaskInput from "../atoms/TaskInput/TaskInput.jsx";
import Dropdown from "../atoms/Dropdown/Dropdown.jsx";
import Button from "../atoms/Button/Button.jsx";

const NewTaskWrapper = (props) => {
  const { tasks, setTasks, categories } = props;
  const [newTask, setNewTask] = useState({
    id: uuidv4(),
    taskName: "",
    isCompleted: false,
    category: "",
  });
  const inputRef = useRef(null);
  const dropdDownRef = useRef(null);
  const isDisabled = newTask.taskName ? false : true;

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  // for drobdown made by me
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
      // inputRef.current.focus();
      return;
    }
    setTasks([newTask, ...tasks]);
    setNewTask({
      id: uuidv4(),
      taskName: "",
      isCompleted: false,
      category: "",
    });
  };

  useEffect(() => {
    console.log("newTask atsinaujino", newTask);
  }, [newTask]);

  useEffect(() => {
    console.log("tasks atsinaujino", tasks);
  }, [tasks]);

  return (
    <>
      <div className={style["new-task-wrapper"]}>
        <Circle circleType={"unactive"}></Circle>
        <TaskInput
          forwardRef={inputRef}
          inputType="new"
          task={newTask}
          onChange={handleChange}
        ></TaskInput>
        <Dropdown
          categories={categories}
          onClick={handleSelectCategory}
          task={newTask}
        ></Dropdown>
        <Button
          style={{ marginLeft: "auto" }}
          // disabled={isDisabled}
          btnType="blue"
          onClick={handleAddNewTask}
        >
          Add task
        </Button>
      </div>
    </>
  );
};

export default NewTaskWrapper;
