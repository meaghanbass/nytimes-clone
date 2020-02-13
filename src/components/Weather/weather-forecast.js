import React from "react"
import SunnyIcon from "../../images/sunny.svg"

class WeatherForecast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://api.weather.gov/gridpoints/SGX/55,13/forecast')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else {
            console.log(items);
            console.log(items.properties.generatedAt);
            console.log(items.properties.periods[0].detailedForecast);

            if(items.properties.periods[0].shortForecast === "Sunny")  {
                return (
                    <p className="weather-forecast"><SunnyIcon /> {items.properties.periods[0].temperature}&deg;F</p>
                );
            }
            else {
                return (
                    <p className="weather-forecast">{items.properties.periods[0].temperature}&deg;F</p>
                );
            }
            // return (
            //     <p className="weather-forecast">{items.properties.periods[0].temperature}&deg;F</p>
            // );
        }
    }

} 
export default WeatherForecast