import {React, useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-light rounded-bottom d-flex flex-row justify-content-between"
      style={{ backgroundColor: "navy" }}>
      <a href="/" className="navbar-brand text-light">
        UIS Bikes
      </a>
      <Login/>
    </nav>
  );
}
  
export default Navbar;
  