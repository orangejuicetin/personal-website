/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import MenuBar from "./MenuBar"
import Header from "./Header"

import {
  PROJECTS_ROUTE,
  ABOUT_ROUTE,
  GITHUB,
  BLOG_ROUTE,
} from "./constants/routes"
import { LIGHT_BLUE, LIGHT_GRAY, NAVY } from "./constants/colors"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  const routes = {
    [PROJECTS_ROUTE]: "Projects",
    [ABOUT_ROUTE]: "About",
    [BLOG_ROUTE]: "Blog",
  }
  return (
    <>
      <Header siteTitle="Justin Choi" />
      <MenuBar menuItems={routes} />
      <div className="section">{children}</div>
      <footer>
        © {new Date().getFullYear()}, made with {`<3`} by {` `}
        <a href={GITHUB}>{data.site.siteMetadata.author}</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
