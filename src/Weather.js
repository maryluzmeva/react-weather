import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props) {

    let [weather, setWeather] = useState({ ready: false });
    let [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {

        setWeather({
            ready: true,
            coordinates: response.data.coordinates,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            city: response.data.city,
            date: new Date(response.data.time * 1000),
            description: response.data.condition.description,
            icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
        });
    }

    function search() {
        let apiKey = "c71f439f65td859373faeeba102o0222";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }


    if (weather.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Type a City..." className="form-control"
                                onChange={handleCityChange} />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weather} />
                <WeatherForecast coordinates={weather.coordinates} />
            </div>);
    } else {
        search()
        return "Loading..."
    }
} 