import React from "react";
import style from "./BottomDashBoard.module.scss";
import Button from "../atoms/Button/Button.jsx";
import Dropdown from "../atoms/Dropdown/Dropdown.jsx";

function getActiveTasksAmount(tasks) {
  return tasks.filter((task) => task.status === "active").length;
}

const BottomDashBoard = ({
  tasks,
  dispatch,
  categories,
  filterStatus,
  setFilterStatus,
  filterCategory,
  setFilterCategory,
}) => {
  const activeTasksAmount = getActiveTasksAmount(tasks);
  const activeTasksDisplay =
    activeTasksAmount > 0
      ? activeTasksAmount + " tasks left"
      : "All tasks completed";
  const handleClearCompleted = () => {
    dispatch({
      type: "cleared",
    });
  };

  const handleSelectFilterCategory = (e) => {
    setFilterCategory(e.target.innerHTML.toLowerCase());
  };

  const dropDownTitleContent = (
    <>
      <h4>
        filter by category -
        <span className={style.category}> {filterCategory}</span>
      </h4>
    </>
  );

  const filterButtons = (
    <>
      <div className={style["filter-status"]}>
        <Button
          style={{ marginRight: "1rem" }}
          btnType={filterStatus === "all" && "blue"}
          onClick={() => setFilterStatus("all")}
        >
          All
        </Button>
        <Button
          style={{ marginRight: "1rem" }}
          btnType={filterStatus === "active" && "blue"}
          onClick={() => setFilterStatus("active")}
        >
          Active
        </Button>
        <Button
          btnType={filterStatus === "completed" && "blue"}
          onClick={() => setFilterStatus("completed")}
        >
          Completed
        </Button>
      </div>
      <Dropdown
        style={{ marginTop: "0.625rem" }}
        categories={categories}
        dropdownType="filter"
        dropDownTitle={dropDownTitleContent}
        onClick={handleSelectFilterCategory}
      ></Dropdown>
    </>
  );

  if (tasks.length === 0) {
    return null;
  }
  return (
    <>
      <div className={style.dashboard}>
        <span className={style.amount}>{activeTasksDisplay}</span>
        <div className={style["filters-wrapper"]}>{filterButtons}</div>
        <div>
          <Button
            style={{ flex: "1" }}
            btnType="regular"
            onClick={handleClearCompleted}
          >
            Clear Completed
          </Button>
        </div>
      </div>
      <div className={style["filters-wrapper--mobile"]}>{filterButtons}</div>
    </>
  );
};

export default BottomDashBoard;
