import React, { useState, useRef } from "react";
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
  const inputRef = useRef(null);
  const editSaveBtnStyle = { marginRight: "8px", marginLeft: "auto" };

  let checkCircle;
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
        <TaskInput
          forwardRef={inputRef}
          task={task}
          onChange={(e) =>
            handleChangeTask({ ...task, [e.target.name]: e.target.value })
          }
        ></TaskInput>

        <Dropdown
          task={task}
          categories={categories}
          style={{ marginRight: "20px" }}
          onClick={(e) =>
            handleChangeTask({ ...task, category: e.target.innerHTML })
          }
        ></Dropdown>

        <Button style={editSaveBtnStyle} onClick={() => setIsEditable(false)}>
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
