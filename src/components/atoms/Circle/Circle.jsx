import React from "react";
import style from "./Circle.module.scss";

const Circle = ({ children, onClick, circleType }) => {
  if (circleType === "unactive") {
    return (
      <div className={style["checkbox-circle"]} onClick={onClick}>
        {children}
      </div>
    );
  }

  if (circleType === "active") {
    return (
      <div className={style["checkbox-circle--active"]} onClick={onClick}>
        {children}
      </div>
    );
  }

  if (circleType === "checked") {
    return (
      <div className={style["checkbox-circle--checked"]} onClick={onClick}>
        {children}
      </div>
    );
  }
};

export default Circle;
