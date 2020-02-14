import React from "react"
import Sunny from "../../images/new-weather/sunny.svg"
import PartlyCloudy from "../../images/new-weather/partly-coudy.svg"
import Fog from "../../images/new-weather/fog.svg"
import Mist from "../../images/new-weather/mist.svg"

import NEEDICON from "../../images/weather/NEEDWEATHER.svg"

class WeatherForecast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('http://api.weatherstack.com/current?%20access_key=89f1d38643f64d8e2b0a79b0a09f9f7d&query=San%20Diego')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    weather: json,
                })
            });
    }

    render() {

        var { isLoaded, weather } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else {
            console.log(weather);

            if(weather.current.weather_descriptions[0] === "Sunny")  {
                return (
                    <>
                    <p className="weather-forecast"><Sunny /> {weather.current.temperature}&deg;C</p>
                    <p className="weather-location">{weather.location.name}, {weather.location.region}</p>
                    </>
                );
            }
            else if(weather.current.weather_descriptions[0] === "Patchy Fog") {
                return (
                    <>
                    <p className="weather-forecast"><Fog /> {weather.current.temperature}&deg;C</p>
                    <p className="weather-location">{weather.location.name}, {weather.location.region}</p>
                    </>
                );
            }
            else if(weather.current.weather_descriptions[0] === "Mist") {
                return (
                    <>
                    <p className="weather-forecast"><Mist /> {weather.current.temperature}&deg;C</p>
                    <p className="weather-location">{weather.location.name}, {weather.location.region}</p>
                    </>
                );
            }
            else if(weather.current.weather_descriptions[0] === "Partly cloudy") {
                return (
                    <>
                    <p className="weather-forecast"><PartlyCloudy /> {weather.current.temperature}&deg;C</p>
                    <p className="weather-location">{weather.location.name}, {weather.location.region}</p>
                    </>
                );
            }
            else {
                console.log(weather.current.weather_descriptions[0]);
                return (
                    <>
                    <p className="weather-forecast"><NEEDICON /> {weather.current.temperature}&deg;C</p>
                    <p className="weather-location">{weather.location.name}, {weather.location.region}</p>
                    </>
                );
            }
        }
    }

} 
export default WeatherForecast