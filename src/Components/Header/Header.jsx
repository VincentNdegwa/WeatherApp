import React from "react";
import "./Header.css";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [menuClicked, setMenuClicked] = React.useState(false);

  function Menu() {
    setMenuClicked(!menuClicked);
  }
  function MenuOut() {
    setMenuClicked(false);
  }

  return (
    <div className="header">
      <div className="header-logo">
        <h1>
          Auto<span>Hire</span>
        </h1>
      </div>
      <div className={menuClicked ? "menu-active" : "header-nav"}>
        <ul onClick={MenuOut}>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Cars">Cars</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Testimonials">Testimonials</a>
          </li>
        </ul>
      </div>
      <div className="Header-menu" onClick={Menu}>
        <AiOutlineMenu />
      </div>
    </div>
  );
}

export default Header;
