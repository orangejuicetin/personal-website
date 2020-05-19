import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div>
      <article>More stuff about projects here!</article>
      <article>Some nice structure here</article>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
