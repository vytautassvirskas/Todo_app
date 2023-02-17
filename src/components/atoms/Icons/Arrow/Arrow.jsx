import React, { useEffect } from "react";
import style from "./Arrow.module.scss";

const Arrow = ({ rotate, isSpinArrow, ...restProps }) => {
  // useEffect(() => {
  //   console.log("Arrow ~ isSpinArrow", isSpinArrow);
  // }, [isSpinArrow]);
  const arrowClassName = rotate
    ? style["arrow--rotate"]
    : isSpinArrow
    ? style["arrow--spin"]
    : style.arrow;
  return (
    <svg
      {...restProps}
      className={arrowClassName}
      width="14"
      height="9"
      viewBox="0 0 14 9"
    >
      <path d="M6.86 6.08801L12.045 0.794008C12.2263 0.606291 12.476 0.500275 12.737 0.500275C12.998 0.500275 13.2477 0.606291 13.429 0.794008C13.8084 1.18975 13.8084 1.81427 13.429 2.21001L7.553 8.21001C7.18544 8.58753 6.58286 8.6 6.19999 8.23801L0.285999 2.21401C-0.0937053 1.81915 -0.0937053 1.19487 0.285999 0.800008C0.467278 0.612291 0.717033 0.506275 0.977992 0.506275C1.23895 0.506275 1.48871 0.612291 1.66999 0.800008L6.86 6.08801Z" />
    </svg>
  );
};

export default Arrow;
