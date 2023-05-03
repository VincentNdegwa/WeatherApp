import React from "react";
import "./CenterMain.css";
import {
  // BsCloudRainHeavyFill,
  // BsFillCloudHaze2Fill,
  // BsCloudSnowFill,
  // BsFillCloudFogFill,
  // BsSun,
  // BsDropletHalf,
  // BsWind,
  // BsThermometer,
  BsCloudRainHeavyFill,
  BsFillCloudHaze2Fill,
  BsCloudSnowFill,
  BsFillCloudFogFill,
  BsSun,
} from "react-icons/bs";
import { RiMistFill } from "react-icons/ri";
import { WiSmoke } from "react-icons/wi";
import { FiDroplet, FiWind, FiThermometer } from "react-icons/fi";
import {
  GiHeatHaze,
  GiDustCloud,
  GiSandstorm,
  GiSmokingVolcano,
  GiWindSlap,
  GiWhirlwind,
} from "react-icons/gi";
import { MdThunderstorm } from "react-icons/md";
import { RiTimerFill } from "react-icons/ri";

function CenterMain(props) {
  const city = props.currentData?.name;
  const weather = props.currentData?.weather[0]?.main;
  const weatherDesc = props.currentData?.weather[0]?.description;
  const temp = props.currentData?.main?.temp;
  const pressure = props.currentData?.main?.pressure;
  const humidity = props.currentData?.main?.humidity;
  const wind = props.currentData?.wind?.speed;
  const [userCity, setUserCity] = React.useState("");
  const weatherImage = () => {
    if (weather === "Rain") {
      return <BsCloudRainHeavyFill style={{ color: "#87ceeb" }} />;
    } else if (weather === "Clouds") {
      return <BsFillCloudHaze2Fill style={{ color: "#F0F0F0" }} />;
    } else if (weather === "Snow") {
      return <BsCloudSnowFill />;
    } else if (weather === "Mist") {
      return <RiMistFill />;
    } else if (weather === "Smoke") {
      return <WiSmoke />;
    } else if (weather === "Haze") {
      return <GiHeatHaze />;
    } else if (weather === "Dust") {
      return <GiDustCloud />;
    } else if (weather === "Fog") {
      return <BsFillCloudFogFill />;
    } else if (weather === "Sand") {
      return <GiSandstorm />;
    } else if (weather === "Ash") {
      return <GiSmokingVolcano />;
    } else if (weather === "Squall") {
      return <GiWindSlap />;
    } else if (weather === "Tornado") {
      return <GiWhirlwind />;
    } else if (weather === "Clear") {
      return <BsSun style={{ color: "#FFA500" }} />;
    } else if (weather === "Thunderstorm") {
      return <MdThunderstorm />;
    } else {
      return (
        <img
          src={`https://openweathermap.org/img/wn/${props.currentData.weather.icon}.png`}
          alt=""
          width="100px"
          height="100px"
        />
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userCity);
    props.setUserInput(userCity);
    console.log(props.userInput);
  };

  return (
    <div className="CenterMain">
      <div className="centermain-container">
        <form onSubmit={handleSubmit} className="centermain-input">
          <input
            type="text"
            placeholder="City Name"
            onChange={(e) => setUserCity(e.target.value)}
            required
          />
          <button type="submit">Search</button>
        </form>

        <section className="centermain-display">
          <div className="display-item1">
            <div className="display-weather-details">
              <div className="display-city">
                <h1>{city}</h1>
                <h2>{weather}</h2>
                <p>{weatherDesc}</p>
              </div>
              <div className="display-temp">
                <h1>{temp}°C</h1>
              </div>
            </div>
          </div>

          <div className="display-item2">
            <div className="display-weather-details-right">
              <div className="display-weather">{weatherImage()}</div>
            </div>
          </div>
        </section>
        <section className="centermain-weather">
          <div className="weather-header">Weather Condition</div>
          <div className="weather-holder">
            {/* items start */}
            <div className="weather-item">
              <div className="weather-icon">
                <RiTimerFill />
              </div>
              <div className="weather-info">
                <div className="item-info">pressure</div>
                <div className="item-info2">{pressure}hPa</div>
              </div>
            </div>

            <div className="weather-item">
              <div className="weather-icon">
                <FiDroplet />
              </div>
              <div className="weather-info">
                <div className="item-info">humidity</div>
                <div className="item-info2">{humidity}%</div>
              </div>
            </div>

            <div className="weather-item">
              <div className="weather-icon">
                <FiWind />
              </div>
              <div className="weather-info">
                <div className="item-info">wind</div>
                <div className="item-info2">{wind}m/s</div>
              </div>
            </div>

            <div className="weather-item">
              <div className="weather-icon">
                <FiThermometer />
              </div>
              <div className="weather-info">
                <div className="item-info">temp</div>
                <div className="item-info2">{temp}°C</div>
              </div>
            </div>
            {/* items end */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CenterMain;
