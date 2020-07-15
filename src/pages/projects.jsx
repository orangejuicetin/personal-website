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

// layout
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2.5% 7.5%;
`

const Section = styled.div`
  border-radius: 33px;
  background: #ffffff;
  box-shadow: -15px 15px 58px #f0f0f0, 15px -15px 58px #ffffff;
  font-size: ${props => props.theme.typography.small.fontSize};
  margin: auto 3rem 3rem;
  padding: 3%;
  width: 90%;
`
const BigSpacer = styled.div`
  margin: 4% auto;
  flex-grow: 1;
`
const MediumSpacer = styled.div`
  margin: 1.5% auto;
  flex-grow: 1;
`

// text
const TopText = styled(RegularText)`
  text-indent: 3%;
`

const ExternalLink = styled.a`
  color: ${props => props.theme.colors.blue[1]};
  text-decoration: none;
`

// pictures
const ImageContainer = styled.ul`
  margin: 2% auto;
  text-align: center;
`
const LogoImage = styled.li`
  width: 8%;
  display: inline-block;
  margin: auto 4%;
  border-radius: 44px;
  background: #ffffff;
  box-shadow: -8px 8px 18px #e3e3e3, 8px -8px 18px #ffffff;
`
const GenericImage = styled(Img)`
  border-radius: 44px;
  background: #ffffff;
  box-shadow: -9px 9px 32px #cccccc, 9px -9px 32px #ffffff;
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
      cord_19_clusters: file(
        relativePath: { eq: "gallery/cord-19_diagram.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cord_19_lda: file(
        relativePath: { eq: "gallery/cord-19_lda_sample.png" }
      ) {
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
            <LogoImage>
              <Img fluid={picData.ampe_main.childImageSharp.fluid} />
            </LogoImage>
            <LogoImage>
              <Img fluid={picData.ampe_sky.childImageSharp.fluid} />
            </LogoImage>
            <LogoImage>
              <Img fluid={picData.ampe_yellow.childImageSharp.fluid} />
            </LogoImage>
          </ImageContainer>
          <MediumSpacer />
          <SmallParagraph>
            WIP right now, but it's what I'm working on for the summer! Fingers
            crossed we're gonna launch a beta by beginning of August, but it's
            looking super promising as of now; currently building it from the
            ground up using TypeScript, and our stack is React Native, a Apollo
            GraphQL server, and Nexus + Prisma in order to build our schema and
            map it to our PostgreSQL database. Sneak peek of our logo designed
            by the wonderful{" "}
            <ExternalLink href="https://andrewshen.net/">
              @andrewshen
            </ExternalLink>{" "}
            is what those images are above us.
          </SmallParagraph>
        </Section>
        <Section>
          <HighlightText>CORD-19 Dataset Analysis + Modeling</HighlightText>
          <SmallText>
            <em>April 2020 - May 2020</em>
          </SmallText>
          <ImageContainer>
            <GenericImage
              fluid={picData.cord_19_clusters.childImageSharp.fluid}
            />
          </ImageContainer>
          <BigSpacer />
          <SmallParagraph>
            Quite pertinent to the times, my final project for CIS545 was based
            around this dataset that was amassed thanks to A2I, Chan Zuckerberg
            Initiative, NIH and more. Called the "CORD-19" dataset (I swear, it
            wasn't a typo or anything on my end), it contained a massive number
            of research articles covering all topics related to coronaviruses,
            whether it be COVID-19, SARS, MERS, etc. in the form of{" "}
            <code>.json</code> files
          </SmallParagraph>
        </Section>
      </Body>
    </Layout>
  )
}

export default ProjectsPage