import "./App.css";
import Weather from "./Weather.js";


function App() {
  return (
    <div className="container">
      <div>
        <Weather defaultCity="San Antonio" />
      
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
