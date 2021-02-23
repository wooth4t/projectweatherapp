import React from "react";

export default function FormattedDate(props) {
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let day = days[props.date.getDay()];
    let months = [
     "Jan",
     "Feb",
     "Ma",
     "Apr",
     "May",
     "Jun",
     "Jul",
     "Aug",
     "Sept",
     "Oct",
     "Nov",
     "Dec",
    ];
    let month = months[props.date.getMonth()];
    let date = props.date.getDate();
    let year = props.date.getFullYear();
    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    
    return (
    <div>
        <h1>{day} {month} {date}, {year}</h1>
        <h2>Last updated {hours}:{minutes}</h2>
    </div>);
}