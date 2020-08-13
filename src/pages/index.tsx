import React from "react";
import styled from "styled-components";
import {
  SEO,
  Layout,
  LargeText,
  RegularParagraph,
  Caption,
  SmallText,
  CenteringDiv,
  Coloring,
} from "../components";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { useGallery } from "../hooks";
import { theme } from "../styling/theme";

// page setup

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: 1fr auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: auto 12.5%;
`;

const TopLeft = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  text-align: center;
  margin: auto;
`;

const TopRight = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  margin: 7%;
`;

const Bottom = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  margin: 2.5% auto;
`;

const BottomContainer = styled.div`
  display: flex;
`;

const RightSection = styled.div`
  text-align: center;
  margin: auto;
  margin-left: 5%;
`;

const LeftSectionPic = styled.div`
  width: 100%;
`;

// text elements

const Intro = styled.text`
  font-size: 3.75vw;
  font-family: ${props => props.theme.typography.header.fontFamily};
  line-height: calc(1ex / 0.4);
  margin: calc(1ex / 0.4) 0;
`;

const SubIntro = styled.text`
  font-size: 2.75vw;
  font-family: ${props => props.theme.typography.subtitle.fontFamily};
  line-height: calc(1ex / 0.37);
  margin: calc(1ex / 0.37) 0;
`;

const StyledUnorderedList = styled.ul`
  font-size: ${props => props.theme.typography.large.fontSize};
  font-family: ${props => props.theme.typography.regular.fontFamily};
`;

// pictures

const ShadowedMainPic = styled(Img)`
  border-radius: 5%;
  box-shadow: -1vw 1vw 2vw #cfcfcf, 1vw -1vw 2vw #ffffff;
`;

const ShadowedGeneralPic = styled(Img)`
  border-radius: 10%;
  box-shadow: -0.5vw 0.5vw 1vw #d1d1d1, 0.5vw -0.5vw 1vw #ffffff;
`;

const InlinePicLink = styled.a`
  width: 6%;
  display: inline-block;
  position: relative;
  top: 0.5vw;
`;

const StyledInternalLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${theme.colors.orange[0]};
  -moz-transition: all 0.215s ease-in;
  -o-transition: all 0.215s ease-in;
  -webkit-transition: all 0.215s ease-in;
  transition: all 0.215s ease-in;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  &:hover {
    -moz-transition: all 0.275s ease-in;
    -o-transition: all 0.275s ease-in;
    -webkit-transition: all 0.275s ease-in;
    transition: all 0.275s ease-in;
    background-size: 100% 2px;
  }
`;

const IndexPage = () => {
  // use hook to query all necessary data from images folder
  const { personalPic, sleepy } = useGallery();

  const extraData = useStaticQuery(graphql`
    query {
      pennShield: file(
        relativePath: { eq: "logos/simplified-penn-shield.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" image={personalPic.childImageSharp.resize} />
      <Body>
        <TopLeft>
          <Intro>
            Hello there ~
            <br />
            My name's <Coloring color={theme.colors.orange[1]}>Justin</Coloring>
            .
          </Intro>
          <br />
          <SmallText>
            (And no, I don't know what I'm looking at either unfortunately)
          </SmallText>
        </TopLeft>
        <TopRight>
          <ShadowedMainPic fluid={personalPic.childImageSharp.fluid} />
        </TopRight>
        <Bottom>
          <BottomContainer>
            <LeftSectionPic>
              <ShadowedGeneralPic fluid={sleepy.childImageSharp.fluid} />
              <Caption>rip sleep schedule</Caption>
            </LeftSectionPic>
            <RightSection>
              <SubIntro>
                I'm currently a rising junior at Penn!&nbsp;
                <InlinePicLink
                  href="https://www.upenn.edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Img
                    fluid={extraData.pennShield.childImageSharp.fluid}
                    alt=""
                  />
                </InlinePicLink>{" "}
                <br />
                And I study{" "}
                <Coloring color={theme.colors.blue[2]}>
                  computer science
                </Coloring>
                , so I beep boop bop and kinda lose some sleep in the process.
              </SubIntro>
            </RightSection>
          </BottomContainer>
          <CenteringDiv>
            <LargeText>
              But outside of scraping by and trying to stuff my{" "}
              <SmallText>smol</SmallText> brain with as much new material as I
              can before I embark unto adult life, I also...
            </LargeText>
            <StyledUnorderedList>
              <li>
                <Coloring color={theme.colors.orange[0]}>run</Coloring> a lot
                these days
                <span role="img" aria-label="running">
                  🏃🏻‍♂️
                </span>
                &nbsp;
              </li>
              <li>
                read some super{" "}
                <Coloring color={theme.colors.blue[1]}>old</Coloring> books{" "}
                <SmallText>
                  <em>(*insert Bible emoji here*)</em>
                </SmallText>
              </li>
              <li>
                wish I could be{" "}
                <Coloring color={theme.colors.orange[1]}>traveling</Coloring>
                &nbsp;
                <span role="img" aria-label="sad">
                  😔
                </span>
              </li>
              <li>
                enjoy{" "}
                <Coloring color={theme.colors.blue[2]}>strumming</Coloring> my
                Taylor 510ce
              </li>
              <li>
                and mindlessly scroll through&nbsp;
                <Coloring color={theme.colors.blue[1]}>Twitter</Coloring>{" "}
                sometimes&nbsp;
                <SmallText>(oops)</SmallText>
              </li>
            </StyledUnorderedList>
            <RegularParagraph>
              However, feel free to check out some of the other things I've
              done! There's a&nbsp;
              <StyledInternalLink to="/projects">projects</StyledInternalLink>
              &nbsp;page where I elaborate more on the work I've done in the
              past (free from the constraint of a one page resume thankfully),
              and all the links to my other profiles are all up top, so click
              freely!
            </RegularParagraph>
          </CenteringDiv>
        </Bottom>
      </Body>
    </Layout>
  );
};

export default IndexPage;
