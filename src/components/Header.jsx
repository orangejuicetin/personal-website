import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { ButtonLink } from "./ButtonLink"

const Head = styled.header`
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.white};
  margin: 2.5% 5%;
`

const LogoContainer = styled.div`
  width: 5%;
`
const MenuBarContainer = styled.ul`
  margin-left: 4%;
  flex-grow: 1;
`

const MenuButton = styled.li`
  display: inline-block;
  margin: 2rem;
`

const PersonalLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      personalLogo: file(relativePath: { eq: "logos/personal_logo.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Link to="/">
      <Img fluid={data.personalLogo.childImageSharp.fluid} />
    </Link>
  )
}

// const SocialMedia = () => {}

export const Header = () => {
  const menuItems = {
    // "/about": "Who Am I",
    "/projects": "Projects",
    "/blog": "Random Thoughts",
  }

  return (
    <Head>
      <LogoContainer>
        <PersonalLogo />
      </LogoContainer>
      <MenuBarContainer>
        {Object.keys(menuItems).map(route => (
          <MenuButton>
            <ButtonLink key={route} route={route} name={menuItems[route]} />
          </MenuButton>
        ))}
      </MenuBarContainer>
    </Head>
  )
}
