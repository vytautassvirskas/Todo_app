import React, { useState, useRef, useEffect } from "react";
import style from "./Task.module.scss";
import Circle from "../atoms/Circle/Circle.jsx";
import Check from "../atoms/Icons/Check/Check.jsx";
import TaskInput from "../atoms/TaskInput/TaskInput.jsx";
import Dropdown from "../atoms/Dropdown/Dropdown.jsx";
import Button from "../atoms/Button/Button.jsx";
import Edit from "../atoms/Icons/Edit/Edit.jsx";
import Save from "../atoms/Icons/Save/Save.jsx";
import Delete from "../atoms/Icons/Delete/Delete.jsx";

const Task = ({ task, handleDeleteTask, handleChangeTask, categories }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const inputRef = useRef(null);
  const editSaveBtnStyle = { marginRight: "0.5rem", marginLeft: "auto" };
  let checkCircle;

  const handleSaveEditedTask = () => {
    if (task.taskName.trim().length === 0) {
      inputRef.current?.focus();
      setPlaceholder("Can not be empty!");
      return;
    }
    setIsEditable(false);
  };
  const handleOnChangeTaskInput = (e) => {
    if (e.target.value.trim().length > 30) {
      return;
    }
    handleChangeTask({ ...task, [e.target.name]: e.target.value });
  };

  if (task.status === "completed") {
    checkCircle = (
      <Circle
        circleType={"checked"}
        onClick={() => handleChangeTask({ ...task, status: "active" })}
      >
        <Check></Check>
      </Circle>
    );
  } else {
    checkCircle = (
      <Circle
        circleType={"active"}
        onClick={() => {
          handleChangeTask({ ...task, status: "completed" });
          setIsEditable(false);
        }}
      ></Circle>
    );
  }

  let taskContent;
  if (isEditable) {
    taskContent = (
      <>
        <div className={style["task-data"]}>
          <TaskInput
            forwardRef={inputRef}
            placeholder={placeholder}
            task={task}
            style={{ marginBottom: "0.625rem", width: "100%" }}
            onChange={handleOnChangeTaskInput}
          ></TaskInput>

          <Dropdown
            categories={categories}
            isActive={task.category ? true : false}
            dropDownTitle={task.category ? task.category : "Category"}
            style={{ marginRight: "1.25rem" }}
            onClick={(e) =>
              handleChangeTask({ ...task, category: e.target.innerHTML })
            }
          ></Dropdown>
        </div>

        <Button style={editSaveBtnStyle} onClick={handleSaveEditedTask}>
          <Save></Save>
        </Button>
      </>
    );
  } else {
    taskContent = (
      <>
        <h3
          className={
            task.status === "active"
              ? style["task-title"]
              : style["task-title--completed"]
          }
        >
          {task.taskName}
          <span className={style["vertical-mark"]}> | </span>
          <span className={style["task-category"]}>{task.category}</span>
        </h3>
        <Button style={editSaveBtnStyle} onClick={() => setIsEditable(true)}>
          <Edit></Edit>
        </Button>
      </>
    );
  }

  useEffect(() => {
    if (isEditable) {
      inputRef.current?.focus();
    }
  }, [isEditable, inputRef]);

  return (
    <li key={task.id} className={style["task-wrapper"]}>
      {checkCircle}
      {taskContent}
      <Button onClick={() => handleDeleteTask(task.id)}>
        <Delete></Delete>
      </Button>
    </li>
  );
};

export default Task;
