import React from "react";
import style from "./Delete.module.scss";
import DeleteImg from "../../../assets/images/icon-cross.svg";

const Delete = ({ className }) => {
  return <img src={DeleteImg} alt="delete-icon" className={className} />;
};

export default Delete;
