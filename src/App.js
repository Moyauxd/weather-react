import "./App.css";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";

function App() {
  return (
    <div className="container">
      <div>
        <Weather defaultCity="San Antonio" />
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
    </div>
  );
}

export default App;
