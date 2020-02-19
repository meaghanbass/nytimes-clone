import "core-js"
import React from "react"
import HomeLayout from "../components/home-layout"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css'

import '../styles/styles.scss'

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" />
  </HomeLayout>
)

export default IndexPage