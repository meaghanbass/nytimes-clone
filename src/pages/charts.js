import React from "react"
import GeneralLayout from "../components/general-layout"
import SEO from "../components/seo"
import AMChartComponent from "../components/charts/amChartComponent"
// import VisChartComponent from "../components/charts/visChartComponent"


export default () => {
    return (
        <GeneralLayout>
            <SEO title="Charts" />
            {/* <VisChartComponent /> */}
            <AMChartComponent />
        </GeneralLayout>
    )
}