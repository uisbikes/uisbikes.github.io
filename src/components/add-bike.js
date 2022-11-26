import React, { useState } from "react";
import BikeDataService from "../services/bike-service";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Link, useLocation } from "react-router-dom";

const AddBike = () => {
  const location = useLocation();

  const bikeState = {
    id: "",
    name: "",
    type: "Daily",
    available: false,
    student: "",
  };

  let editing = false;

  if (location.state && location.state.currentBike) {
    editing = true;
    bikeState.id = location.state.currentBike._id;
    bikeState.name = location.state.currentBike.name;
    bikeState.type = location.state.currentBike.type;
    bikeState.available = location.state.currentBike.available;
    bikeState.student = location.state.currentBike.student;
  }

  const [bike, setBike] = useState(bikeState);
  const [submitted, setSubmitted] = useState(false);
  const [available, setAvailable] = useState(bikeState.available); 

  const updateName = (e) => {
    const newBikeState = bike;
    newBikeState.name = e.target.value;
    setBike(newBikeState);
  };

  async function updateType(e) {
    const newBikeState = bike;
    newBikeState.type = e.target.value;
    setBike(newBikeState);
  }

  const updateAvailability = (e) => {
    const newBikeState = bike;
    newBikeState.available = document.getElementById("availability").checked;

    if (newBikeState.available) {
      setAvailable(true); 
      newBikeState.student = "";
    } else {
      setAvailable(false); 
    }
    
    setBike(newBikeState);
  };

  const updateStudent = (e) => {
    const newBikeState = bike;
    newBikeState.student = e.target.value;
    setBike(newBikeState);
  };

  const saveBike = () => {
    if (editing) {
      BikeDataService.updateBike(bike)
        .then((response) => {
          setSubmitted(true);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      BikeDataService.addBike(bike)
        .then((response) => {
          setSubmitted(true);
          console.log(response.data);
        })
        .catch((e) => {
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
            <h3>{editing ? "Edit" : "Create"} Bike</h3>
            <div className="form-group">
              <label className="form-label">Bike Name</label>
              <input
                type="text"
                className="form-control"
                required
                defaultValue={bike.name}
                onChange={updateName}
                name="text"
              />
            </div>
            <br></br>
            <div className="form-group">
              <label>Type</label>
              <select
                className="form-control"
                onChange={updateType}
                value={bike.type}
              >
                <option value="Daily">Daily Bike</option>
                <option value="Weekly">Weekly Bike</option>
              </select>
            </div>
            <br></br>
            <div className="form-group">
              <input
                type="checkbox"
                defaultChecked={bike.available}
                id="availability"
                name="availability"
                onChange={updateAvailability}
              ></input>
              <label>Available</label>
            </div>
            <br></br>

            {!available ? <div className="form-group">
              <label className="form-label">Student</label>
              <input
                type="text"
                className="form-control"
                id="student-form-input"
                required
                defaultValue={bike.student}
                onChange={updateStudent}
                name="text"
              />
            </div> : null}

            <br></br>
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
