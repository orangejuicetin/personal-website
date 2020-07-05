import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import GlobalStyle from "./GlobalStyle"
import { Header } from "./Header"
import { GITHUB } from "./constants/routes"
// import { LIGHT_BLUE, LIGHT_GRAY, NAVY } from "./constants/colors"

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-column-gap: px;
  grid-row-gap: 0px;
`

const Body = styled.div`
  width: 100%;
  height: 100%;
`

const Footer = styled.footer`
  grid-area: 2 / 1 / 3 / 2;
  align-content: center;
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
    <>
      <GlobalStyle />
      <Header siteTitle="Justin Choi" />
      <PageContainer>
        <Body>{children}</Body>
        <Footer>
          © {new Date().getFullYear()}, made with {`<3`} by {` `}
          <a href={GITHUB}>{data.site.siteMetadata.author}</a>
        </Footer>
      </PageContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
