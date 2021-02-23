import React, { useState } from "react";
//import WeatherIcon from "./WeatherIcon";
import RunForecast from "./RunForecast";
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
						<div className="forecast-container">
						<RunForecast data={forecast.list[0]}/>
						<RunForecast data={forecast.list[1]}/>
						<RunForecast data={forecast.list[2]}/>
						<RunForecast data={forecast.list[3]}/>
						<RunForecast data={forecast.list[4]}/>
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