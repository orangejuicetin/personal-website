import React from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { theme } from "../theme"
import { Header } from "./Header"

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "Avenir Next", sans-serif;  
    color: ${props => props.theme.colors.gray[0]}; 
    margin: 0; 
    padding: 0; 
    width: 100%; 
    height: 100%; 
  }   
  @font-face {
    font-family: 'Perpetua';
      src: url('/static/fonts/Perpetua.ttf');
      font-weight: normal;
  }
  @font-face {
    font-family: 'Perpetua Bold';
    src: url('/static/fonts/Perpetua-Bold.ttf');
    font-weight: bold;
  }
`

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
  font-size: 0.75rem;
  color: ${props => props.theme.colors.gray[1]};
`
const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.gray[1]};
  &:hover {
    color: ${props => props.theme.colors.orange[0]};
  }
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer>
        © {new Date().getFullYear()}, made with {`<3`} by {` `}
        <StyledLink href={"https://github.com/orangejuicetin"}>
          {data.site.siteMetadata.author}
        </StyledLink>
      </Footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
