import React from "react"

// var ticker = 'NDAQ';

class WeatherLocation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://api.weather.gov/points/32.7167,-117.1661')
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
            console.log(items.properties.relativeLocation.properties.city);
            return (
                <p className="weather-location">{items.properties.relativeLocation.properties.city}, {items.properties.relativeLocation.properties.state}</p>
            );
        }
    }

} 
export default WeatherLocation