import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import { Layout } from "./Layout";
// import all the typography and common elements to be used in the MDX pages
import * as Style from "../style";

const shortcodes = { Link, ...Style }; // Provide common components here

const Page = styled.div`
  margin: auto 15% 10%;
`;

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <Page>
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
