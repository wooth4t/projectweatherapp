import React from "react";

import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <div className="row">
            
            <div className="col-6">
              <h1>MON Feb 22, 2021</h1>
              <h2>1642</h2>
                    
            <div className="row">
            <div className="col-5">Icon</div>
            <div className="col-7">
              <h3>3°C</h3>
              <ul>
              <li>Overcast Clouds</li>
              <li>Humidity 81 %</li>
              <li>Wind 6km/h</li>
              </ul>
            </div>
            </div>
            </div>
        
            <div className="col-6">
              <h1>Toronto</h1>
            </div>
        
            </div>
        </div>
    );
}