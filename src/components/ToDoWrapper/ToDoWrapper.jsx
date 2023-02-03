import React from "react";
import style from "./ToDoWrapper.module.scss";

const ToDoWrapper = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};

export default ToDoWrapper;
