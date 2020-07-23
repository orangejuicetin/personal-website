import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import { Layout } from "../components/Layout"

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2.5% 7.5%;
`

const Section = styled.div`
  border-radius: 47px;
  background: #ffffff;
  box-shadow: -0.7vw 0.7vw 1.4vw #c9c9c9, 0.7vw -0.7vw 1.4vw #ffffff;
  font-size: ${props => props.theme.typography.small.fontSize};
  margin: auto 3em 1.5em;
  padding: 3%;
  width: 90%;
`

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Body>
      <Section>
        Under construction!{" "}
        <span role="img" aria-label="construction">
          🚧
        </span>
      </Section>
    </Body>
  </Layout>
)

export default BlogPage
