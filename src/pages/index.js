import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/HomeImage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About me</h1>
    <p>This is just some test and initialization for Juice's website :DD</p>
    <Image />
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>Hi</div>
    <Link to="/about/">Just a test link</Link>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      Some more text just so that I know I can get the hang of how this is
      supposed to be styled!
    </div>
  </Layout>
)

export default IndexPage
