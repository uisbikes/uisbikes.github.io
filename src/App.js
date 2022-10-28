import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import Login from "./components/login";
import Layout from "./components/layout";
import AddBike from "./components/add-bike";
import { BikeList } from "./components/bike-list";
import { Bike } from "./components/bike";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/bikes/:bikeId" element={<Bike />} />
          <Route path="/bikes/:bikeId/*" element={<AddBike />} />
          <Route path="*" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;