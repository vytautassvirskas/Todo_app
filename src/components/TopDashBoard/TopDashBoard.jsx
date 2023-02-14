import React from "react";
import lightMode from "../../assets/images/icon-sun.svg";
import darkMode from "../../assets/images/icon-moon.svg";
import style from "./TopDashBoard.module.scss";

const TopDashBoard = ({ title, theme, handleToggleTheme }) => {
  return (
    <div className={style.dashBoard}>
      <h1 className={style.title}>{title}</h1>
      <img
        className={style.img}
        src={theme === "light" ? darkMode : lightMode}
        alt="theme-icon"
        onClick={handleToggleTheme}
      />
    </div>
  );
};

export default TopDashBoard;
