import React from "react"
import GeneralLayout from "../components/general-layout"
import SEO from "../components/seo"
// import AMChartComponent from "../components/charts/amChartComponent"
import D3ChartComponent from "../components/charts/d3ChartComponent"

// I removed AMCHARTS because it was breaking on deployment
// run npm install @amcharts/amcharts4 if you want to try to use it again. A chart component has already been created.


export default () => {
    return (
        <GeneralLayout>
            <SEO title="Charts" />
            <D3ChartComponent />
            {/* <AMChartComponent /> */}
        </GeneralLayout>
    )
}