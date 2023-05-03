import React from "react";
import "./Testimonials.css";

function TestimonialsHolder(props) {
  return (
    <div className="TestimonialsHolder">
      <div className="Testimony-img">
        <img className="image" src={props.item.imgUrl} alt="none" />
        <h3>{props.item.name}</h3>
      </div>
      <div className="Testimony-text">
        <p>{props.item.text}</p>
      </div>
    </div>
  );
}

export default TestimonialsHolder;
