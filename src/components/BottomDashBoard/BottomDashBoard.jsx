import React from "react";
import style from "./BottomDashBoard.module.scss";
import Button from "../atoms/Button/Button";

const BottomDashBoard = ({ tasks, setTasks }) => {
  const taskAmount = tasks.length;
  console.log("BottomDashBoard ~ taskAmount", taskAmount);
  const handleClearCompleted = () => {
    setTasks(tasks.filter((task) => task.isCompleted === false));
  };
  return (
    <div className={style.dashboard}>
      <span className={style.amount}>{taskAmount} items left</span>
      <div className="">
        <Button
          btnType="blue"
          style={{ marginRight: "1rem" }}
          onClick={console.log("all")}
        >
          All
        </Button>
        <Button style={{ marginRight: "1rem" }} onClick={console.log("active")}>
          Active
        </Button>
        <Button onClick={console.log("completed")}>Completed</Button>
      </div>
      <Button btnType="regular" onClick={handleClearCompleted}>
        Clear Completed
      </Button>
    </div>
  );
};

export default BottomDashBoard;