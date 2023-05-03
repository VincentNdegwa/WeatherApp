import React from "react";
import "./Cars.css";
import { Link } from "react-router-dom";
import { BiGasPump } from "react-icons/bi";
import { GiElectric } from "react-icons/gi";
import { BsSpeedometer2 } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { MdPeople } from "react-icons/md";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

function CarsHolder(props) {
  const [liked, setLiked] = React.useState(props.item.liked);
  function HandleClick() {
    setLiked(true);
  }
  function goUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="CarsHolder">
      <div className="CarsHolder-img">
        <img src={props.item.carUrl} alt="img" />
      </div>
      <div className="CarHolder-details">
        <div className="car-name">
          <h4 className="model">{props.item.model}</h4>

          <p className="year">{props.item.year}</p>
        </div>
        <div className="car-more-details">
          <small>
            {props.item.type === "Gasoline" ? (
              <BiGasPump className="car-icons" />
            ) : (
              <GiElectric className="car-icons" />
            )}
            {props.item.type}
          </small>

          <small>
            <BsSpeedometer2 className="car-icons" /> {props.item.speed}
          </small>

          <small>
            <AiFillCar className="car-icons" /> {props.item.gear}
          </small>

          <small>
            <MdPeople className="car-icons" /> {props.item.people}
          </small>
        </div>
        <div className="car-details-for-customers">
          <div className="car-price">
            {props.item.price} <small>/Week</small>
          </div>
          <div className="car-like-and-rent">
            <div className="car-like" onClick={HandleClick}>
              {liked === false ? (
                <MdFavoriteBorder className="car-icons like-icon" />
              ) : (
                <MdOutlineFavorite className="car-icons like-icon" />
              )}
            </div>

            <div className="car-rent-btn">
              <Link to={`/RentalPage/${props.item.id}`}>
                <button onClick={goUp} className="rent-btn">
                  Rent
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarsHolder;
