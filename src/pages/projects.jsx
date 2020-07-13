import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Layout } from "../components/Layout.jsx"
import {
  HeaderText,
  HighlightText,
  RegularText,
  SmallText,
  SmallParagraph,
} from "../theme"
import SEO from "../components/seo"
import Img from "gatsby-image"

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2.5% 7.5%;
`

const Section = styled.div`
  border-radius: 47px;
  background: #ffffff;
  box-shadow: -12px 12px 24px #c9c9c9, 12px -12px 24px #ffffff;
  font-size: ${props => props.theme.typography.small.fontSize};
  margin: auto 3em 1.5em;
  padding: 3%;
  width: 90%;
`
const BigSpacer = styled.div`
  margin: 3% auto;
`
const MediumSpacer = styled.div`
  margin: 1.5% auto;
`

const TopText = styled(RegularText)`
  text-indent: 3%;
`

const ImageContainer = styled.ul`
  margin: 2% auto;
  text-align: center;
`
const Image = styled.li`
  width: 10%;
  display: inline-block;
  margin: auto 4%;
`
const ProjectsPage = () => {
  const picData = useStaticQuery(graphql`
    query {
      ampe_main: file(relativePath: { eq: "ampe/ampe-logo.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ampe_sky: file(relativePath: { eq: "ampe/ampe-logo-sky.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ampe_yellow: file(relativePath: { eq: "ampe/ampe-logo-yellow.png" }) {
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
      <SEO title="Projects" />
      <Body>
        <HeaderText>Gallery</HeaderText>
        <BigSpacer />
        <TopText>
          Here are some projects that I wanted to display in fuller detail!
          Figured that I'd rather not use this space to just repeat my resume on
          this, but rather try to make something that helps explore these
          projects with some more detail and also allow some cool pics too!
        </TopText>
        <BigSpacer />
        <Section>
          <HighlightText>Ampe</HighlightText>
          <SmallText>
            <em>May 2020 - Present</em>
          </SmallText>
          <ImageContainer>
            <Image>
              <Img fluid={picData.ampe_main.childImageSharp.fluid} />
            </Image>
            <Image>
              <Img fluid={picData.ampe_sky.childImageSharp.fluid} />
            </Image>
            <Image>
              <Img fluid={picData.ampe_yellow.childImageSharp.fluid} />
            </Image>
          </ImageContainer>
          <MediumSpacer />
          <SmallParagraph>
            WIP right now, but it's what I'm working on for the summer! Fingers
            crossed we're gonna launch a beta by beginning of August, but it's
            looking super promising as of now; currently building it from the
            ground up using TypeScript, and our stack is React Native, a Apollo
            GraphQL server, and Nexus + Prisma in order to build our schema and
            map it to our PostgreSQL database. Exciting stuff :)) sneak peek of
            our logo from the wonderful @andrewshen is what those images are
            above us.
          </SmallParagraph>
        </Section>
        <Section>
          <HighlightText>CORD-19 Dataset Analysis + Modeling</HighlightText>
          <SmallText>
            <em>April 2020 - May 2020</em>
          </SmallText>
          <ImageContainer></ImageContainer>
          <MediumSpacer />
          <SmallParagraph>
            Quite pertinent to the times, this was my final project for CIS545
            and this dataset from A2I, Chan Zuckerberg Initiative, NIH and more
            was a massive dataset of
          </SmallParagraph>
        </Section>
      </Body>
    </Layout>
  )
}

export default ProjectsPage
