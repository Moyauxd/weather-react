import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay.js";

export default function Forecast(props) {
  let [loaded, Setloaded] = useState(false);
  let [forecast, SetForecast] = useState("");

  function HandleResponse(response) {
    SetForecast(response.data.daily);
    Setloaded(true);
  }
  useEffect(() => {
    Setloaded(false);
  }, [props.coords]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6)
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let lat = props.coords.lat;
    let long = props.coords.lon;
    let apiKey = "9f6f50a66dc71bc0ef80ae63daf439c6";
    let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;
    axios.get(forecastUrl).then(HandleResponse);
  }
  return null;
}
