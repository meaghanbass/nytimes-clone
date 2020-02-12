import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import HeaderTop from "./header-top"
import HeaderBottom from "./header-bottom"
import AdBanner from "./Ads/ad-banner"
import Footer from "./footer"

import MainContent from "./content/layouts/mainContent"
import AsideContent from "./content/layouts/asideContent"

const HomeLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query HomeSiteTitleQuery {
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
          <div className="content home-layout">
            <MainContent />
            <AsideContent />
          </div>
          {children}
        </main>
      </div>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
