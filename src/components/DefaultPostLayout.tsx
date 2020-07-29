import React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Img from "gatsby-image";
import { Layout } from "./Layout";
// import all the typography and common elements to be used in the MDX pages
import * as Style from "../styled";
import { SEO } from "./SEO";

const shortcodes = { Link, ...Style }; // Provide common components here

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin: auto 15% 10%;
  font-family: ${props => props.theme.typography.regular.fontFamily}, sans-serif;
  font-size: ${props => props.theme.typography.regular.fontSize};
  width: 70ch;
`;

const Figure = styled.figure`
  margin: 2vw 1vw;
`;

const FeaturedPic = styled(Img)`
  border-radius: 5%;
  box-shadow: -0.75vw 0.75vw 1vw #d6d6d6, 0.75vw -0.75vw 1vw #ffffff;
`;

const GoBack = styled(Link)`
  text-decoration: underline;
  font-size: 1.25vw;
  font-family: ${props => props.theme.typography.regular.fontFamily}, sans-serif;
  color: ${props => props.theme.colors.gray[1]};
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  &:hover {
    color: ${props => props.theme.colors.gray[0]};
    -moz-transition: all 0.15s ease-in;
    -o-transition: all 0.15s ease-in;
    -webkit-transition: all 0.15themes ease-in;
    transition: all 0.15s ease-in;
  }
`;

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <Page>
        <Container>
          <GoBack to="/blog">go back</GoBack>
          <h1>{mdx.frontmatter.title}</h1>
          <h4>{mdx.frontmatter.date}</h4>
          <hr />
          {mdx.frontmatter.featuredImage && (
            <Figure>
              <FeaturedPic
                fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid}
              />
              {mdx.frontmatter.featuredCaption && (
                <Style.Caption>{mdx.frontmatter.featuredCaption}</Style.Caption>
              )}
            </Figure>
          )}
          {!mdx.frontmatter.featuredCaption && <br />}
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </Container>
      </Page>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        author
        title
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        featuredCaption
      }
    }
  }
`;
