import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <WeatherIcon code={props.data.weather[0].icon} /> <br />
      <div className="dailyTemp">
        <span>{maxTemp()}</span>/<span>{minTemp()}</span>
        <br />
        <div>{props.data.weather[0].description}</div>
      </div>
      <div>
        <strong>{day()}</strong>
      </div>
    </div>
  );
}
