import React from "react";

export default function WeatherInfo(props) {
  const codeMapping = {
    "01d": <img src="./sun.png" width="65px" alt="sun" />,
    "01n": <img src="./new-moon.png" width="65px" alt="moon" />,
    "02d": <img src="./cloud.png" width="65px" alt="cloud" />,
    "02n": <img src="./moon.png" width="65px" alt="moon" />,
    "03d": <img src="./cloud.png" width="65px" alt="cloud" />,
    "03n": <img src="./moon.png" width="65px" alt="moon" />,
    "04d": <img src="./cloudy.png" width="65px" alt="cloudy" />,
    "04n": <img src="./cloud.png" width="65px" alt="cloudy" />,
    "09d": <img src="./rain.png" width="65px" alt="rain" />,
    "09n": <img src="./rain.png" width="65px" alt="rain" />,
    "10d": <img src="./rain.png" width="65px" alt="rain" />,
    "10n": <img src="./rain.png" width="65px" alt="rain" />,
    "11d": <img src="./storm.png" width="65px" alt="storm" />,
    "11n": <img src="./storm.png" width="65px" alt="storm" />,
    "13d": <img src="./snow.png" width="65px" alt="snow" />,
    "13n": <img src="./snow.png" width="65px" alt="snow" />,
    "50d": <img src="./foggy.png" width="65px" alt="fog" />,
    "50n": <img src="./foggy.png" width="65px" alt="fog" />,
  };

  return <div>{codeMapping[props.code]}</div>;
}
