import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [city, Setcity] = useState("");
  let [message, SetMessage] = useState("");

  const now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];
  let hour = now.getHours();
  let minutes = now.getMinutes();
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  function defaultCity() {
    let apiKey = "e6088b89f99f2de149aacc51020dcb25";
    let weatherUrls = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(weatherUrls).then(displayWeather);
  }
  defaultCity("San Antonio");

  function displayWeather(response) {
    let weatherInfo = {
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    };

    SetMessage(
      <div className="message">
        <div>{city}</div>
        <div>
          Temperature: {Math.round(weatherInfo.temperature)}°F Description:{" "}
        </div>
        {weatherInfo.description}
        <div>
          <small>Humidity: {Math.round(weatherInfo.humidity)}</small>
        </div>
        <div>
          <small>Wind: {Math.round(weatherInfo.wind)} m/s</small>
        </div>
        <div>
          {" "}
          <img src={weatherInfo.icon} alt={weatherInfo.description} />
        </div>
      </div>
    );
  }

  function HandleSubmit(event) {
    event.preventDefault();
    let apiKey = "e6088b89f99f2de149aacc51020dcb25";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(displayWeather);
  }
  function ShowCity(event) {
    Setcity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input
          type="search"
          placeholder="Search by Location"
          className="Search"
          onChange={ShowCity}
        />
        <input type="submit" value="🔍" className="submit" />
      </form>
      <div className="align">
        <div>San Antonio, Tx</div>
        <span> {day} </span>{" "}
        <span>
          {hour}:{minutes}
        </span>
        <div>
          <strong> 65° F</strong>
        </div>
        <img src="./sun.png" width="65px" alt="sun" />
        <div>{message}</div>
      </div>
      <hr />
    </div>
  );
}
