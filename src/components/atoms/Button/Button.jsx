import React from "react";
import style from "./Button.module.scss";

const Button = ({ children, onClick, btnType, ...restProps }) => {
  const btnClassName =
    btnType === "blue"
      ? "btn--blue"
      : btnType === "regular"
      ? "btn--regular"
      : "btn";

  return (
    <button
      {...restProps}
      className={style[btnClassName]}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
