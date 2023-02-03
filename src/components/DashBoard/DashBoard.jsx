import React from "react";
import lightMode from "../../assets/images/icon-sun.svg";
import darkMode from "../../assets/images/icon-moon.svg";
import style from "./DashBoard.module.scss";

const DashBoard = ({ title, theme }) => {
  return (
    <div className={style.dashBoard}>
      <h1 className={style.title}>{title}</h1>
      <img src={theme === "light" ? darkMode : lightMode} alt="theme-icon" />
    </div>
  );
};

export default DashBoard;
