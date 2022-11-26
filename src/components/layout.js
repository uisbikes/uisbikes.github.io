import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Navbar from "./navbar";
import { BikeList } from "./bike-list";
import { useSelector } from "react-redux";

const Layout = () => {
  const [bikeType, setBikeType] = React.useState("Daily");
  const user = useSelector(state => state); 

  async function changeBikeType(event) {
    setBikeType(event.target.value);
  }

  return (
    <div>
      <Navbar />
      <br></br>
      <div className="d-flex flex-row justify-content-between">
        <select
        className="form-select form-select-lg"
        style={{ width: "auto" }}
        onChange={changeBikeType}
        >
          <option value="Daily">Daily Bikes</option>
          <option value="Weekly">Weekly Bikes</option>
        </select>

        {(user.name) && <Link to={"/bikes/bike/add"} className="btn btn-secondary lg">
          + Add New Bike
        </Link>}
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
  
export default Layout;
  