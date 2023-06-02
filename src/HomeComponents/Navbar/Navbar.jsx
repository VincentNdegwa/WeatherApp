import React from "react";
import "./Navbar.css";
import "../../index.css";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineBarChart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-item">
          <p>Dashboard</p>
          <RxDashboard />
        </Link>

        <Link to="/Chart" className="navbar-item">
          <p>Chart</p>
          <AiOutlineBarChart />
        </Link>

        <Link to="/Cities" className="navbar-item">
          <p>Cities</p>
          <RxDashboard />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
