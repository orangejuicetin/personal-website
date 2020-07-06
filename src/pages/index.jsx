import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { Layout } from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import korea from "../images/lotte_sunset.JPG"

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.75fr;
  grid-template-rows: 1fr auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`

const TopLeft = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  justify-content: center;
  align-items: center;
  margin: auto;
  font-size: 5rem;
`
const TopRight = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  margin: 3em;
`
const Bottom = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  justify-content: center;
  align-items: center;
  margin: 2em;
`

const Section = styled.p`
  font-size: 2em;
  margin: auto 3em 1.5em;
  text-indent: 2em;
`

const PicContainer = styled.div`
  margin: auto 15em 2em;
`

const IndexPage = () => {
  const picData = useStaticQuery(graphql`
    query {
      personalPic: file(relativePath: { eq: "ksa_roof_pic.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pennShield: file(relativePath: { eq: "simplified-penn-shield.png" }) {
        childImageSharp {
          fixed(quality: 100, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      korea: file(relativePath: { eq: "lotte_sunset.JPG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      anotherKorea: file(relativePath: { eq: "korea_1.JPG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Body>
        <TopLeft>
          <div>Hi there ~</div>
        </TopLeft>
        <TopRight>
          <Img fluid={picData.personalPic.childImageSharp.fluid} />
        </TopRight>
        <Bottom>
          <Section>
            I'm a rising junior at Penn{" "}
            <a href="https://www.upenn.edu/">
              <Img fixed={picData.pennShield.childImageSharp.fixed} />
            </a>{" "}
            currently studying computer science 💻, but outside of trying to
            learn make my React components <em>not</em> look ugly (CSS is
            straight magic) and not failing school work, I run a lot these days,
            yearn to travel, enjoy playing guitar, read some super old books,
            and mindlessly scroll through Twitter sometimes (rip). Feel free to
          </Section>
          <Section>
            On the note of traveling, I really wanna visit my home country of
            Korea again, so here's an awesome pic in the mean time:
          </Section>
          <PicContainer>
            <Img fluid={picData.korea.childImageSharp.fluid} />
          </PicContainer>
          <PicContainer>
            <Img fluid={picData.anotherKorea.childImageSharp.fluid} />
          </PicContainer>
        </Bottom>
      </Body>
    </Layout>
  )
}

export default IndexPage
