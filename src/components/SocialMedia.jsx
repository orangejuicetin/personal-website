import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ExternalLink = styled.a`
  width: 50%;
  padding: 3%;
  display: inline-block;
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
const TwitterLink = styled(ExternalLink)`
  width: 100%;
`
const GithubLink = styled(ExternalLink)`
  opacity: 0.65;
  &:hover {
    opacity: 1;
  }
  width: 100%;
`
const SpotifyLink = styled(ExternalLink)`
  width: 100%;
`
const LinkedInLink = styled(ExternalLink)`
  width: 107%;
  opacity: 0.65;
  &:hover {
    opacity: 1;
  }
  position: relative;
  top: 0.15rem;
`
// const Svg = styled.img`
//   display: inline-block;
//   width: 5%;
// `

export const SocialMedia = () => {
  const logos = useStaticQuery(graphql`
    query {
      twitter: file(relativePath: { eq: "logos/twitter_circle.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkedin: file(relativePath: { eq: "logos/linkedin.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      github: file(relativePath: { eq: "logos/github.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spotify: file(relativePath: { eq: "logos/spotify_green_2.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <TwitterLink href="https://twitter.com/orange_juicetin">
        <Img fluid={logos.twitter.childImageSharp.fluid} />
      </TwitterLink>
      <SpotifyLink href="https://open.spotify.com/user/12157433086?si=lbBCA0GvRuS1-IM970rIyA">
        <Img fluid={logos.spotify.childImageSharp.fluid} />
      </SpotifyLink>
      <GithubLink href="https://github.com/orangejuicetin">
        <Img fluid={logos.github.childImageSharp.fluid} />
      </GithubLink>
      <LinkedInLink href="https://www.linkedin.com/in/juicetinchoi/">
        <Img fluid={logos.linkedin.childImageSharp.fluid} />
      </LinkedInLink>
    </>
  )
}
