import React, { useState, useRef, useEffect } from "react";
import style from "./Dropdown.module.scss";
import Arrow from "../Icons/Arrow/Arrow.jsx";

const Dropdown = ({ categories, task, onClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const btnClassName = isDropdownOpen ? style["btn--active"] : style.btn;
  console.log("task dropdown ateina: ", task);
  const dropDownTitle = task.category ? task.category : "Category";

  // const domRef = handleClickOutside(() => {
  //   setIsDropdownOpen(false);
  // });

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOnClick = (e) => {
    onClick(e);
    setIsDropdownOpen(false);
  };

  const handleCloseDropdown = (e) => {};

  useEffect(() => {
    console.log("Dropdown ~ dropdownRef", dropdownRef);
  }, [dropdownRef]);
  return (
    <div
      className={style.dropdown}
      // onBlur={() => {
      //   console.log("onBlur veikia");
      //   setIsDropdownOpen(false);
      // }}
      onClick={(e) => console.log("e.target:", e.target)}
    >
      <button
        onClick={handleToggleDropdown}
        className={btnClassName}
        ref={dropdownRef}
      >
        {dropDownTitle}{" "}
        <Arrow style={{ marginLeft: "5px" }} rotate={isDropdownOpen} />
      </button>
      {isDropdownOpen && (
        <ul className={style["dropwdown-content"]}>
          <li>Category</li>
          {categories.map((category) => (
            <li
              key={category}
              onClick={handleOnClick}
              // onClick={() => setIsDropdownOpen(false)}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
