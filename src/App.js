import "./App.css";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";
import Locator from "./Locator";

function App() {
  return (
    <div>
      <Weather />
      <Locator />
      <Forecast />
      <div id="foot">
        <small>
          <a href="https://github.com/Moyauxd/weather-react">
            Open-source code
          </a>
          Coded by Moya Rose
        </small>
      </div>
    </div>
  );
}

export default App;
