import React from "react";

export default function Forecast() {
  return (
    <div className="row row-col-4 no-gutters">
      <div className="col sun ">
        {" "}
        <img src="./sun.png" width="65px" alt="sun" />
      </div>
      <div className="col cloud">
        <img src="./cloud.png" width="65px" alt="cloud" />
      </div>
      <div className="col wind">
        <img src="./windy.png" width="65px" alt="windy" />
      </div>
      <div className="col rain">
        <img src="./rain.png" width="65px" alt="rain" />
      </div>
      <div className="col snow">
        <img src="./snow.png" width="65px" alt="snow" />
      </div>
      <div className="w-100"></div>
      <div className="col temp">66°</div>
      <div className="col temp">70°</div>
      <div className="col temp">77°</div>
      <div className="col temp">69°</div>
      <div className="col temp">40°</div>
      <div className="w-100"></div>
      <div className="col">Sunny</div>
      <div className="col">Cloudy</div>
      <div className="col">Windy</div>
      <div className="col">Rain</div>
      <div className="col">Snow</div>
      <div className="w-100"></div>
      <div className="col day">Mon</div>
      <div className="col day">Tue</div>
      <div className="col day">Wed</div>
      <div className="col day">Thu</div>
      <div className="col day">Fri</div>
    </div>
  );
}
