import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ExternalLink = styled.a`
  display: inline-block;
  padding: 1.5%;
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
  }
  width: 105%;
`

export const SocialMedia = () => {
  const logos = useStaticQuery(graphql`
    query {
      twitter: file(relativePath: { eq: "logos/twitter_circle.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 50, height: 50) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      linkedin: file(relativePath: { eq: "logos/linkedin.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 50, height: 50) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      github: file(relativePath: { eq: "logos/github.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 50, height: 50) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      spotify: file(relativePath: { eq: "logos/spotify_green_2.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 50, height: 50) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <ExternalLink href="https://twitter.com/orange_juicetin">
        <Img fixed={logos.twitter.childImageSharp.fixed} />
      </ExternalLink>
      <ExternalLink href="https://open.spotify.com/user/12157433086?si=lbBCA0GvRuS1-IM970rIyA">
        <Img fixed={logos.spotify.childImageSharp.fixed} />
      </ExternalLink>
      <GithubLink href="https://github.com/orangejuicetin">
        <Img fixed={logos.github.childImageSharp.fixed} />
      </GithubLink>
      <LinkedInLink href="https://www.linkedin.com/in/juicetinchoi/">
        <Img fixed={logos.linkedin.childImageSharp.fixed} />
      </LinkedInLink>
    </>
  )
}
