import React from "react"
import GeneralLayout from "../components/general-layout"
import SEO from "../components/seo"
import AMChartComponent from "../components/charts/amChartComponent"


export default () => {
    return (
        <GeneralLayout>
            <SEO title="Charts" />
            <AMChartComponent />
        </GeneralLayout>
    )
}