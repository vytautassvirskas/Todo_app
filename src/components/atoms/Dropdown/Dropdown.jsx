import React, { useState, useRef, useEffect } from "react";
import style from "./Dropdown.module.scss";
import Arrow from "../Icons/Arrow/Arrow.jsx";

const Dropdown = (props) => {
  const {
    categories,
    dropdownType,
    isActive,
    dropDownTitle,
    isSpinArrow,
    onClick,
    ...restProps
  } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef();

  let btnClassName;
  if (dropdownType === "filter") {
    btnClassName = style["btn--filter"];
  } else {
    btnClassName =
      isDropdownOpen || isActive ? style["btn--active"] : style.btn;
  }

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOnClick = (e) => {
    onClick(e);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className={style.dropdown}>
      <button
        {...restProps}
        onClick={handleToggleDropdown}
        className={btnClassName}
        ref={dropdownRef}
      >
        {dropDownTitle}
        <Arrow
          style={{ marginLeft: "0.3125rem" }}
          rotate={isDropdownOpen}
          isSpinArrow={isSpinArrow}
        />
      </button>
      {isDropdownOpen && (
        <ul className={style["dropwdown-content"]}>
          <li>Category</li>
          {dropdownType === "filter" && <li onClick={handleOnClick}>All</li>}
          {categories.map((category) => (
            <li key={category} onClick={handleOnClick}>
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
