import React, { useEffect } from "react";
import bikeService from "../services/bike-service";
import {Bike} from "./bike";
import "bootstrap/dist/css/bootstrap.min.css";

function BikeList(props) {
  const [bikeList, setBikeList] = React.useState({});

  const getBikeList = (type, available) => {
    bikeService
      .get(type, available)
      .then((response) => {
        setBikeList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getBikeList(props.type, props.available);
  }, [props.type]);

  return (
    <div className="BikeList">
      {bikeList.bikes
        ? bikeList.bikes.map((a, index) => {
            return <Bike bike={a} key = {a.name} available = {props.available} index = {index}/>;
          })
        : null}
    </div>
  );
}

export { BikeList };