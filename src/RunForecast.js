import React from "react";

import "./RunForecast.css";

export default function RunForecast(props) {
  return (
   <div className="RunForecast">
     <div className="row">
	  	<span className="col-4 MiniTime">
        {new Date(props.data.dt * 1000).getHours()}:00
      </span>
		  <span className="col-4 MiniIcon">
        <img 
          className="icon" 
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt={props.data.weather[0].description} 
        />
      </span>
		  <span className="col-4 MiniTemperature">{Math.round(props.data.main.temp)} °C</span>
      </div>
	  </div>
  );
}