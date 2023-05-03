import React from "react";
import "./Services.css";

function ServicesHolder(props) {
  return (
    <div className="ServicesHolder">
      <div className="service-image">
        <img src={props.item.imgUrl} alt="none" />
      </div>
      <div className="services-provided">{props.item.service}</div>
      <div className="services-btn">
        <button>Get Serivice</button>
      </div>
    </div>
  );
}

export default ServicesHolder;
