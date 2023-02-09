import React from "react";
import style from "./Button.module.scss";

const Button = ({ children, onClick, btnType }) => {
    const btnClassName = btnType==="blue" ? "btn--blue" : btnType==="bold"? "btn--bold" : "btn"
    
  return (
    <button className={style.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
