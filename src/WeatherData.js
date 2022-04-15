import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherData(props) {
  return (
    <div className="align">
      <div>
        <h1> {props.info.city}</h1>
        <FormattedDate date={props.info.date} />
        <div>
          <strong>
            {" "}
            {Math.round(props.info.temperature)}
            <a href="/">F°</a>
          </strong>
        </div>
        <div>{props.info.description}</div>
        <WeatherIcon code={props.info.icon} />
        <div className="windhum">
          {" "}
          Humidity:<span id="humi">{Math.round(props.info.humidity)}%</span>
        </div>
        <div className="windhum">
          Wind:<span id="windz">{Math.round(props.info.wind)} mph</span>
        </div>
      </div>
      <hr />
    </div>
  );
}
