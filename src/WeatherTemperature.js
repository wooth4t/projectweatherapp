import React, { useState } from "react";

export default function WeatherTemeprature(props) {
	const [unit, setUnit] = useState("celsius");
	
	function showFahrenheit(event) {
		event.preventDefault();
		setUnit("fahrenheit");
	}

	function showCelsius(event) {
		event.preventDefault();
		setUnit("celsius");
	}
	
	function fahrenheit() {
		return (props.celsius * 9)/5 + 32;
	}

	if (unit === "celsius") {
	return (
		<div className="WeatherTemperature">
			<h3>{Math.round(props.celsius)}
        <span className="units">°C | <a href="/" onClick={showFahrenheit}>°F</a></span>
      </h3>
		</div>
    )
		
	}
else {
	return (
		<div className="WeatherTemperature">
			<h3>{Math.round(fahrenheit())}
        <span className="units"><a href="/" onClick={showCelsius}>°C</a> | °F</span>
      </h3>
		</div>
    )
		
}
}