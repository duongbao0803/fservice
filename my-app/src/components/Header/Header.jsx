import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../Header/styleHeader.css";

function Header() {
  return (
    <>
      <nav className="navbar navbar-light navbar-expand-sm" id="move">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="div" style={{ textAlign: "left" }}>
          <img src={require("../../img/logo_web_2.png")} alt="" width="90px" />
        </div>
        <div className="container-fluid">
          <div className="row" />
        </div>
        <div
          className="collapse navbar-collapse"
          id="navbarToggleExternalContent"
        >
          <ul className="navbar-nav mr-auto" id="myNavbar">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/service" className="nav-link">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Link to="/admin">
                <i className="fa-solid fa-circle-user" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
