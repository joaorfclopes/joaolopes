import React from "react";
import { options, scrollToSection } from "../utils";

export default function Menu() {
  const toggleMenu = () => {
    document.querySelector(".menu").classList.toggle("active");
    setTimeout(() => {
      document.querySelector(".nav").classList.toggle("show");
    }, 300);
  };

  const handleCLick = (option) => {
    toggleMenu();
    setTimeout(() => {
      scrollToSection(option);
    }, 300);
  };

  return (
    <div className="menu">
      <button
        onClick={toggleMenu}
        className="nav-tgl"
        type="button"
        aria-label="toggle menu"
      >
        <span aria-hidden="true"></span>
      </button>
      <nav className="nav">
        <ul className="options">
          {options.map((option) => (
            <li key={option} onClick={() => handleCLick(option)}>
              {option}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
