import React from "react"
import AdItem from "./ad-item"

const AdBanner = () => (
    <>
    <section className="ad">
        <div className="left">
            <AdItem />
        </div>
        
        <div className="right">
            <div>
                Placeholder:
                Stocks
            </div>
            <div>
                Placeholder:
                Weather
            </div>
        </div>
    </section>
    
    </>
)

export default AdBanner
