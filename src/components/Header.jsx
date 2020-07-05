import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { MenuBar } from "../components/MenuBar"

import { BLACK, WHITE } from "./constants/colors"
import {
  PROJECTS_ROUTE,
  ABOUT_ROUTE,
  BLOG_ROUTE,
} from "../components/constants/routes"

const Head = styled.header`
  background: ${WHITE};
  padding: 1em;
  margin: 1rem 2rem 0rem;
`

const Title = styled(Link)`
  color: ${BLACK};
  text-decoration: none;
  font-size: 2.5em;
  display: inline-block;
`
export const Header = ({ siteTitle }) => {
  const routes = {
    [ABOUT_ROUTE]: "About",
    [PROJECTS_ROUTE]: "Projects",
    [BLOG_ROUTE]: "Random Thoughts",
  }

  return (
    <Head>
      <Title to="/">{siteTitle}</Title>
      <MenuBar menuItems={routes} />
    </Head>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
