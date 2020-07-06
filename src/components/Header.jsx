import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { MenuBar } from "../components/MenuBar"
import { BLACK, WHITE } from "./constants/colors"
import { PROJECTS_ROUTE, BLOG_ROUTE } from "../components/constants/routes"

const Head = styled.header`
  background: ${WHITE};
  align-items: flex-start;
  padding: 1em;
  margin: 1.5rem 3em 0rem;
`

const Title = styled(Link)`
  color: ${BLACK};
  text-decoration: none;
  font-size: 2.5em;
  vertical-align: middle;
`

const Spacer = styled.div`
  margin: 0 2em;
  display: inline-block;
`

const PersonalLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      personalLogo: file(relativePath: { eq: "personal_logo.jpg" }) {
        childImageSharp {
          fixed(quality: 100, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.personalLogo.childImageSharp.fixed} />
}

export const Header = () => {
  const routes = {
    [PROJECTS_ROUTE]: "Projects",
    [BLOG_ROUTE]: "Random Thoughts",
  }

  return (
    <Head>
      <Title to="/">
        <PersonalLogo />
      </Title>
      <Spacer />
      <MenuBar menuItems={routes} />
    </Head>
  )
}
