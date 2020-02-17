import React from "react"
// import { Link, graphql } from "gatsby"
import GeneralLayout from "../components/general-layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.scss'
import Chart from "../components/chart"

export default ({ data }) => {
    return (
        <GeneralLayout>
        <SEO title="Charts" />
        <div id="article-index">
            <br />
            <h4>Charts Index</h4>
            <Chart />
        </div>
        </GeneralLayout>
    )
}