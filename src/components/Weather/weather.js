import React from "react"
import WeatherLocation from "./weather-location"
import WeatherForecast from "./weather-forecast"

class Weather extends React.Component {

    render() {
        return (
            <>  
                <WeatherForecast />
                <WeatherLocation />
            </>
        )
    }

} 
export default Weather