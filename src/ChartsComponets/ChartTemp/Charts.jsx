import React from "react";
import "./Chart.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import DayForeCast from "../DayForeCast/DayForeCast";
// import moment from "moment-timezone";
// import { DateTime } from "luxon";

function Charts(props) {
  const [startTime, setStarttime] = React.useState();
  const [endTime, setEndTime] = React.useState();
  const [todayTemp, setTodayTemp] = React.useState();
  const [oneDayData, setOneDayData] = React.useState();
  const [currentData, setCurrentData] = React.useState();

  React.useEffect(() => {
    let currentTime = new Date();
    const year = currentTime.getFullYear();
    const month = String(currentTime.getMonth() + 1).padStart(2, "0");
    const day = String(currentTime.getDate()).padStart(2, "0");
    const formatedTime = year + "-" + month + "-" + day;
    const lastTime =
      year +
      "-" +
      month +
      "-" +
      String(currentTime.getDate() + 1).padStart(2, "0");
    setStarttime(`${formatedTime} 00:00:00`);
    setEndTime(`${lastTime} 00:00:00`);
    const tempData = props.foreCastData
      .filter((item) => item.dt_txt >= startTime && item.dt_txt < endTime)
      .map((item) => {
        return { temp: item.main.temp, time: item.dt_txt.split(" ")[1] };
      });

    setTodayTemp(tempData);
    setOneDayData(
      props.foreCastData.slice(0, 9).map((item) => {
        return {
          temp: item.main.temp,
          humidity: item.main.humidity,
          speed: item.wind.speed,
          time: item.dt_txt.split(" ")[1],
          weather: item.weather[0],
        };
      })
    );
    setCurrentData(props.currentData);
  }, [props.foreCastData]);

  const convert = () => {
    // sunrise
    const sunriseTimestamp = props.currentData?.sys?.sunrise;
    const offset = props.currentData?.timezone / 3600;
    const sunrisedate = new Date(sunriseTimestamp * 1000);
    const sunriseUtcTime =
      sunrisedate.getTime() +
      sunrisedate.getTimezoneOffset() * 60000 +
      offset * 3600000;
    const sunriseSunTime = new Date(sunriseUtcTime);
    const sunriseTimeString = sunriseSunTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // sunset
    const sunsetTimestamp = props.currentData?.sys?.sunset;
    const sunsetDate = new Date(sunsetTimestamp * 1000);
    const sunsetUtcTime =
      sunsetDate.getTime() +
      sunsetDate.getTimezoneOffset() * 60000 +
      offset * 3600000;
    const sunsetTime = new Date(sunsetUtcTime);
    const sunsetTimeString = sunsetTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // current-time
    const myCurrentTimestamp = props.currentData?.dt;
    const myCurrentDate = new Date(myCurrentTimestamp * 1000);
    const myCurrentUtcTime =
      myCurrentDate.getTime() +
      myCurrentDate.getTimezoneOffset() * 60000 +
      offset * 3600000;
    const myCurrentTime = new Date(myCurrentUtcTime);
    const myCurrentTimeString = myCurrentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    console.log(myCurrentTimeString);

    const sunDiff = sunsetTimestamp - sunriseTimestamp;
    const HoursDiff = Math.round(sunDiff / 3600);
    const minuteDiff = Math.round((sunDiff % 3600) / 60);
    console.log(HoursDiff + ":" + minuteDiff);

    // console.log(timeString);
    // const currentTime = locaionTime;
    // const currentDate = new Date(currentTime * 1000);
    // const newUTCtime =
    //   currentDate.getTime() +
    //   currentDate.getTimezoneOffset() * 60000 +
    //   offset * 1000;
    // const userTime = new Date(newUTCtime);
    // const exactTime = userTime.toLocaleTimeString([], {
    //   hour: "2-digit",
    //   minute: "2-digit",
    // });

    return (
      <div className="sun-details">
        <div className="sunrise">
          <h2>Sunrise</h2>
          <div className="sunrise-item">{sunriseTimeString}</div>
        </div>
        <div className="sunset">
          <h2>Sunset</h2>
          <div className="sunset-item">{sunsetTimeString}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="Charts">
      <div className="dayforecast-container">
        <DayForeCast oneDayData={oneDayData} />
      </div>

      <div className="temp-chart">
        <h2>Temp Analysis</h2>
        <ResponsiveContainer width="50%" height={300}>
          <AreaChart
            width={500}
            height={200}
            data={oneDayData}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="temp"
              stroke="#8884d8"
              fill="#87ceeb"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      {convert()}
    </div>
  );
}

export default Charts;
