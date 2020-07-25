import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { theme } from "../theme";
import { Header } from "./Header";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "Avenir Next", sans-serif;  
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
  flex: 1 0 auto;
`;

const Footer = styled.footer`
  flex-shrink: 0;
  margin-left: 2vw;
  margin-top: auto;
  font-size: 1vw;
  color: ${props => props.theme.colors.gray[1]};
`;
const StyledLink = styled.a`
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
          © {new Date().getFullYear()}, made with {`<3`} by&nbsp;
          <StyledLink
            href="https://github.com/orangejuicetin"
            target="_blank"
            rel="noreferrer"
          >
            {data.site.siteMetadata.author}
          </StyledLink>
        </div>
        Want to contact me? Shoot me an email at&nbsp;
        <StyledLink href="mailto:juicetin@seas.upenn.edu">
          juicetin@seas.upenn.edu
        </StyledLink>
        &nbsp;~
      </Footer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
