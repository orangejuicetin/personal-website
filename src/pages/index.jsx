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
  margin: auto 8.25%;
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

const BottomContainer = styled.div`
  display: flex;
`

const RightSection = styled.div`
  text-align: center;
  margin: auto;
  margin-left: 5%;
`

const LeftSectionPic = styled.div`
  width: 100%;
`

// text elements

const NameText = styled.text`
  color: ${props => props.theme.colors.orange[0]};
  font-family: "Comfortaa";
`

// pictures
const ShadowedMainPic = styled(Img)`
  border-radius: 5%;
  box-shadow: -1vw 1vw 2vw #cfcfcf, 1vw -1vw 2vw #ffffff;
`

const ShadowedGeneralPic = styled(Img)`
  border-radius: 10%;
  box-shadow: -0.5vw 0.5vw 1vw #d1d1d1, 0.5vw -0.5vw 1vw #ffffff;
`

const Figure = styled.figure`
  margin: 5% 12.5% 2.5%;
`

const InlinePicLink = styled.a`
  width: 6%;
  display: inline-block;
  position: relative;
  top: 0.7rem;
`

const Svg = styled.img`
  display: inline-block;
  width: 5%;
  vertical-align: text-bottom;
`
// spacers

const BigSpacer = styled.div`
  margin: 5%;
`
const MediumSpacer = styled.div`
  margin: 2.5%;
`
const LittleSpacer = styled.div`
  margin: 1.25%;
`

const IndexPage = () => {
  const picData = useStaticQuery(graphql`
    query {
      seoPic: file(relativePath: { eq: "gallery/puertorico_juicetin.png" }) {
        childImageSharp {
          resize(width: 1200) {
            src
            width
            height
          }
        }
      }
      personalPic: file(
        relativePath: { eq: "gallery/puertorico_juicetin.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sleepy: file(relativePath: { eq: "gallery/sleepy_juicetin.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pennShield: file(
        relativePath: { eq: "logos/simplified-penn-shield.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lotte: file(relativePath: { eq: "korea/lotte_sunset.JPG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lotte_2: file(relativePath: { eq: "korea/korea_1.JPG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      koreanFood: file(relativePath: { eq: "korea/busan_donkatsu.JPG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      flowerGarden: file(relativePath: { eq: "korea/flower_garden.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      busanSunset: file(relativePath: { eq: "korea/busan_sunset.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" image={picData.seoPic.childImageSharp.resize} />
      <Body>
        <TopLeft>
          <HeaderText>Hello there ~ </HeaderText>
          <HeaderText>
            My name's <NameText>Justin</NameText>.
          </HeaderText>
          <SmallText>
            (And no, I don't know what I'm looking at either unfortunately)
          </SmallText>
        </TopLeft>
        <TopRight>
          <ShadowedMainPic fluid={picData.personalPic.childImageSharp.fluid} />
        </TopRight>
        <Bottom>
          <BottomContainer>
            <LeftSectionPic>
              <ShadowedGeneralPic
                fluid={picData.sleepy.childImageSharp.fluid}
              />
              <Caption>rip sleep schedule</Caption>
            </LeftSectionPic>
            <RightSection>
              <HighlightText>
                I'm currently a rising junior at Penn!&nbsp;
                <InlinePicLink href="https://www.upenn.edu/">
                  <Img
                    fluid={picData.pennShield.childImageSharp.fluid}
                    alt=""
                  />
                </InlinePicLink>{" "}
              </HighlightText>
              <MediumSpacer />
              <HighlightText>
                And my degree's in computer science
                {/* <span role="img" aria-label="computer">
                  💻
                </span> */}
                &nbsp;so I <em>beep boop bop</em> and kinda lose some sleep in
                the process.
              </HighlightText>
            </RightSection>
          </BottomContainer>
          <BigSpacer />
          <HighlightText>
            But outside of scraping by and trying to stuff my tiny brain with as
            much new material as I can before I embark unto adult life, I
            also...
          </HighlightText>
          <StyledUnorderedList>
            <li>
              run a lot these days{" "}
              {/* <span role="img" aria-label="runner">
                // 🏃🏻‍♂️
              </span> */}
              &nbsp;
              {/* <SmallText>
                (if you can find me on Strava, I follow back sooo{" "}
                <span role="img" aria-label="eyes">
                  👀
                </span>
                &nbsp;)
              </SmallText> */}
            </li>
            <li>
              read some super old books{" "}
              <SmallText>
                <em>(*insert Bible emoji here*)</em>
              </SmallText>
            </li>
            <li>
              {" "}
              wish I could be traveling
              {/* <span role="img" aria-label="airplane">
                ✈️
              </span> */}
              &nbsp;
              <span role="img" aria-label="sad">
                😔
              </span>
            </li>
            <li>enjoy strumming my Taylor 510ce</li>
            <li>
              and mindlessly scroll through Twitter sometimes&nbsp;
              <SmallText>(oops)</SmallText>
            </li>
          </StyledUnorderedList>
          <RegularText>
            However, feel free to check out some of the other things I've done!
            There's a projects page where I elaborate more on the work I've done
            in the past (free from the constraint of a one page resume
            thankfully), and all the links to my other profiles are all up top,
            so click freely!
          </RegularText>
          <LittleSpacer />
          <RegularText>
            And, on the note of traveling, I really wanna visit my home country
            of Korea&nbsp;
            <Svg src={KoreanFlag} alt="korea_flag" />
            &nbsp;if there's any chance, y'know, flying becomes normal again, so
            in the mean time, here's some senti reminiscing for you to enjoy
            from the last time I was able to go :')
          </RegularText>
          <MediumSpacer />
          <Figure>
            <ShadowedGeneralPic fluid={picData.lotte.childImageSharp.fluid} />
            <Caption>
              Isn't this one so pretty? This was at the top of Lotte Tower, and
              I got soooo lucky to capture these colors; if you look closely
              enough in the direction of the sunset, you can see 남산 타워
              (Namsan Tower), which is a super cool spot in Seoul with cute
              locks on its fence (!!)
            </Caption>
          </Figure>
          <Figure>
            <ShadowedGeneralPic
              fluid={picData.koreanFood.childImageSharp.fluid}
            />
            <Caption>
              This was 돈까스 (donkatsu) down in Busan the same summer, and it
              was sooo good, especially after a long train ride from Seoul. brb
              gonna go cry for a bit T.T
            </Caption>
          </Figure>
          <Figure>
            <ShadowedGeneralPic fluid={picData.lotte_2.childImageSharp.fluid} />
            <Caption>
              Also at Lotte tower, but just more pretty shades :D
            </Caption>
          </Figure>
          <Figure>
            <ShadowedGeneralPic
              fluid={picData.flowerGarden.childImageSharp.fluid}
            />
            <Caption>
              A flower garden that I stumbled upon in Busan, and I just thought
              this pic was cute ~ the banners just say "happy wish" and "flower
              garden" haha
            </Caption>
          </Figure>
          <Figure>
            <ShadowedGeneralPic
              fluid={picData.busanSunset.childImageSharp.fluid}
            />
            <Caption>
              As you can tell, I sorta have a thing for nice sunsets LOL, this
              one was also in Busan and I thought it was so nice to gaze at :')
            </Caption>
          </Figure>
        </Bottom>
      </Body>
    </Layout>
  )
}

export default IndexPage
