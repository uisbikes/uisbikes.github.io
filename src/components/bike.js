import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Bike(props) {
  return (
    <div className="card">
      <div className="card-header">
        {props.index + 1}. Bike No : {props.bike.name}
      </div>
    </div>
  );
}

export default Bike;
