import React, { useState, useRef, useEffect } from "react";
import style from "./Dropdown.module.scss";
import Arrow from "../Icons/Arrow/Arrow.jsx";

const Dropdown = ({ categories, task, onClick, ...restProps }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const btnClassName =
    isDropdownOpen || task.category ? style["btn--active"] : style.btn;
  const dropDownTitle = task.category ? task.category : "Category";
  const isArrowActive = task.category ? true : false;

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
          style={{ marginLeft: "5px" }}
          rotate={isDropdownOpen}
          active={isArrowActive}
        />
      </button>
      {isDropdownOpen && (
        <ul className={style["dropwdown-content"]}>
          <li>Category</li>
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
