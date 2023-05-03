import React from "react";
import ServicesHolder from "./ServicesHolder";
import ServicesData from "../../ServicesData";
import "./Services.css";

function Services() {
  const Holder = ServicesData.map((item) => (
    <ServicesHolder key={item.id} item={item} />
  ));
  return (
    <div className="service-container">
      <div className="services-header">
        <h1>Services</h1>
      </div>
      <div className="services">{Holder}</div>
    </div>
  );
}

export default Services;
