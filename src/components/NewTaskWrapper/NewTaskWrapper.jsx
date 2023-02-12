import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./NewTaskWrapper.module.scss";
import Circle from "../atoms/Circle/Circle.jsx";
import Button from "../atoms/Button/Button.jsx";
import TaskInput from "../atoms/TaskInput/TaskInput.jsx";
import dropdownArrow from "../../assets/images/dropdown-svgrepo-com.svg";

const NewTaskWrapper = (props) => {
  const { tasks, setTasks, categories } = props;
  const [newTask, setNewTask] = useState({
    id: uuidv4(),
    taskName: "",
    isCompleted: false,
    category: "",
  });

  const isDisabled = newTask.taskName ? false : true;

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSelectCategory = (e) => {
    console.log("handleSelectCategory ~ e", e);
    console.log("handleSelectCategory ~ e", e.target.value);

    setNewTask((prevNewTask) => {
      return { ...prevNewTask, [e.target.name]: e.target.value };
    });
  };

  // for drobdown made by me
  // const handleSelectCategory = (e) => {
  //   console.log("innerHTML:", e.target.innerHTML);
  //   console.dir(e.target);
  //   setNewTask((prevNewTask) => {
  //     return { ...prevNewTask, category: e.target.innerHTML };
  //   });
  // };

  const handleAddNewTask = () => {
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
          inputType="new"
          task={newTask}
          onChange={handleChange}
        ></TaskInput>

        <select
          disabled={isDisabled}
          // defaultValue="default"
          value={!newTask.category && "default"}
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
        {/* dropdown made by me */}
        {/* <div className={style.dropdown}>
          <button className={style["dropdown-btn"]}>
            Category
            <img src={dropdownArrow} alt="dropdown-arrow" />
          </button>
          <div className={style["dropdown-content"]}>
            {categories.map((category) => (
              <span
                key={category}
                className={style.category}
                onClick={handleSelectCategory}
              >
                {category}
              </span>
            ))}
          </div>
        </div> */}
        <Button
          style={{ marginLeft: "auto" }}
          disabled={isDisabled}
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
