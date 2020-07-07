import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { Layout } from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import korea from "../images/lotte_sunset.JPG"

const SmallText = styled.text`
  font-size: 0.8em;
`
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
  font-size: 3rem;
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

const PicContainer = styled.figure`
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
          <div>Hello there ~ </div>
          <div>My name's Justin.</div>
        </TopLeft>
        <TopRight>
          <Img
            fluid={picData.personalPic.childImageSharp.fluid}
            style={{
              borderRadius: 60,
              background: "#ffffff",
              boxShadow: `-28px 28px 56px #cfcfcf, 
                         28px -28px 56px #ffffff`,
            }}
          />
        </TopRight>
        <Bottom>
          <Section>
            And I'm a rising junior at Penn!{" "}
            <a href="https://www.upenn.edu/">
              <Img fixed={picData.pennShield.childImageSharp.fixed} />
            </a>{" "}
            Currently studying computer science{" "}
            <span role="img" aria-label="computer">
              💻
            </span>
            , but outside of trying to learn make my React components{" "}
            <em>not</em> look ugly{" "}
            <SmallText>(CSS is straight magic I tell ya)</SmallText> and trying
            to stuff my head with as much new knowledge as I can, I run a lot
            these days, yearn to travel, enjoy playing guitar, read some super
            old books, and mindlessly scroll through Twitter sometimes{" "}
            <SmallText>(rip)</SmallText>. Feel free to check out some of the
            other things I've done!
          </Section>
          <Section>
            On the note of traveling, I really wanna visit my home country of
            Korea again{" "}
            <span role="img" aria-label="korea">
              🇰🇷
            </span>
            , so here's an awesome pic (or two) in the mean time:
          </Section>
          <PicContainer>
            <Img fluid={picData.korea.childImageSharp.fluid} />
            <figcaption>
              Isn't this one so pretty? This was at the top of Lotte Tower, and
              I got soooo lucky to capture these colors; if you look closely
              enough in the direction of the sunset, you can see 남산 타워
              (Namsan Tower), which is a super cool spot in Seoul with cute
              locks on its fence (!!)
            </figcaption>
          </PicContainer>
          <PicContainer>
            <Img fluid={picData.anotherKorea.childImageSharp.fluid} />
            <figcaption>
              Also at Lotte tower, but just more pretty shades :))
            </figcaption>
          </PicContainer>
        </Bottom>
      </Body>
    </Layout>
  )
}

export default IndexPage
