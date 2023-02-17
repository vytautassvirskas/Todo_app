import React from "react";
import style from "./BottomDashBoard.module.scss";
import Button from "../atoms/Button/Button.jsx";
import Dropdown from "../atoms/Dropdown/Dropdown.jsx";

const BottomDashBoard = ({
  tasks,
  setTasks,
  categories,
  filterStatus,
  setFilterStatus,
  filterCategory,
  setFilterCategory,
}) => {
  const taskAmount = tasks.length;
  const handleClearCompleted = () => {
    setTasks(tasks.filter((task) => task.status === "completed"));
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

  if (taskAmount === 0) {
    return null;
  }
  return (
    <div className={style.dashboard}>
      <span className={style.amount}>{taskAmount} items left</span>
      <div className={style["filters-wrapper"]}>
        <div className={style["filter-status"]}>
          <Button
            style={{ marginRight: "1rem" }}
            // btnType="blue"
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
        {/* <Dropdown
          style={{ marginTop: "10px" }}
          categories={categories}
          dropdownType="filter"
          dropDownTitle={dropDownTitleContent}
          onClick={handleSelectFilterCategory}
        ></Dropdown> */}
      </div>
      <Button
        style={{ flex: "1" }}
        btnType="regular"
        onClick={handleClearCompleted}
      >
        Clear Completed
      </Button>
    </div>
  );
};

export default BottomDashBoard;
