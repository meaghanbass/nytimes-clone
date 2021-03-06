import React from "react"
import SPY from "./sp500"
import DIA from "./dow"
import NDAQ from "./nasdaq"

// Look here for more tickers: https://cloud.iexapis.com/beta/ref-data/symbols?token=pk_e00d5ddab84a428993c8e04cb34b69f2

// class StockQuotes extends React.Component {

//     render() {
//         return (
            // <>
            //     <SPY />
            //     <DIA />
            //     <NDAQ />
            // </>
//         )
//     }

// } 
// export default StockQuotes


class StockQuotes extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         items: [],
    //         isLoaded: false,
    //     }
    // }

    // componentDidMount() {
        
    //     fetch('http://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_e00d5ddab84a428993c8e04cb34b69f2')
    //         .then(res => res.json())
    //         .then(json => {
    //             this.setState({
    //                 isLoaded: true,
    //                 items: json,
    //             })
    //         });
    // }

    // render() {

    //     var { items } = this.state;

    //     if (items.isUsMarketOpen === true) {
    //         console.log(items.isUsMarketOpen);
    //         return (
    //             <section className="open">
    //                 <SPY />
    //                 <DIA />
    //                 <NDAQ />
    //             </section>
    //         );
    //     }

    //     else if (items.isUsMarketOpen === false) {
    //         console.log(items.isUsMarketOpen);
    //         return (
                // <section className="closed">
                //     <SPY />
                //     <DIA />
                //     <NDAQ />
                // </section>
    //         );
    //     }

    //     else {
    //         console.log(items.isUsMarketOpen);
    //         return (
    //             <p>error</p>
    //         )
    //     }
    // }

    render() {
        return (
            <section>
                <SPY />
                <DIA />
                <NDAQ />
            </section>
        )
    }

} 
export default StockQuotes