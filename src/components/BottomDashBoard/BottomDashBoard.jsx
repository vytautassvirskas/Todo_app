import React from "react";
import style from "./BottomDashBoard.module.scss";
import Button from "../atoms/Button/Button";

const BottomDashBoard = () => {
  return (
    <div className={style.dashboard}>
      <span>kiek liko</span>
      <div>
        <Button onClick={console.log("all")}>All</Button>
        <Button onClick={console.log("active")}>Active</Button>
        <Button onClick={console.log("completed")}>Completed</Button>
      </div>
      <Button onClick={console.log("clear completed")}>Clear Completed</Button>
    </div>
  );
};

export default BottomDashBoard;
