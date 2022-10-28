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
      <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {bikeList.bikes
                    ? bikeList.bikes.map((a, index) => {
                        return <Bike bike={a} key = {a.name} available = {props.available} index = {index}/>;
                      })
                    : null}
                </div>
            </div>
      </section>
    </div>
  );
}

export { BikeList };