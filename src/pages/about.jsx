import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { Layout } from "../components/Layout"

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Paragraph = styled.p`
  font-size: 2em;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Body>
      <Paragraph>Hello</Paragraph>
    </Body>
  </Layout>
)

export default AboutPage
