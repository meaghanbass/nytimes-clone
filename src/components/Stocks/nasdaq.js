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
        var NASDAQdata = items.changePercent;
        var NASDAQpct = (NASDAQdata * 100);
        var NASDAQopen = items.isUSMarketOpen;
        console.log(NASDAQdata);
        console.log(NASDAQpct);

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else {
            var NASDAQyesterdayPrice = items.previousClose;
            var NASDAQtodayPrice = items.iexRealtimePrice;
            var NASDAQtotal = ('NASDAQ CHANGES ' + NASDAQyesterdayPrice + ', ' + NASDAQtodayPrice);
            console.log(NASDAQtotal);

            if (NASDAQopen === true) {
                if (NASDAQtodayPrice < NASDAQyesterdayPrice) {
                    return (
                        <p className="open">Nasdaq <span className="stock-down">{NASDAQpct.toFixed(2)}%</span></p>
                    );
                }
    
                else {
                    return (
                        <p className="open">Nasdaq <span className="stock-up">{NASDAQpct.toFixed(2)}%</span></p>
                    );
                }
            }

            else {
                if (NASDAQtodayPrice < NASDAQyesterdayPrice) {
                    return (
                        <p className="closed">Nasdaq <span className="stock-down">{NASDAQpct.toFixed(2)}%</span></p>
                    );
                }
    
                else {
                    return (
                        <p className="closed">Nasdaq <span className="stock-up">{NASDAQpct.toFixed(2)}%</span></p>
                    );
                }
            }
        }
    }

} 
export default NDAQ