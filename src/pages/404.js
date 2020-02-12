import React from "react"

import GeneralLayout from "../components/general-layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <GeneralLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </GeneralLayout>
)

export default NotFoundPage
