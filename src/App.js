import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Bike from "./components/bike";
import BikeList from "./components/bike-list";
import Login from "./components/login";

function App() {
  const [user, setUser] = React.useState(null);
  const [bikeType, setBikeType] = React.useState("Daily");

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  async function changeBikeType(event) {
    setBikeType(event.target.value);
  }

  return (
    <div>
      <nav
        className="navbar navbar-light rounded-bottom d-flex flex-row justify-content-between"
        style={{ backgroundColor: "navy" }}
      >
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

      <br></br>
      <div className="d-flex flex-row justify-content-between">
        <button className="btn btn-secondary lg">+ Add New Bike</button>

        <select
          className="form-select form-select-lg"
          style={{ width: "auto" }}
          onChange={changeBikeType}
        >
          <option value="Daily">Daily Bikes</option>
          <option value="Weekly">Weekly Bikes</option>
        </select>
      </div>

      <br></br>

      <div className="card card-body text-light bg-success">
        Available {bikeType} Bikes
      </div>

      <BikeList type={bikeType} available={true} />

      <br></br>

      <div className="card card-body text-light bg-secondary">
        Unavailable {bikeType} Bikes
      </div>

      <BikeList type={bikeType} available={false} />
    </div>
  );
}

export default App;
