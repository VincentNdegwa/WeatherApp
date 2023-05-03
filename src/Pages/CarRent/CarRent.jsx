import React from "react";
import { useParams } from "react-router-dom";
import "./CarRent.css";
// import "../../Components/Header/Header.css";
import { BiGasPump } from "react-icons/bi";
import { GiElectric } from "react-icons/gi";
import { BsSpeedometer2 } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { MdPeople } from "react-icons/md";
import { Link } from "react-router-dom";

function CarRent(props) {
  const { id } = useParams();
  const car = props.Data.find((car) => car.id === parseInt(id));

  return (
    <div className="CarRent">
      <div className="header">
        <div className="header-logo">
          <h1>
            Auto<span>Hire</span>
          </h1>
        </div>
        <div className="header-nav-holder">
          <ul>
            <li>
              <Link to="/" className="rental-nav">
                <a href="#Home">Home</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="CarRent-container">
        <div className="Car-details" id="CarRent">
          <div className="car-img">
            <img src={car.carUrl} alt="car" />
          </div>
          <div className="car-name-rating">
            <div className="car-name">
              <h2>{car.model}</h2>
            </div>
            <div className="car-rating">200 Reviews</div>
          </div>
          <div className="car-features">
            <div className="features-list">
              <li>
                {car.type === "Gasoline" ? (
                  <BiGasPump className="car-icons" />
                ) : (
                  <GiElectric className="car-icons" />
                )}
                {car.type}
              </li>

              <li>
                <BsSpeedometer2 className="car-icons" /> {car.speed}
              </li>

              <li>
                <AiFillCar className="car-icons" /> {car.gear}
              </li>

              <li>
                <MdPeople className="car-icons" /> {car.people}
              </li>
            </div>
          </div>
        </div>
        <div className="CarRent-form">
          <div className="form-container">
            <form action="">
              <div className="form-input">
                <label htmlFor="">First Name:</label>
                <br />
                <input type="text" placeholder="Vincent" required />
              </div>

              <div className="form-input">
                <label htmlFor="">Last Name:</label>
                <br />
                <input type="text" placeholder="Ndegwa" required />
              </div>

              <div className="form-input">
                <label htmlFor="">Email:</label>
                <br />
                <input
                  type="email"
                  placeholder="vinndegwa@gmail.com"
                  required
                />
              </div>

              <div className="form-input">
                <label htmlFor="">Card Number:</label>
                <br />
                <input
                  type="number"
                  placeholder="0000 1111 2222 3333"
                  required
                />
              </div>

              <div className="form-input">
                <label htmlFor="">Valid Date:</label>
                <br />
                <input type="date" />
              </div>

              <div className="form-input">
                <label htmlFor="">cvv:</label>
                <br />
                <input type="number" placeholder="012" required />
              </div>
              {/* ============================================= */}
              <div className="credentials-form">
                <div className="form-input">
                  <label htmlFor="">Enter Password:</label>
                  <br />
                  <input type="password" placeholder="Password123" required />
                </div>

                <div className="form-input">
                  <label htmlFor="">Confirm Password:</label>
                  <br />
                  <input type="password" placeholder="Password123" required />
                </div>
                <div className="checkout-btn">
                  <button>Pay {car.price}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarRent;
