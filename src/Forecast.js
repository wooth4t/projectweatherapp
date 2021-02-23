import React, { useState } from "react";
//import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecastResponse(response) {
			setForecast(response.data);
			console.log(response.data);
        setLoaded(true);
			}

			
			if (loaded) {
				return (
					<div className="Forecast">
					<div className="row">
						<span className="col-4 MiniTime">{new Date(forecast.list[0].dt * 1000).getHours()}:00</span>
						<span className="col-4 MiniIcon">{forecast.list[0].weather[0].icon}</span>
						<span className="col 4 MiniTemperature">{Math.round(forecast.list[0].main.temp)} °C</span>
					</div>
				</div>
				);
    } else {
    let apiKey = "5dfba870a40b01cf133df877aa1ba73c";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    
    return null;
    }   
}