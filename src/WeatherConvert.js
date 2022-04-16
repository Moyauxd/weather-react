import React, { useState } from "react";

export default function WeatherConvert(props) {
  let [unit, SetUnit] = useState("imperial");

  function ShowCel(event) {
    event.preventDefault();
    SetUnit("celcius");
  }

  function ShowFah(event) {
    event.preventDefault();
    SetUnit("imperial");
  }

  if (unit === "imperial") {
    return (
      <div>
        <span>{Math.round(props.Fahrenheit)}</span>
        <span>
          °F |{" "}
          <a href="/" onClick={ShowCel}>
            °C{" "}
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span>{Math.round(props.Fahrenheit - 32 - 5 / 9)}</span>
        <span>
          <a href="/" onClick={ShowFah}>
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
