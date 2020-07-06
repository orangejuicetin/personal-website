import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import GlobalStyle from "./GlobalStyle"
import { Header } from "./Header"
import { GITHUB } from "./constants/routes"
// import { LIGHT_BLUE, LIGHT_GRAY, NAVY } from "./constants/colors"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1 0 auto;
`

const Footer = styled.footer`
  flex-shrink: 0;
  margin-left: 25px;
  margin-top: auto;
`

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer>
        © {new Date().getFullYear()}, made with {`<3`} by {` `}
        <a href={GITHUB}>{data.site.siteMetadata.author}</a>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
