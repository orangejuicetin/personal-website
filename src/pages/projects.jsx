import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Layout } from "../components/Layout.jsx"
import SEO from "../components/seo"

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
`
const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <StyledDiv>
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
    </StyledDiv>
    <StyledDiv>
      <article>Another generic article thingy</article>
      <div>
        <h2>Generic task</h2>
        <h2>Some company</h2>
        <p>Some text here to spice things up, maybe add component here</p>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </StyledDiv>
  </Layout>
)

export default ProjectsPage
