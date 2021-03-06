import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";

export default function WeatherInfo(props) {
  const [city, Setcity] = useState(props.defaultCity);
  const [weatherData, SetWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    SetWeatherData({
      ready: true,
      coord: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function Search() {
    let apiKey = "9f6f50a66dc71bc0ef80ae63daf439c6";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(displayWeather);
  }

  function HandleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function ShowCity(event) {
    Setcity(event.target.value);
  }
  function getPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentPos);
  }
  function currentPos(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let apiKey = "9f6f50a66dc71bc0ef80ae63daf439c6";
    let coordsUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;

    axios.get(coordsUrl).then(displayWeather);
  }
  if (weatherData.ready) {
    return (
      <div>
        <div>
          <form onSubmit={HandleSubmit}>
            <input
              type="search"
              placeholder="Search by Location"
              className="Search"
              onChange={ShowCity}
            />
            <input type="submit" value="🔍" className="submit" autoFocus />
          </form>
          <WeatherData info={weatherData} />
        </div>
        <div className="align">
          <div>
            <button className="navi" id="navig" onClick={getPosition}>
              <img src="./location.png" alt="locator" width="15px" />
            </button>
            <div>
              {" "}
              <Forecast coords={weatherData.coord} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    Search();
    return <h2> Searching</h2>;
  }
}
