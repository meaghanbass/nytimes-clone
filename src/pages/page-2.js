import React from "react"
import { Link } from "gatsby"

import GeneralLayout from "../components/general-layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <GeneralLayout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </GeneralLayout>
)

export default SecondPage
