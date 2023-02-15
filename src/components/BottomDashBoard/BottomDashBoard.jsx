import React from "react";
import style from "./BottomDashBoard.module.scss";
import Button from "../atoms/Button/Button.jsx";
import Dropdown from "../atoms/Dropdown/Dropdown.jsx";

const BottomDashBoard = ({
  tasks,
  setTasks,
  categories,
  setFilterStatus,
  setFilterCategory,
}) => {
  const taskAmount = tasks.length;
  const handleClearCompleted = () => {
    setTasks(tasks.filter((task) => task.status === "completed"));
  };

  const handleSelectFilterCategory = (e) => {
    setFilterCategory(e.target.innerHTML.toLowerCase());
  };

  if (taskAmount === 0) {
    return null;
  }
  return (
    <div className={style.dashboard}>
      <span className={style.amount}>{taskAmount} items left</span>
      <div className={style["filters-wrapper"]}>
        <div className={style["filter-status"]}>
          <Button
            btnType="blue"
            style={{ marginRight: "1rem" }}
            onClick={() => setFilterStatus("all")}
          >
            All
          </Button>
          <Button
            style={{ marginRight: "1rem" }}
            onClick={() => setFilterStatus("active")}
          >
            Active
          </Button>
          <Button onClick={() => setFilterStatus("completed")}>
            Completed
          </Button>
        </div>
        <Dropdown
          style={{ marginTop: "10px" }}
          dropdownType="filter"
          categories={categories}
          onClick={handleSelectFilterCategory}
        ></Dropdown>
      </div>
      <Button btnType="regular" onClick={handleClearCompleted}>
        Clear Completed
      </Button>
    </div>
  );
};

export default BottomDashBoard;
