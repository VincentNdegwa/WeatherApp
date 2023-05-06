import React from "react";
import "./Navbar.css";
import "../../index.css";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineBarChart } from "react-icons/ai";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar-container">
        <div className="navbar-item">
          <p>Dashboard</p>
          <RxDashboard />
        </div>

        <div className="navbar-item">
          <p>Chart</p>
          <AiOutlineBarChart />
        </div>

        <div className="navbar-item">
          <p>Dashboard</p>
          <RxDashboard />
        </div>

        <div className="navbar-item">
          <p>Chart</p>
          <AiOutlineBarChart />
        </div>

        <div className="navbar-item">
          <p>Dashboard</p>
          <RxDashboard />
        </div>

        <div className="navbar-item">
          <p>Chart</p>
          <AiOutlineBarChart />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
