import React from "react";

function Navbar() {
  return (
    <div className="nav__wrapper">
      <nav className="Navbar">
        <figure className="img__wrapper">
          <img
            className="header__img"
            src="./src/assets/handyChevraPerson.png"
            alt=""
          />
        </figure>
        <ul className="nav__links">
          <li className="nav__link--list">
            <a href="#services">Services</a>
          </li>
          <li className="nav__link--list">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="nav__link--list">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
