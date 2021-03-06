import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { theme, ThemeType } from "@design";
import { Header } from "./Header";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  html {
    font-family: "Avenir Next", sans-serif;  
    font-display: swap; 
    color: ${props => props.theme.colors.gray[0]}; 
    margin: 0; 
    padding: 0; 
    width: 100%; 
    height: 100%; 
  }   
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Footer = styled.footer`
  font-family: ${props => props.theme.typography.regular.fontFamily};
  flex-shrink: 0;
  margin: 2vw;
  padding: 2vw;
  font-size: 1vw;
  color: ${props => props.theme.colors.gray[1]};
`;

const StyledExternalLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.blue[0]};
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  &:hover {
    opacity: 0.7;
    -moz-transition: all 0.15s ease-in;
    -o-transition: all 0.15s ease-in;
    -webkit-transition: all 0.15s ease-in;
    transition: all 0.15s ease-in;
  }
`;

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer>
        <div>
          © {new Date().getFullYear()}, thrown together by&nbsp;
          <StyledExternalLink
            href="https://github.com/orangejuicetin"
            target="_blank"
            rel="noreferrer"
          >
            {data.site.siteMetadata.author}
          </StyledExternalLink>
        </div>
        Want to contact me? Shoot me an email at&nbsp;
        <StyledExternalLink href="mailto:juicetin@seas.upenn.edu">
          juicetin@seas.upenn.edu
        </StyledExternalLink>
        &nbsp;~
      </Footer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
