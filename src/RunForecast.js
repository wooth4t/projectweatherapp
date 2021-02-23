import React from "react";

export default function RunForecast(props) {
  return (
   <div className="RunForecast">
     <div className="row">
	  	<span className="col-4 MiniTime">{new Date(props.data.dt * 1000).getHours()}:00</span>
		  <span className="col-4 MiniIcon">{props.data.weather[0].icon}</span>
		  <span className="col-4 MiniTemperature">{Math.round(props.data.main.temp)} °C</span>
      </div>
	  </div>
  )
}