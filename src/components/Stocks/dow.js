import React from "react"

var ticker = 'DIA';

class DIA extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        
        fetch('https://cloud.iexapis.com/stable/stock/' + ticker + '/quote?token=pk_e00d5ddab84a428993c8e04cb34b69f2')
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

        var DIAdata = items.changePercent;
        var DIApct = (DIAdata * 100);
        console.log(DIAdata);
        console.log(DIApct);

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else {
            var DIAyesterdayPrice = items.previousClose;
            var DIAtodayPrice = items.iexRealtimePrice;
            var DIAtotal = ('DIA CHANGES ' + DIAyesterdayPrice + ', ' + DIAtodayPrice);
            var DIAopen = items.isUSMarketOpen;
            console.log(DIAtotal);

            if (DIAopen === true) {
                if (DIAtodayPrice < DIAyesterdayPrice) {
                    return (
                        <p className="open">Dow <span className="stock-down">{DIApct.toFixed(2)}%</span></p>
                    );
                }
    
                else {
                    return (
                        <p className="open">Dow <span className="stock-up">{DIApct.toFixed(2)}%</span></p>
                    );
                }
            }

            else {
                if (DIAtodayPrice < DIAyesterdayPrice) {
                    return (
                        <p className="closed">Dow <span className="stock-down">{DIApct.toFixed(2)}%</span></p>
                    );
                }
    
                else {
                    return (
                        <p className="closed">Dow <span className="stock-up">{DIApct.toFixed(2)}%</span></p>
                    );
                }
            }
        }
    }

} 
export default DIA