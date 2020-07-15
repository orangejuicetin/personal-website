import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { Layout } from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import KoreanFlag from "../images/assets/korean_flag.svg"
import {
  HeaderText,
  HighlightText,
  RegularText,
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

const SquishedSection = styled.div`
  margin-right: 20%;
`
// pictures
const SectionPic = styled.figure`
  margin: 5% 12.5% 2.5%;
`

const InlinePicLink = styled.a`
  width: 3.5%;
  display: inline-block;
  position: relative;
  top: 0.2rem;
`

const Svg = styled.img`
  display: inline-block;
  width: 5.5%;
  vertical-align: text-bottom;
`
// spacers

const Spacer = styled.div`
  margin: 1.5rem;
`

const IndexPage = () => {
  const picData = useStaticQuery(graphql`
    query {
      personalPic: file(relativePath: { eq: "gallery/ksa_roof_pic.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pennShield: file(
        relativePath: { eq: "logos/simplified-penn-shield.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      korea: file(relativePath: { eq: "korea/lotte_sunset.JPG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      anotherKorea: file(relativePath: { eq: "korea/korea_1.JPG" }) {
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
          <SquishedSection>
            <HighlightText>
              I'm currently a rising junior at Penn!{" "}
              <InlinePicLink href="https://www.upenn.edu/">
                <Img fluid={picData.pennShield.childImageSharp.fluid} />
              </InlinePicLink>{" "}
            </HighlightText>
            <Spacer />
            <HighlightText>
              And my degree's in computer science{" "}
              <span role="img" aria-label="computer">
                💻
              </span>
              &nbsp; so I beep boop bop.
            </HighlightText>
            <Spacer />
            <HighlightText>
              But outside of scraping by and trying to stuff my tiny brain with
              as much stuff as I can before I embark unto adult life, I also...
            </HighlightText>
          </SquishedSection>
          <Spacer />
          <StyledUnorderedList>
            <li>
              run a lot these days{" "}
              <span role="img" aria-label="runner">
                🏃🏻‍♂️
              </span>
              &nbsp;
              <SmallText>
                (if you follow me on Strava I follow back{" "}
                <span role="img" aria-label="eyes">
                  👀
                </span>
                &nbsp;)
              </SmallText>
            </li>
            <li>
              read some super old books{" "}
              <SmallText>
                <em>(*insert Bible emoji here*)</em>
              </SmallText>
            </li>
            <li>
              {" "}
              yearn to travel&nbsp;
              <span role="img" aria-label="airplane">
                ✈️ &nbsp;😔
              </span>
            </li>
            <li>
              enjoy playing guitar{" "}
              <span role="img" aria-label="guitar">
                🎸
              </span>{" "}
            </li>
            <li>
              and mindlessly scroll through Twitter sometimes{" "}
              <SmallText>(rip)</SmallText>
            </li>
          </StyledUnorderedList>
          <RegularText>
            Feel free to check out some of the other things I've done!
          </RegularText>
          <Spacer />
          <RegularText>
            On the note of traveling, I really wanna visit my home country of
            Korea&nbsp;
            <Svg src={KoreanFlag} alt="korea_flag" />
            &nbsp;after all this chaos settles down, so here's some senti
            reminiscing for you to enjoy in the mean time :')
          </RegularText>
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
