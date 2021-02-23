import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function CurrentInfo(props) {
    return (
        <div className="row">
          
          <div className="col-6 card-left">
              <FormattedDate date={props.data.date} />
            
                <div className="row">
                <div className="col-6 icon"><img src={props.data.iconUrl} alt={props.data.description} /></div>
                <div className="col-6 current">
                    <WeatherTemperature celsius={props.data.temperature} />
                    
                    <ul>
                    <li className="text-capitalize">{props.data.description}</li>
                    <li>Humidity {props.data.humidity} %</li>
                    <li>Wind {Math.round(props.data.wind)} km/h</li>
                    </ul>
                </div>
                </div>
          </div>
          
          <div className="col-6 card-right">
            <h1>{props.data.city}</h1>
          </div>          
        
        </div>
    );
}