import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { SEO, Layout, ButtonLink } from "../components";
import { SmallText, DateText } from "../style";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2.5% 15%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1vw;
  background: #ffffff;
  box-shadow: -0.7vw 0.7vw 1.4vw #d9d9d9, 0.7vw -0.7vw 1.4vw #ffffff;
  font-size: ${props => props.theme.typography.small.fontSize};
  padding: 3%;
  width: 90%;
`;

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMdx;
  return (
    <Layout>
      <SEO title="Blog" />
      <Body>
        {posts.map(({ node: post }) => (
          <Section key={post.id}>
            <ButtonLink
              route={post.frontmatter.slug}
              name={post.frontmatter.title}
            />
            <div>
              <DateText>{post.frontmatter.date}</DateText>
            </div>
            <p>{post.excerpt}</p>
          </Section>
        ))}
      </Body>
    </Layout>
  );
};

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            author
            date
            slug
          }
        }
      }
    }
  }
`;

export default BlogPage;
