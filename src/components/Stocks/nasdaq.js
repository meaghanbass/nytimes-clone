import React from "react"

var ticker = 'NDAQ';

class NDAQ extends React.Component {

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

        // console.log('Price: ' + items.iexRealtimePrice + ', ' + 'Percent Change: ' + items.changePercent);

        var NASDAQdata = items.changePercent;
        var NASDAQ = (NASDAQdata * 100);
        console.log(NASDAQdata);
        console.log(NASDAQ);

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else {
            var NASDAQyesterdayPrice = items.previousClose;
            var NASDAQtodayPrice = items.iexRealtimePrice;
            var NASDAQtotal = ('NASDAQ CHANGES ' + NASDAQyesterdayPrice + ', ' + NASDAQtodayPrice);
            console.log(NASDAQtotal);

            if (NASDAQtodayPrice < NASDAQyesterdayPrice) {
                return (
                    <p>Nasdaq <span className="stock-down">{NASDAQ.toFixed(2)}%</span></p>
                );
            }

            else {
                return (
                    <p>Nasdaq <span className="stock-up">{NASDAQ.toFixed(2)}%</span></p>
                );
            }
        }
    }

} 
export default NDAQ