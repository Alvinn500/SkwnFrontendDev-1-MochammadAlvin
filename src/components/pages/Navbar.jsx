import { useRef } from "react";
import "./Navbar.css";
import $ from "jquery";

const Navbar = () => {
  const hamburger = useRef(null);

  const handleHamburger = () => {
    $(hamburger.current).toggleClass("hamburger-active");

    if ($(hamburger.current).hasClass("hamburger-active")) {
      $(".header__nav-list").addClass("nav-list--active");
    } else {
      $(".header__nav-list").removeClass("nav-list--active");
    }
  };

  return (
    <header className="header container">
      <nav className="header__nav">
        <button
          className="header__nav--humburger"
          ref={hamburger}
          onClick={handleHamburger}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="header__nav-logo">
          <img src="/logo.png" alt="logo" />
          <h1>Dekor</h1>
        </div>
        <ul className="header__nav-list">
          <li>
            <a href="#about">About US</a>
          </li>
          <li>
            <a href="#funiture">
              Funiture
              <span className="material-symbols-outlined">expand_more</span>
            </a>
          </li>
          <li>
            <a href="partnerships">Partnerships</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
        <div className="header__nav-button">
          <button className="header__nav-button--sign-in">Sign Up</button>
          <button className="header__nav-button--bag">
            <span className="material-symbols-outlined">shopping_bag</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
