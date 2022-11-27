import React, { useState } from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BikeDataService from "../services/bike-service";
import { useSelector, useDispatch } from "react-redux";

function Bike(props) {
  const location = useLocation();
  const user = useSelector(state => state); 

  const [deleted, setDeleted] = useState(false);

  const deleteBike = (id, bike_id) => {
    BikeDataService.deleteBike(id, bike_id)
    .then(response => {
        setDeleted(true);
        console.log(response.data);
      })
    .catch(e => {
      console.log(e);
    });
  };

  return (
    <div>
        {deleted ? (
        <div>
            <h4>Bike has been deleted successfully!</h4>
            <Link to={"/"} className="btn btn-success">
              Back to Bike Checkout Home Page
            </Link>
        </div> 
        ) : (
        location.state ? (
          <div>
            <section className="py-5">
              <div className="container px-4 px-lg-5 my-5">
                  <div className="row gx-4 gx-lg-5 align-items-center">
                      <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image of Rental Bike" /></div>
                      <div className="col-md-6">
                          <div className="small mb-1">SKU: {location.state.currentBike._id}</div>
                          <h1 className="display-5 fw-bolder">Bike {location.state.currentBike.name}</h1>
                          <div className="fs-5 mb-5">
                              <p>{location.state.currentBike.type} Bike</p>
                              <p className="fw-bold">{location.state.currentBike.available ? "Available" : (user.name) ? `Taken by: ${location.state.currentBike.student}` : "Unavailable"}</p>
                          </div>
                          <p className="lead">Bikes are offered to students as part of the UIS Bikes Program to improve connections and community across campus.</p>
                          {user.name && <div className="d-flex space-between">
                            <Link to={`/bikes/${location.state.currentBike._id}/edit`}
                            state={{
                              currentBike: location.state.currentBike
                            }}>
                              <button className="btn btn-outline-dark flex-shrink-0" type="button" style={{marginRight: 0.5 + 'em'}}>
                                  <i className="bi bi-pencil-square me-1"></i>
                                  Edit
                              </button>
                            </Link>
                            <a className="btn btn-danger" type="button" onClick={() => deleteBike(location.state.currentBike._id, location.state.currentBike.name)}>
                                <i className="bi bi-trash me-1"></i>
                                Delete
                            </a>
                          </div>}
                      </div>
                  </div>
              </div>
            </section>
          </div>
        ) : (
            <div className="col mb-5">
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute" style={{marginRight: 0.5 + 'em', marginTop: 0.5 + 'em'}}>{props.bike.available ? "Available" : "Unavailable"}</div>
                <img className="card-img-top" src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sample Bike Image" />
                <div className="card-body p-4">
                    <div className="text-center">
                      <div
                      className="btn btn-info btn-xs" style={{marginBottom: 0.5 + 'em'}}>
                        <Link className="btn mt-auto" to={`/bikes/${props.bike._id}`}
                        state={{
                          currentBike: props.bike
                        }}>
                          <h6 className="fw-bolder">Bike: {props.bike.name}</h6>
                        </Link>
                      </div>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>

                      {!props.bike.available && (user.name)? <div className = "btn btn-success">Student ID: {props.bike.student}</div> : null}
                    </div>
                </div>
                {(user.name) && <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <Link className="btn btn-outline-dark mt-auto" to={`/bikes/${props.bike._id}`}
                        state={{
                          currentBike: props.bike
                        }}>
                        <i class="bi-cart-fill me-1"></i>
                        {props.bike.available ? "Checkout" : "Check In"}
                      </Link>
                    </div>
                </div>}
              </div>
            </div>
        ))}
    </div>
  );
}

export { Bike };
