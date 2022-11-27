import {React, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login";
import Layout from "./components/layout";
import AddBike from "./components/add-bike";
import { BikeList } from "./components/bike-list";
import { Bike } from "./components/bike";
import {useSelector} from "react-redux";
function App() {
  const user = useSelector(state => state);
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/bikes/:bikeId" element={<Bike />} />
          {(user.name) && <Route path="/bikes/:bikeId/*" element={<AddBike />} />}
          <Route path="*" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;