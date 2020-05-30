import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout.js"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div>
      <article>More stuff about projects here!</article>
      <div>
        <h2>Software Engineer</h2>
        <h2>Ampe</h2>
        <p>
          Startup aiming to innovate the way to we plan social events, with
          backing from the OVO fund; worked with a React frontend, as well as
          graphQL backend.
        </p>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default ProjectsPage
