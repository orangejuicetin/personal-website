import React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "./Layout";
// import all the typography and common elements to be used in the MDX pages
import * as Style from "../style";
import { SEO } from "./SEO";

const shortcodes = { Link, ...Style }; // Provide common components here

const Page = styled.div`
  margin: auto 17.5% 10%;
  font-family: "Montserrat", sans-serif;
  font-size: ${props => props.theme.typography.regular.fontSize};
`;

const GoBack = styled(Link)`
  text-decoration: underline;
  font-size: 1.25vw;
  font-family: "Avenir Next", sans-serif;
  color: ${props => props.theme.colors.gray[1]};
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  &:hover {
    color: ${props => props.theme.colors.gray[0]};
    -moz-transition: all 0.15s ease-in;
    -o-transition: all 0.15s ease-in;
    -webkit-transition: all 0.15s ease-in;
    transition: all 0.15s ease-in;
  }
`;

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <Page>
        <GoBack to="/blog">go back</GoBack>
        <Style.HighlightText>{mdx.frontmatter.title}</Style.HighlightText>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
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
      }
    }
  }
`;
