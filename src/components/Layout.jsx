import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"

import { GITHUB } from "./constants/routes"
// import { LIGHT_BLUE, LIGHT_GRAY, NAVY } from "./constants/colors"

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
  return (
    <>
      <Header siteTitle="Justin Choi" />
      {children}
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
