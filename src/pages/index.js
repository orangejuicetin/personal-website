import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header siteTitle="Justin Choi" />
    <h1>Hi people</h1>
    <p>This is just some test and initialization for Juice's website :DD</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
