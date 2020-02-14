import React from "react"

var ticker = 'SPY';

class SPY extends React.Component {

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

        var SPYdata = items.changePercent;
        var SPYpct = (SPYdata * 100);
        console.log(SPYdata);
        console.log(SPYpct);

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else {
            var SPYyesterdayPrice = items.previousClose;
            var SPYtodayPrice = items.iexRealtimePrice;
            var SPYtotal = ('SPY CHANGES ' + SPYyesterdayPrice + ', ' + SPYtodayPrice);
            var SPYopen = items.isUSMarketOpen;
            console.log(SPYtotal);

            if (SPYopen === true) {
                if (SPYtodayPrice < SPYyesterdayPrice) {
                    return (
                        <p className="open">SPY <span className="stock-down">{SPYpct.toFixed(2)}%</span></p>
                    );
                }
    
                else {
                    return (
                        <p className="open">SPY <span className="stock-up">{SPYpct.toFixed(2)}%</span></p>
                    );
                }
            }

            else {
                if (SPYtodayPrice < SPYyesterdayPrice) {
                    return (
                        <p className="closed">SPY <span className="stock-down">{SPYpct.toFixed(2)}%</span></p>
                    );
                }
    
                else {
                    return (
                        <p className="closed">SPY <span className="stock-up">{SPYpct.toFixed(2)}%</span></p>
                    );
                }
            }
        }
    }

} 
export default SPY