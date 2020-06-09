import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/Layout"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div>
      <h1>About Justin Choi!</h1>
      <p>Welcome to this work in progress! Let's hope it works out lol</p>
      <p>
        This is also a way for me to present some of my projects and have some
        cool functionality so let's see if this works out
      </p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default AboutPage
