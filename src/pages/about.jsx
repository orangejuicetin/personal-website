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
const SubSection = styled.p`
  font-size: ${props => props.theme.typography.small.fontSize};
  margin: auto 10rem 1.5em;
`

const AboutPage = () => (
  <Layout>
    <SEO title="Who Am I" />
    <Body>
      <Section>Good question!</Section>
      <Section>
        I'd say I'm pretty complex, but I'm sure you could already deduce that
        from having interacted with the people in your very own, unique lives;
        and, if I'm being honest, we both know how hard it is to convey who we
        truly are without going along with the societal norm of posting your
        resume, etc., yada-yada...
      </Section>
      <SubSection>
        BUT because I find that a bit boring, I'll try to make it a bit more of
        a story so I don't lose you guys ;))
      </SubSection>
    </Body>
  </Layout>
)

export default AboutPage
