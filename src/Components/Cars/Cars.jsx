import React from "react";
import Data from "../../Data";
import CarsHolder from "./CarsHolder";
import "./Cars.css";

function Cars() {
  // const [carData, setCarData] = React.useEffect([])

  const Holder = Data.map((item) => <CarsHolder key={item.id} item={item} />);
  return (
    <div className="Cars">
      <div className="Car-header-intro">
        <div className="intro-card card">
          <div className="intro-item-number">60+</div>
          <div className="intro-item-detail">Comapany Patnership </div>
        </div>

        <div className="intro-card card">
          <div className="intro-item-number">20+</div>
          <div className="intro-item-detail">Branches Contry-Wide</div>
        </div>

        <div className="intro-card card">
          <div className="intro-item-number">1000+</div>
          <div className="intro-item-detail">Ready Cars for Hire</div>
        </div>

        <div className="intro-card">
          <div className="intro-item-number">2367+</div>
          <div className="intro-item-detail">Satisfied Customers</div>
        </div>
      </div>
      <div className="Car-header">
        <h1>Top Deal Cars</h1>
      </div>
      <div className="Car-conatiner">{Holder}</div>
    </div>
  );
}

export default Cars;
