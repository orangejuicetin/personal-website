import React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Img from "gatsby-image";
import { Layout } from "./Layout";
// import all the typography and common elements to be used in the MDX pages
import * as Style from "@design";
import { SEO } from "./SEO";


const shortcodes = { Link, ...Style}; // Provide common components here

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin: auto 15% 10%;
  font-family: '${props => props.theme.typography.regular.fontFamily}';
  font-size: ${props => props.theme.typography.regular.fontSize};
  width: 70ch;
`;

const BodyText = styled.div`
  font-family: "Cormorant Garamond", serif;
  color: ${Style.theme.colors.gray[0]};
`;

const Figure = styled.figure`
  margin: 2vw 1vw;
`;

const FeaturedPic = styled(Img)`
  border-radius: 5%;
  box-shadow: -0.75vw 0.75vw 1vw #d6d6d6, 0.75vw -0.75vw 1vw #ffffff;
`;

const GoBack = styled(Link)`
  position: relative;
  font-size: 1.25vw;
  font-family: ${props => props.theme.typography.regular.fontFamily}, sans-serif;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  color: ${Style.theme.colors.gray[1]};
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  &:hover,
  &:focus {
    color: ${Style.theme.colors.gray[0]};
    background-size: 100% 2px;
  }
`;

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.abstract}
        image={
          mdx.frontmatter.featuredImage &&
          mdx.frontmatter.featuredImage.childImageSharp.resize
        }
      />
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
          <BodyText>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </BodyText>
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
        abstract
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200) {
              src
              width
              height
            }
          }
        }
        featuredCaption
      }
    }
  }
`;
