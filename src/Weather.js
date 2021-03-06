import React, {useState } from "react";
//import CurrentInfo from "./CurrentInfo";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }


function search() {
  const apiKey = "5dfba870a40b01cf133df877aa1ba73c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

  function handleSubmit(event) {
      event.preventDefault();
      search();
  }


  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="inner">    
            

          <div className="row">
          
              <div className="col-6 card-left">
                  <FormattedDate date={weatherData.date} />
                  <div className="row">
                      <div className="col-6"><img className="MainIcon" src={weatherData.iconUrl} alt={weatherData.description} /></div>
                      <div className="col-6 current">  
                          <WeatherTemperature celsius={weatherData.temperature} />
                          <ul>
                          <li className="text-capitalize">{weatherData.description}</li>
                          <li>Humidity {weatherData.humidity} %</li>
                          <li>Wind {Math.round(weatherData.wind)} km/h</li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div className="col-6 card-right">
                  <h1>{weatherData.city}</h1>
                  <Forecast city={weatherData.city} />
              </div>  

           </div>


        </div>

          <footer>
          <a href="https://github.com/wooth4t/projectweatherapp" target="_blank" rel="noreferrer" className="linkToGitHub">Open-Sourced on GitHub</a> by Ruth Kim
          </footer>

          <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9"><input type="search" placeholder="Enter city" className="form-control" autoFocus="on" onChange={handleCityChange}/></div>
            <div className="col-3"><input type="submit" value="Search" className="btn btn-primary" /></div>
          </div>
          </form>

        </div>
    );
} 
    
  else {
    search();
    return "Loading...";
  }
}