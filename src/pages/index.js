import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Image from "../components/Image"
// import korea from "../images/lotte_sunset.JPG"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="top-section">
      <div className="image">
        <Image />
      </div>
      <div>
        <article>
          This is just some test and initialization for Juice's website :DD
        </article>
        <article>
          Some more text just so that I know I can get the hang of how this is
          supposed to be styled!
        </article>
        <Link to="/projects">Other works</Link>
      </div>
    </div>
    <div className="lower-section">
      More information here about general projects, links, etc.
    </div>
  </Layout>
)

export default IndexPage
