import React from "react";
import { WiDaySunny } from 'weather-icons-react';

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "WiDaySunny",
    "01n": "WiMoonFull",
    "02d": "WiDayCloudy",
    "02n": "WiNightCloudy",
    "03d": "WiCloud",
    "03n": "WiCloud",
    "04d": "WiCloudy",
    "04n": "WiCloudy",
    "09d": "WiDayShowers",
    "09n": "WiNightShowers",
    "10d": "WiDayRain",
    "10n": "WiNightRain",
    "11d": "WiDayThunderstorm",
    "11n": "WiNightThunderstorm",
    "13d": "WiDaySnow",
    "13n": "WiNightSnow",
    "50d": "WiFog",
    "50n": "WiFog"
  };


  return (
    <WiDaySunny 
    size={64} 
     color='#000' 
     alt={props.alt}
    />
    );
}