import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { Layout } from "../components/Layout"

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Section = styled.div`
  border-radius: 47px;
  background: #ffffff;
  box-shadow: -12px 12px 24px #c9c9c9, 12px -12px 24px #ffffff;
  font-size: ${props => props.theme.typography.small.fontSize};
  margin: auto 3em 1.5em;
  padding: 5%;
`

// const SubSection = styled.p`
//   font-size: ${props => props.theme.typography.small.fontSize};
//   margin: auto 10rem 1.5em;
// `

const AboutPage = () => (
  <Layout>
    <SEO title="Who Am I" />
    <Body>
      <Section>Just leaving at this for now lolz</Section>
    </Body>
  </Layout>
)

export default AboutPage
