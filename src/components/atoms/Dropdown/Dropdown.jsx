import React, { useState } from "react";
import style from "./Dropdown.module.scss";
import Arrow from "../Icons/Arrow/Arrow.jsx";

const Dropdown = ({ categories }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const btnClassName = isDropdownOpen ? style["btn--active"] : style.btn;

  return (
    <div className={style.dropdown} onBlur={() => setIsDropdownOpen(false)}>
      <button onClick={toggleDropdown} className={btnClassName}>
        Category <Arrow style={{ marginLeft: "5px" }} rotate={isDropdownOpen} />
      </button>
      {isDropdownOpen && (
        <ul className={style["dropwdown-content"]}>
          <li>Category</li>
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
