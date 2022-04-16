import React, { useState } from "react";
import "./Weather.css";

export default function WeatherConvert(props) {
  let [unit, SetUnit] = useState("fahrenheit");

  function ShowCel(event) {
    event.preventDefault();
    SetUnit("celcius");
  }

  function ShowFah(event) {
    event.preventDefault();
    SetUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div>
        <span className="conTempr">{Math.round(props.fahrenheit)}</span>
        <span className="TemperatureCon">
          °F |{" "}
          <a href={"/"} onClick={ShowCel}>
            °C{" "}
          </a>
        </span>
      </div>
    );
  } else {
    let celcius = props.fahrenheit - 32 - 5 / 9;
    return (
      <div c>
        <span className="conTempr">{Math.round(celcius)}</span>
        <span className="TemperatureCon">
          <a href={"#"} onClick={ShowFah}>
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
