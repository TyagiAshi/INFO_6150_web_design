import React, { useState, useEffect } from "react";
import WeatherData from "../../Components/Weather Data/WeatherData";
import TextField from "@material-ui/core/TextField";
import { useHistoryState } from "../../useHistroy";
var moment = require("moment");

function Today() {
  const [completeData, setCompleteData] = useState([]);
  const [dailyData, setDailyData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const [cityName, setCityName] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setDailyData(JSON.parse(localStorage.getItem("data")) || []);
    if (dailyData.length <= 0) refreshData();
  }, []);

  let display;
  if (completeData.length > 0 || hasError == false) {
    display = displayData();
  }
  function changeText(event) {
    setCityName(event.target.value);
  }

  function displayData() {
    return dailyData.map((reading, index) => (
      <WeatherData
        reading={reading}
        key={index}
        completeData={completeData}
        cityName={cityName}
      />
    ));
  }
  function refreshData() {
    const _url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&APPID=47c70100b87683e69e13226b327a531f`;
    fetch(_url)
      .then((res) => res.json())
      .then((data) => {
        const _data = data.list.filter((reading) =>
          reading.dt_txt.includes("00:00:00")
        );
        data.list.map(function (name) {
          let _date = new Date();
          const weekday = name.dt * 1000;
          _date.setTime(weekday);
          name.day = moment(_date).format("dddd");
        });

        setCompleteData(data.list);
        setHasError(false);
        setDailyData(_data);
        localStorage.setItem("data", JSON.stringify(_data));
        setDailyData(JSON.parse(localStorage.getItem("data")) || []);
      })
      .catch((err) => {
        setCompleteData([]);
        setHasError(true);
        setDailyData([]);
      });
  }
  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>

      <h2>The Weather Report : {cityName} </h2>
      <br />
      <br />
      <div>
        <TextField
          id="city-name"
          label="Enter City Name Here"
          value={cityName}
          onChange={changeText}
        />
        <br></br>
        {"     "}
        <input
          type="button"
          className="btn btn-warning mt-3"
          value="Get Weather Details"
          onClick={refreshData}
          disabled={cityName == 0}
        />
      </div>
      <br />
      <br />

      <br />

      <div>{display}</div>
      <br></br>
    </div>
    
  );
}

export default Today;
