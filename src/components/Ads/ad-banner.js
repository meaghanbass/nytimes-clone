// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import AdItem from "./ad-item"

const AdBanner = ({ siteTitle }) => (
    <>
    <section className="ad">
        <div className="left">
            <AdItem />
        </div>
        
        <div className="right">
            <div>Placeholder:
                Stocks
            </div>
            <div>Placeholder:
                Weather
            </div>
        </div>
    </section>
    
    </>
)

export default AdBanner
