import React from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BikeDataService from "../services/bike-service";

function Bike(props) {
  const location = useLocation();

  const deleteBike = (id, bike_id) => {
    BikeDataService.deleteBike(id, bike_id)
      .then(response => {
        return(
          <div>
            <h4>Bike has been deleted successfully!</h4>
            <Link to={"/"} className="btn btn-success">
              Back to Bike Checkout Home Page
            </Link>
          </div>
        )
      })
      .catch(e => {
        console.log(e);
      });
  };

  console.log(location.state);

  return (
    <div className="card">
      <div className="card-header">
        {location.state ? (
          <div>
            <h3>Bike Detail</h3>
            <ul>
              <li>Bike No : {location.state.currentBike.name}</li>
              <li>Bike ID : {location.state.currentBike._id}</li>
              <li>Bike Type: {location.state.currentBike.type}</li>
              <li>Bike Availablity: {location.state.currentBike.available ? "Available" : "Unavailable"}</li>
            </ul>
            
            <Link to={`/bikes/${location.state.currentBike._id}/edit`}
              state={{
                currentBike: location.state.currentBike
              }}
            className="btn btn-primary mx-1 mb-1">Edit Bike</Link>
            <a onClick={() => deleteBike(location.state.currentBike._id, location.state.currentBike.name)} className="btn btn-danger col-sm mx-1 mb-1">Delete</a>
          </div>
        ) : (
          <div className="d-flex flex-row justify-content-between">
            {props.index + 1}. Bike No : {props.bike.name}  
            <Link to={`/bikes/${props.bike._id}`}
              state={{
                currentBike: props.bike
              }}
            className="btn btn-info mx-1 mb-1">View</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export { Bike };
