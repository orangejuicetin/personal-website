import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "./Header"
import { GlobalStyle } from "./styles/GlobalStyle"
import { MenuBar } from "../components/MenuBar"

import {
  PROJECTS_ROUTE,
  ABOUT_ROUTE,
  BLOG_ROUTE,
  GITHUB,
} from "../components/constants/routes"
// import { LIGHT_BLUE, LIGHT_GRAY, NAVY } from "./constants/colors"

// const PageContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-template-rows: 0.2fr 1fr 0.2fr;
//   grid-column-gap: px;
//   grid-row-gap: 0px;
// `
const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.2sfr;
  grid-column-gap: px;
  grid-row-gap: 0px;
`

const Body = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`
const Footer = styled.footer`
  grid-area: 2 / 1 / 3 / 2;
  align-content: center;
`

export const Layout = ({ children }) => {
  const routes = {
    [ABOUT_ROUTE]: "About",
    [PROJECTS_ROUTE]: "Projects",
    [BLOG_ROUTE]: "Random Thoughts",
  }

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
      <MenuBar menuItems={routes} />
      <PageContainer>
        <GlobalStyle />
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
