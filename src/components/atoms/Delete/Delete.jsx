import React from "react";
import style from "./Delete.module.scss";
import DeleteImg from "../../../assets/images/icon-cross.svg";

const Delete = ({ className }) => {
  return (
    <img
      style={{ fill: "white" }}
      src={DeleteImg}
      alt="delete-icon"
      className={style.delete}
    />
  );
};

export default Delete;
