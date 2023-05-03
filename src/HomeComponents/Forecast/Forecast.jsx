import React from "react";
import "./Forecast.css";
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

function Forecast(props) {
  const forecastData = props.foreCastData;
  const [DaysData, setDaysData] = React.useState([]);

  React.useEffect(() => {
    let Day1 = forecastData[0]?.dt;
    let selectedData = [];
    forecastData?.map((item) => {
      if (item.dt === Day1) {
        selectedData.push(item);
        Day1 += 86400;
        return false;
      } else {
        return true;
      }
    });
    setDaysData(selectedData);
  }, [forecastData]);
  console.log(DaysData);
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
    <div className="Forecast">
      <div className="forecast-container">
        <div className="forecast-header">
          five day forecast
          <div className="error-notify">
            {props.failedFetch ? "network error" : ""}
          </div>
        </div>
        <div className="forecast-items-holder">
          {DaysData.map((item, index) => {
            const date = new Date(item.dt * 1000);
            const dayOfWeek = date.toLocaleDateString("en-US", {
              weekday: "long",
            });
            const dateString =
              date.getDate() === new Date().getDate() ? "Today" : dayOfWeek;

            return (
              <div className="forecast-item" key={index}>
                <div className="forecast-date">{dateString}</div>
                <div className="forecast-weather">
                  <h2>{weatherImage(item.weather[0].main)}</h2>

                  {item.weather[0].main}
                </div>
                <div className="forecast-temp">{item.main.temp}°C</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Forecast;
