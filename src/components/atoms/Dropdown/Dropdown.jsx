import React, { useState, useRef, useEffect } from "react";
import style from "./Dropdown.module.scss";
import Arrow from "../Icons/Arrow/Arrow.jsx";

const Dropdown = (props) => {
  const { categories, dropdownType, task, onClick, ...restProps } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const dropdownRef = useRef();
  let btnClassName;
  let dropDownTitle;
  let isArrowActive;
  if (dropdownType === "filter") {
    console.log("filtravimo dropdown");
    btnClassName = style["btn--filter"];
    dropDownTitle = "Filter by category";
    isArrowActive = true;
  } else {
    btnClassName =
      isDropdownOpen || task.category ? style["btn--active"] : style.btn;
    dropDownTitle = task.category ? task.category : "Category";
    isArrowActive = task.category ? true : false;
  }

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOnClick = (e) => {
    onClick(e);
    setIsDropdownActive(true);
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
          style={{ marginLeft: "5px" }}
          rotate={isDropdownOpen}
          active={isArrowActive}
        />
      </button>
      {isDropdownOpen && (
        <ul className={style["dropwdown-content"]}>
          <li>category</li>
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
