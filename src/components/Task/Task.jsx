import React, { useState } from "react";
import style from "./Task.module.scss";
import Button from "../atoms/Button/Button.jsx";
import Delete from "../atoms/Icons/Delete/Delete.jsx";
import Check from "../atoms/Icons/Check/Check.jsx";
import Circle from "../atoms/Circle/Circle.jsx";
import Edit from "../atoms/Icons/Edit/Edit.jsx";
import TaskInput from "../atoms/TaskInput/TaskInput.jsx";

const Task = ({ task, handleDeleteTask, handleChangeTask }) => {
  const [isEditable, setIsEditable] = useState(false);
  console.log("task: ", task);

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
  //this repeats on newTaskWrapper.jsx
  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  return (
    <li key={task.id} className={style["task-wrapper"]}>
      {checkCircle}
      <TaskInput
        task={task}
        onChange={(e) =>
          handleChangeTask({ ...task, [e.target.name]: e.target.value })
        }
      ></TaskInput>

      <span style={{ marginRight: "20px", color: "white" }}>
        {task.category}
      </span>
      <Button
        style={{ marginRight: "8px" }}
        onClick={() => console.log("editinam")}
      >
        <Edit></Edit>
      </Button>
      <Button onClick={() => handleDeleteTask(task.id)}>
        <Delete></Delete>
      </Button>
    </li>
  );
};

export default Task;
