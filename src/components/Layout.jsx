import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyle"

import { GITHUB } from "./constants/routes"
// import { LIGHT_BLUE, LIGHT_GRAY, NAVY } from "./constants/colors"

export const PageContainer = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-content: center;
  margin: 3rem auto;
`

const Footer = styled.footer`
  position: relative;
  margin-top: -180px;
  height: 180px;
  clear: both;
`

export const Layout = ({ children }) => {
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
    <PageContainer>
      <GlobalStyle />
      <Header siteTitle="Justin Choi" />
      {children}
      <Footer>
        © {new Date().getFullYear()}, made with {`<3`} by {` `}
        <a href={GITHUB}>{data.site.siteMetadata.author}</a>
      </Footer>
    </PageContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
