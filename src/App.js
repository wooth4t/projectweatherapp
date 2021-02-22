import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="external">
      <div className="container">
      <Weather />
      </div>
      <footer>
      <a href="https://github.com/wooth4t/projectweatherapp" target="_blank" rel="noreferrer">Open-Sourced on GitHub</a> by Ruth Kim
      </footer>
      </div>
    </div>
  );
}

