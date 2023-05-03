import React from "react";
import Data from "../Data";
import CarRent from "../Pages/CarRent/CarRent";
import "../Pages/Carspage/Carspage.css";
import CarsHolder from "../Components/Cars/CarsHolder";
const Holder = Data.map((item) => <CarsHolder key={item.id} item={item} />);

function RentalPage() {
  return (
    <div id="#CarRent">
      <CarRent Data={Data} />
      <div className="nested-car-page">
        <div className="Car-conatiner">{Holder}</div>
      </div>
    </div>
  );
}

export default RentalPage;
