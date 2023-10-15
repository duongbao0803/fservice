import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../Header/styleHeader.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Header(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/");
    toast.success("Logout Success");
  };

  return (
    <>
      <nav className="navbar b navbar-light navbar-expand-md" id="move">
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
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/package" className="nav-link">
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
            <li className="nav-item" style={{ paddingRight: 0 }}>
              <DropdownButton id="dropdown-basic-button" title="Account">
                <Dropdown.Item as={Link} to="/authen">
                  Login
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLogout()}>
                  Logout
                </Dropdown.Item>
              </DropdownButton>
            </li>
          </ul>
        </div>
      </nav>
      <ToastContainer />
    </>
  );
}

export default Header;
