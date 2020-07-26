import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import { SEO, Layout } from "../components";
import { DateText, SmallText, RegularParagraph, SubtitleText } from "../styled";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 15% 10%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1vw;
  background: #ffffff;
  box-shadow: -0.7vw 0.7vw 1.4vw #e9e9e9, 0.7vw -0.7vw 1.4vw #ffffff;
  font-size: ${props => props.theme.typography.small.fontSize};
  padding: 5%;
  width: 65%;
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

const Abstract = styled.div`
  margin: 2.5% 0 0;
  font-style: italic;
`;

const Spacer = styled.div`
  margin: 2.5%;
`;

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMdx;
  return (
    <Layout>
      <SEO title="Blog" />
      <Body>
        <SubtitleText>Thanks for stopping by!</SubtitleText>
        <RegularParagraph>
          Below are quite literally random thoughts I've simply written down,
          either because of a vested sudden <em>~ passionate ~</em> interest in
          the topic or just so I can consolidate them on all on a single page
          and make sense of it all. Nothing more, nothing less. I'm quite the
          open book, so apologies in advance if some topics suit your taste buds
          more than others, but I'll try my best to make most of the content
          digestable.
          <div>
            I've found writing to be quite therapeutic and a great way to simply
            practice how to convey ideas concisely but clearly, so I'm trying to
            make it more of a habit! If you ever have any thoughts, questions,
            or comments on anything I write, feel more than free to ping me
            through any method of contact, because I'm always down to Chat™
          </div>
          &nbsp;
          <div>- Justin</div>
        </RegularParagraph>
        <Spacer />
        {posts.map(({ node: post }) => (
          <Section key={post.id}>
            <TitleLink to={post.frontmatter.slug}>
              {post.frontmatter.title}
            </TitleLink>
            <DateText>{post.frontmatter.date}</DateText>
            <Abstract>
              <SmallText>{post.frontmatter.abstract}</SmallText>
            </Abstract>
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
          frontmatter {
            title
            author
            date
            slug
            abstract
          }
        }
      }
    }
  }
`;

export default BlogPage;
