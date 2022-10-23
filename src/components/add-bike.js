import React, { useState } from "react";
import bikeService from "../services/bike-service";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

const AddBike = () => {
  const bikeState = {
    name: "",
    type: "Daily",
    available: false,
  };

  let editing = false;

  // if (props.location.state && props.location.state.currentBike) {
  //   editing = true;
  //   bikeState.name = props.location.state.currentBike.name;
  //   bikeState.type = props.location.state.currentBike.type;
  //   bikeState.availability = props.location.state.currentBike.availability;
  // }

  const [bike, setBike] = useState(bikeState);
  const [submitted, setSubmitted] = useState(false);

  const updateName = e => {
    const newBikeState = bike;
    newBikeState.name = e.target.value;
    console.log("Hereerererer" + newBikeState.name);
    setBike(newBikeState);
  };

  async function updateType(e) {
    const newBikeState = bike;
    newBikeState.type = e.target.value;
    setBike(newBikeState);
  };

  const updateAvailability = e =>  {
    const newBikeState = bike;
    newBikeState.available = document.getElementById("availability").checked;
    setBike(newBikeState);
  }

  const saveBike = () => {
    if (editing) {
        bikeService.updateBike(bike)
        .then(response => {
          setSubmitted(true);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    } else {
        bikeService.addBike(bike)
        .then(response => {
          setSubmitted(true);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }

  };

  return (
    <div>
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <Link to={"/"} className="btn btn-success">
              Back to Bike Checkout Home Page
            </Link>
          </div>
        ) : (
          <div>
            <h3>{ editing ? "Edit" : "Create" } Bike</h3>
            <div className="form-group">
              <label htmlFor="text" className="form-label">Bike Name</label>
              <input
                type="text"
                className="form-control"
                id="text"
                required
                defaultValue={bike.name}
                onChange={updateName}
                name="text"
              />
            </div>
            <div className="form-group">
                <label hmtlFor="exampleFormControlSelect1">Type</label>
                <select className="form-control" id="exampleFormControlSelect1" onChange={updateType}>
                    <option value="Daily">Daily Bikes</option>
                    <option value="Weekly">Weekly Bikes</option>
                </select>
            </div>
            <div className="form-group">
              <input type="checkbox" id="availability" name="availability" value="" onChange={updateAvailability}></input>
              <label hmtlFor="availability"> Available</label>
            </div>
            <button onClick={saveBike} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default AddBike;