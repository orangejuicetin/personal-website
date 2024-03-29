import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { SEO, Layout } from "../components";
import { DateText, SmallText, RegularParagraph, CenteringDiv } from "@design";

const Body = styled.div`
  margin: auto 17.5% 10%;
`;

const Section = styled.div`
  display: flex;
  padding: 2vw;
  margin: 1.75vw auto;
  border-radius: 1vw;
  box-shadow: -0.7vw 0.7vw 1.4vw #e9e9e9, 0.7vw -0.7vw 1.4vw #ffffff;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  font-size: ${props => props.theme.typography.small.fontSize};
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-right: 2vw;
`;

const Abstract = styled.div`
  margin: 1vw 0;
  font-style: italic;
  width: 60ch;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  font-size: 1.75vw;
  font-family: ${props => props.theme.typography.regular.fontFamily}, sans-serif;
  color: ${props => props.theme.colors.gray[1]};
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  &:hover {
    color: ${props => props.theme.colors.blue[1]};
    -moz-transition: all 0.15s ease-in;
    -o-transition: all 0.15s ease-in;
    -webkit-transition: all 0.15s ease-in;
    transition: all 0.15s ease-in;
  }
`;

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMdx;
  return (
    <Layout>
      <SEO
        title="thoughts"
        description="'the inner machinations of my mind are an enigma' - Patrick Star"
      />
      <Body>
        <CenteringDiv>
          <RegularParagraph>
            Literally just random thoughts I've written down, either because of
            a sudden, impassioned interest in the topic or just so I can
            consolidate them on all on a single page and make sense of it all.
            Nothing more, nothing less. I'm quite the open book, so apologies in
            advance if some topics aren't quite up to your fancy, but I do hope
            that most of the content is digestible.
          </RegularParagraph>
        </CenteringDiv>
        {posts.map(({ node: post }) => (
          <Section key={post.id}>
            {post.frontmatter.featuredImage && (
              <ImageContainer>
                <Img
                  fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
                />
              </ImageContainer>
            )}
            <TextContainer>
              <TitleLink to={post.frontmatter.slug}>
                {post.frontmatter.title}
              </TitleLink>
              <DateText>{post.frontmatter.date}</DateText>
              <Abstract>
                <SmallText>{post.frontmatter.abstract}</SmallText>
              </Abstract>
            </TextContainer>
          </Section>
        ))}
      </Body>
    </Layout>
  );
};

export const pageQuery = graphql`
  query blogIndex {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            date
            slug
            abstract
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
