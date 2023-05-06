import React from "react";
import "./DayForeCast.css";
import {
  BsCloudRainHeavyFill,
  BsFillCloudHaze2Fill,
  BsCloudSnowFill,
  BsFillCloudFogFill,
  BsSun,
} from "react-icons/bs";
import { RiMistFill } from "react-icons/ri";
import { WiSmoke } from "react-icons/wi";
import {
  GiHeatHaze,
  GiDustCloud,
  GiSandstorm,
  GiSmokingVolcano,
  GiWindSlap,
  GiWhirlwind,
} from "react-icons/gi";
import { MdThunderstorm } from "react-icons/md";

function DayForeCast(props) {
  const weatherImage = (weather) => {
    if (weather === "Rain") {
      return <BsCloudRainHeavyFill />;
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
  return (
    <div className="DayForeCast">
      <header>24 Hours Forecast</header>
      <div className="dayforecast-holder">
        {props.oneDayData?.map((item, index) => {
          return (
            <div className="dayforecast-item" key={index}>
              <div className="day-time">{item.time}</div>
              <div className="day-weather">
                <p>{weatherImage(item.weather.main)}</p>
              </div>
              <div className="day-temp">{item.temp}°C</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DayForeCast;
