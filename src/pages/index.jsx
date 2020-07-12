import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { Layout } from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  HeaderText,
  HighlightText,
  Paragraph,
  StyledUnorderedList,
  Caption,
  SmallText,
} from "../theme"

// page setup

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: 1fr auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`
const TopLeft = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  text-align: center;
  margin: auto;
`
const TopRight = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  margin: 7%;
`
const Bottom = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  justify-content: center;
  align-items: center;
  margin: 2% 7.5%;
`

// text elements

const NameText = styled.text`
  color: ${props => props.theme.colors.orange[0]};
  -moz-transition: all 0.7s ease-in;
  -o-transition: all 0.7s ease-in;
  -webkit-transition: all 0.7s ease-in;
  transition: all 0.7s ease-in;
`

// pictures
const SectionPic = styled.figure`
  margin: 5% 12.5% 2.5%;
`

const InlinePicLink = styled.a`
  width: 3.5%;
  display: inline-block;
  position: relative;
  top: 0.25%;
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
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
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
          <HeaderText>Hello there ~ </HeaderText>
          <HeaderText>
            My name's <NameText>Justin</NameText>.
          </HeaderText>
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
          <HighlightText>
            And I'm a rising junior at Penn!{" "}
            <InlinePicLink href="https://www.upenn.edu/">
              <Img fluid={picData.pennShield.childImageSharp.fluid} />
            </InlinePicLink>{" "}
          </HighlightText>
          <HighlightText>
            Currently studying computer science{" "}
            <span role="img" aria-label="computer">
              💻
            </span>
            &nbsp; but outside of trying to make my React components not look
            ugly and stuffing my head with as much stuff as I can before I
            embark unto adult life, I...
          </HighlightText>
          <StyledUnorderedList>
            <li>
              run a lot these days{" "}
              <span role="img" aria-label="runner">
                🏃🏻‍♂️
              </span>
            </li>
            <li>
              {" "}
              yearn to travel&nbsp;
              <span role="img" aria-label="airplane">
                ✈️
              </span>
            </li>
            <li>
              enjoy playing guitar{" "}
              <span role="img" aria-label="guitar">
                🎸
              </span>{" "}
            </li>
            <li>
              read some super old books{" "}
              <SmallText>(insert Bible emoji here)</SmallText>
            </li>
            <li>
              and mindlessly scroll through Twitter sometimes{" "}
              <SmallText>(rip)</SmallText>
            </li>
          </StyledUnorderedList>
          <Paragraph>
            Feel free to check out some of the other things I've done!
          </Paragraph>
          <Paragraph>
            On the note of traveling, I really wanna visit my home country of
            Korea again&nbsp;
            <span role="img" aria-label="korea">
              🇰🇷
            </span>
            &nbsp;after all this chaos settles down, so here's an awesome pic
            (or two) in the mean time:
          </Paragraph>
          <SectionPic>
            <Img
              fluid={picData.korea.childImageSharp.fluid}
              style={{
                borderRadius: 56,
                boxShadow: `-7px 7px 20px #adadad, 
                7px -7px 20px #ffffff`,
              }}
            />
            <Caption>
              Isn't this one so pretty? This was at the top of Lotte Tower, and
              I got soooo lucky to capture these colors; if you look closely
              enough in the direction of the sunset, you can see 남산 타워
              (Namsan Tower), which is a super cool spot in Seoul with cute
              locks on its fence (!!)
            </Caption>
          </SectionPic>
          <SectionPic>
            <Img
              fluid={picData.anotherKorea.childImageSharp.fluid}
              style={{
                borderRadius: 56,
                boxShadow: `-7px 7px 20px #adadad, 
                7px -7px 20px #ffffff`,
              }}
            />
            <Caption>
              Also at Lotte tower, but just more pretty shades :))
            </Caption>
          </SectionPic>
        </Bottom>
      </Body>
    </Layout>
  )
}

export default IndexPage
