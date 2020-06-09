import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <div>
      <div>Some testing for blog stuff</div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default BlogPage
