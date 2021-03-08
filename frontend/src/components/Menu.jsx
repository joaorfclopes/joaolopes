import React, { useEffect } from "react";

export default function Menu() {
  useEffect(() => {
    const menu = document.querySelector(".menu");
    const btn = menu.querySelector(".nav-tgl");
    btn.addEventListener("click", (evt) => {
      menu.classList.toggle("active");
    });
  }, []);

  return (
    <div className="menu">
      <button className="nav-tgl" type="button" aria-label="toggle menu">
        <span aria-hidden="true"></span>
      </button>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </div>
  );
}
