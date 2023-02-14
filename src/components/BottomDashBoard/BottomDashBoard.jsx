import React from "react";
import style from "./BottomDashBoard.module.scss";
import Button from "../atoms/Button/Button.jsx";
import Dropdown from "../atoms/Dropdown/Dropdown.jsx";

const BottomDashBoard = ({ tasks, setTasks, categories }) => {
  const taskAmount = tasks.length;
  // console.log("BottomDashBoard ~ taskAmount", taskAmount);
  const handleClearCompleted = () => {
    setTasks(tasks.filter((task) => task.isCompleted === false));
  };
  return (
    <div className={style.dashboard}>
      <span className={style.amount}>{taskAmount} items left</span>
      <div className={style["filters-wrapper"]}>
        <div className={style["filter-status"]}>
          <Button
            btnType="blue"
            style={{ marginRight: "1rem" }}
            onClick={() => console.log("all")}
          >
            All
          </Button>
          <Button
            style={{ marginRight: "1rem" }}
            onClick={() => console.log("active")}
          >
            Active
          </Button>
          <Button onClick={() => console.log("completed")}>Completed</Button>
        </div>
        <Dropdown
          style={{ marginTop: "10px" }}
          dropdownType="filter"
          categories={categories}
          onClick={() => {
            console.log("filtruojam pagal tipa");
          }}
        ></Dropdown>
      </div>
      <Button btnType="regular" onClick={handleClearCompleted}>
        Clear Completed
      </Button>
    </div>
  );
};

export default BottomDashBoard;
