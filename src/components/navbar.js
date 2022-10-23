import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-light rounded-bottom d-flex flex-row justify-content-between"
      style={{ backgroundColor: "navy" }}>
      <a href="/" className="navbar-brand text-light">
        UIS Bikes
      </a>
      <div className="nav">
        <li className="nav-item">
          <a href={"/login"} className="nav-link text-light">
            Log In
          </a>
        </li>
      </div>
    </nav>
  );
}
  
export default Navbar;
  