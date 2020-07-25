import React from "react";
import styled from "styled-components";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { ButtonLink } from "./ButtonLink";
import { SocialMedia } from "./SocialMedia";

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.white};
  margin: 2.5% 5%;
`;

const LogoContainer = styled.div`
  width: 8%;
  margin: 2%;
  -moz-transition: all 0.34s ease-in;
  -o-transition: all 0.34s ease-in;
  -webkit-transition: all 0.34s ease-in;
  transition: all 0.34s ease;
`;

const MenuBarContainer = styled.div`
  margin-left: 3%;
  display: flex;
  flex-grow: 4;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-grow: 1.5;
`;

const MenuButton = styled.div`
  display: inline-block;
  margin: 5%;
`;

const PersonalLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      personalLogo: file(relativePath: { eq: "logos/personal_logo.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 250) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Link to="/">
      <Img fluid={data.personalLogo.childImageSharp.fluid} />
    </Link>
  );
};

export const Header = () => {
  const menuItems = {
    // "/about": "Who Am I",
    "/projects": "Projects",
    "/blog": "Random Thoughts",
  };

  return (
    <Head>
      <LogoContainer>
        <PersonalLogo />
      </LogoContainer>
      <MenuBarContainer>
        {Object.keys(menuItems).map(route => (
          <MenuButton>
            <ButtonLink key={route} route={route} name={menuItems[route]} />
          </MenuButton>
        ))}
      </MenuBarContainer>
      <SocialMediaContainer>
        <SocialMedia />
      </SocialMediaContainer>
    </Head>
  );
};
