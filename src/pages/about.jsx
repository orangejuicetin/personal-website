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
const Section = styled.p`
  font-size: 2em;
  margin: auto 3em 1.5em;
`
const SubSection = styled.p`
  font-size: 1.5em;
  margin: auto 10rem 1.5em;
`

const AboutPage = () => (
  <Layout>
    <SEO title="Who Am I" />
    <Body>
      <Section>Good question!</Section>
      <SubSection>
        I'd say I'm pretty complex, but I'm sure you could already deduce that
        from having interacted with the people in your very own, unique lives;
        and, if I'm being honest, we both know how hard it is to convey who we
        truly are without going along with the societal norm of posting your
        resume, etc., yada-yada...
      </SubSection>
      <SubSection>
        BUT because I find that a bit boring, I'll try to make it a bit more of
        a story so I don't lose you guys ;))
      </SubSection>
    </Body>
  </Layout>
)

export default AboutPage
