import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />

        
        <footer>
          Coded by 👩🏽‍💻 {" "}
          <a href= "https://www.linkedin.com/in/maryluz-mendez-vargas-bbb23824/"
          target="_blank"
          rel="noreferrer">
          Maryluz Mendez Vargas
          </a> {" "}
          and is Open-sourced on {" "}
          <a href="https://github.com/maryluzmeva/react-weather"
          target="_blank"
          rel="noreferrer"> 
          GitHub </a>
        </footer>
      </div>
    </div>
  );
}


