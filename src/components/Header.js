import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "../App.css";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div className={`header ${isActive ? "active" : ""}`}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="navbar">
          <ul className="nav_links">
            <li className="nav_link">
              <Link to="/">HOME</Link>
            </li>

            <li className="nav_link dropdown">
                <button className="dropdown_button">
                  Products <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown_content">
                  <Link to="/products">Adhesives</Link>
                  <Link to="/products">Stone Sealer</Link>
                  <Link to="/products">Care Products</Link>
                  <Link to="/products">Clear Resins</Link>
                  <Link to="/products">Cleaners</Link>
                </div>
            </li>

            <li className="nav_link">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="nav_link">
              <Link to="/career">CAREER</Link>
            </li>

            <li className="nav_link dropdown">
                <button className="dropdown_button">
                  Services & Training <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown_content">
                  <Link to="/privatelabel">Private Label</Link>
                  <Link to="/training">Training</Link>
                  <Link to="/technicalassistance">Technical Assistance</Link>
                </div>
            </li>

            <li className="nav_link">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>

          <div className="buttons contact_btn">
            <Link to="/announcements">
              <i class="fa-solid fa-bullhorn"></i> Announcements
            </Link>
          </div>
        </div>

        <div className="toggle" onClick={handleToggle}>
          <div className="menu_icon">
            <span className="top"></span>
            <span className="middle"></span>
            <span className="end"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
