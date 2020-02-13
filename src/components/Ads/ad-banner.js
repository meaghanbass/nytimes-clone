import React from "react"
import AdItem from "./ad-item"
import Stocks from "../Stocks/stock-quotes"
import Weather from "../Weather/weather"

const AdBanner = () => (
    <>
    <section className="ad">
        <div className="left">
            <AdItem />
        </div>
        
        <div className="right">
            <div className="stock-wrapper">
                <Stocks />
            </div>
            <div className="weather-wrapper">
                <Weather />
            </div>
        </div>
    </section>
    
    </>
)

export default AdBanner
