import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherSearchEngine(props) {
  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  function updateQuery(event) {
    setCity(event.target.value);
  }
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    console.log(response.data);
  }

  return (
    <div className="container">
      <div className="WeatherSearchEngine">
        <div className="WeatherDetails">
          <form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Enter the city..."
              onChange={updateQuery}
              className="searchBox"
            />
            <input type="submit" value="Search" className="searchButton" />
            <input type="submit" value="Current" className="currentCity" />
          </form>
          <div className="weather-details">
            <h1>{city}</h1>
            <div className="dayTime">Monday 16:00</div>
            <div className="description">Clear Day</div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="weather-icon">
                {" "}
                <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color="black"
                  size="30"
                  animate="true"
                />
              </div>
              <div className="today-temp">{Math.round(temperature)}</div>
              <div className="temp-unit">°C</div>
            </div>
            <div className="col-sm-6">
              <ul>
                <li>Humidity: {humidity}%</li>
                <li>Wind: {wind} km/h</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <div className="foecaste_day">Tue</div>
              <div className="icon">
                <ReactAnimatedWeather
                  icon="CLOUDY"
                  color="black"
                  size="20"
                  animate="true"
                />
              </div>
              <div className="forecast_temp">6°</div>
            </div>
            <div className="col-sm-2">
              <div className="foecaste_day">Wed</div>
              <div className="icon">
                <ReactAnimatedWeather
                  icon="PARTLY_CLOUDY_DAY"
                  color="black"
                  size="20"
                  animate="true"
                />
              </div>
              <div className="forecast_temp">12°</div>
            </div>
            <div className="col-sm-2">
              <div className="foecaste_day">Thur</div>
              <div className="icon">
                <ReactAnimatedWeather
                  icon="RAIN"
                  color="black"
                  size="20"
                  animate="true"
                />
              </div>
              <div className="forecast_temp">15°</div>
            </div>
            <div className="col-sm-2">
              <div className="foecaste_day">Fri</div>
              <div className="icon">
                <ReactAnimatedWeather
                  icon="SLEET"
                  color="black"
                  size="20"
                  animate="true"
                />
              </div>
              <div className="forecast_temp">13°</div>
            </div>
            <div className="col-sm-2">
              <div className="foecaste_day">Sat</div>
              <div className="icon">
                <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color="SNOW"
                  size="20"
                  animate="true"
                />
              </div>
              <div className="forecast_temp">20°</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
