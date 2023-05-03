import React from "react";
import Navbar from "./HomeComponents/Navbar/Navbar";
import CenterMain from "./HomeComponents/CenterMain/CenterMain";
import Forecast from "./HomeComponents/Forecast/Forecast";
import ForeData from "./HomeComponents/Data/ForeCastData";
import CurrentData from "./HomeComponents/Data/CurrentData";

function Main() {
  const [foreCastData, setForeCastData] = React.useState(ForeData?.list); //
  const [currentData, setCurrentData] = React.useState(CurrentData);
  const [userInput, setUserInput] = React.useState("kirinyaga");
  const [failedFetch, setFailedFetch] = React.useState(false);
  // React.useEffect(() => {
  //   setForeCastData(ForeData?.list);
  //   setCurrentData(CurrentData);
  // }, []);
  React.useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=1be21ce2f51b54b9644249a8d1817e6a&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === "404") {
          setUserInput("Nairobi");
          console.log("city not availlable");
        } else if (data.cod === "200") {
          console.log("success");
          setForeCastData(data?.list);
        } else {
          console.log("not successfull");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=1be21ce2f51b54b9644249a8d1817e6a&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === "404") {
          setUserInput("Nairobi");
          console.log("city not availlable");
        } else if (data.cod === 200) {
          console.log("success");
          setCurrentData(data);
        } else {
          console.log("not successfull");
        }
      })
      .catch((err) => {
        setFailedFetch(true);
        console.log(err);
      });
  }, [userInput]);

  return (
    <div className="home">
      <Navbar />
      <div className="Main">
        <CenterMain
          foreCastData={foreCastData}
          currentData={currentData}
          userInput={userInput}
          setUserInput={setUserInput}
        />
        <Forecast
          foreCastData={foreCastData}
          currentData={currentData}
          failedFetch={failedFetch}
        />
      </div>
    </div>
  );
}

export default Main;
