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
function Charts(props) {
  const [startTime, setStarttime] = React.useState();
  const [endTime, setEndTime] = React.useState();
  const [todayTemp, setTodayTemp] = React.useState();
  const [oneDayData, setOneDayData] = React.useState();

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
  }, []);
  console.log(oneDayData);
  //   console.log(todayTemp);

  return (
    <div className="Charts">
      <DayForeCast oneDayData={oneDayData} />
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
            {/* <CartesianGrid strokeDasharray="4 4" /> */}
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
    </div>
  );
}

export default Charts;
