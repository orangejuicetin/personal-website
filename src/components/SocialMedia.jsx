import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ExternalLink = styled.a`
  display: inline-block;
  padding: 3%;
  width: 100%;
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale"); /* Firefox 3.5+ */
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(65%);
  -moz-transition: all 0.75s ease-in;
  -o-transition: all 0.75s ease-in;
  -webkit-transition: all 0.75s ease-in;
  transition: all 0.75s ease;
  &:hover {
    filter: none;
    -webkit-filter: grayscale(0%);
    -moz-transition: all 0.45s ease-in;
    -o-transition: all 0.45s ease-in;
    -webkit-transition: all 0.45s ease-in;
    transition: all 0.45s ease;
  }
`
const GithubLink = styled(ExternalLink)`
  && {
    opacity: 0.65;
    &:hover {
      opacity: 1;
    }
  }
`
const LinkedInLink = styled(ExternalLink)`
  && {
    opacity: 0.65;
    &:hover {
      opacity: 1;
    }
    max-width: 105%;
  }
`

export const SocialMedia = () => {
  const logos = useStaticQuery(graphql`
    query {
      twitter: file(relativePath: { eq: "logos/twitter_circle.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      linkedin: file(relativePath: { eq: "logos/linkedin.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      github: file(relativePath: { eq: "logos/github.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      spotify: file(relativePath: { eq: "logos/spotify_green_2.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <ExternalLink
        href="https://twitter.com/orange_juicetin"
        target="_blank"
        rel="noreferrer"
      >
        <Img fluid={logos.twitter.childImageSharp.fluid} />
      </ExternalLink>
      <ExternalLink
        href="https://open.spotify.com/user/12157433086?si=lbBCA0GvRuS1-IM970rIyA"
        target="_blank"
        rel="noreferrer"
      >
        <Img fluid={logos.spotify.childImageSharp.fluid} />
      </ExternalLink>
      <GithubLink
        href="https://github.com/orangejuicetin"
        target="_blank"
        rel="noreferrer"
      >
        <Img fluid={logos.github.childImageSharp.fluid} />
      </GithubLink>
      <LinkedInLink
        href="https://www.linkedin.com/in/juicetinchoi/"
        target="_blank"
        rel="noreferrer"
      >
        <Img fluid={logos.linkedin.childImageSharp.fluid} />
      </LinkedInLink>
    </>
  )
}
