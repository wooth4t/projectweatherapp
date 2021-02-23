import React, {useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "/",
      wind: response.data.wind.speed,
      city: response.data.name,

    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
         <div className="inner">    
          <div className="row">
          
          <div className="col-6 card-left">
              <FormattedDate date={weatherData.date} />
            
                <div className="row">
                <div className="col-6 icon"><img src={weatherData.iconUrl} alt={weatherData.description} /></div>
                <div className="col-6 current">
                    <h3>{Math.round(weatherData.temperature)}<span className="units"><a href="/" className="celsius">°C</a> | <a href="/" className="fahrenheit">°F</a></span></h3>
                    <ul>
                    <li className="text-capitalize">{weatherData.description}}</li>
                    <li>Humidity {weatherData.humidity} %</li>
                    <li>Wind {Math.round(weatherData.wind)} km/h</li>
                    </ul>
                </div>
                </div>
          </div>
          
          <div className="col-6 card-right">
            <h1>{weatherData.city}</h1>
          </div>          
        
        </div>
        </div>
          
          <footer>
          <a href="https://github.com/wooth4t/projectweatherapp" target="_blank" rel="noreferrer" className="linkToGitHub">Open-Sourced on GitHub</a> by Ruth Kim
          </footer>

          <form>
          <div className="row">
            <div className="col-9">
              <input type="search" placeholder="Enter city" className="form-control" autoFocus="on"/>
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
           </div>
          </form>

        </div>
    );
} 
    
  else {
  const apiKey = "5dfba870a40b01cf133df877aa1ba73c";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
  }
}