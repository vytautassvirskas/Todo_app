import React, { useState } from "react";
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

  let checkCircle;
  if (task.isCompleted) {
    checkCircle = (
      <Circle
        circleType={"checked"}
        onClick={() => handleChangeTask({ ...task, isCompleted: false })}
      >
        <Check></Check>
      </Circle>
    );
  } else {
    checkCircle = (
      <Circle
        circleType={"active"}
        onClick={() => handleChangeTask({ ...task, isCompleted: true })}
      ></Circle>
    );
  }

  let taskContent;
  console.log("Task ~ setIsEditable", isEditable);
  if (isEditable) {
    taskContent = (
      <>
        <TaskInput
          task={task}
          onChange={(e) =>
            handleChangeTask({ ...task, [e.target.name]: e.target.value })
          }
        ></TaskInput>

        <Dropdown
          task={task}
          categories={categories}
          style={{ marginRight: "20px" }}
        ></Dropdown>

        <Button
          style={{ marginRight: "8px", marginLeft: "auto" }}
          onClick={() => setIsEditable(false)}
        >
          <Save></Save>
        </Button>
      </>
    );
  } else {
    taskContent = (
      <>
        <h3 className={style["task-title"]}>{task.taskName}</h3>
        <span className={style["vertical-mark"]}>|</span>
        <span className={style["task-category"]}>{task.category}</span>
        <Button
          style={{ marginRight: "8px", marginLeft: "auto" }}
          onClick={() => setIsEditable(true)}
        >
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
