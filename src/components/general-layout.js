import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import HeaderTop from "./header-top"
import HeaderBottom from "./header-bottom"
import AdBanner from "./Ads/ad-banner"
import Footer from "./footer"

import MainContent from "./content/layouts/mainContent"

const GeneralLayout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query GeneralSiteTitleQuery {
        site {
            siteMetadata {
            title
            }
        }
        }
    `)

    return (
        <>
        <HeaderTop siteTitle={data.site.siteMetadata.title} />
        <HeaderBottom />
        <div className="container">
            <main>
            <AdBanner />
            <p>General Layout</p>
            <div className="content general-layout">
                <MainContent />
            </div>
            {children}
            </main>
        </div>
        <Footer siteTitle={data.site.siteMetadata.title} />
        </>
    )
}

export default GeneralLayout
