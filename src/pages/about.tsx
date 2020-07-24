import React from "react";
import styled from "styled-components";
import { SEO, Layout } from "../components";
import { useGallery } from "../hooks";
import Img from "gatsby-image";
import { HighlightText, RegularText } from "../theme";

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: auto 10%;
`;

const TopLeftSide = styled.div`
  grid-area: 1 / 1 / 4 / 3;
  /* text-align: center; */
  margin: 5% auto;
`;

const TopRightSide = styled.div`
  grid-area: 1 / 3 / 4 / 6;
  margin: 7%;
`;

const Bottom = styled.div`
  grid-area: 4 / 1 / 6 / 6;
`;

const ShadowedMainPic = styled(Img)`
  border-radius: 5%;
  box-shadow: -1vw 1vw 2vw #d9d9d9, 1vw -1vw 2vw #ffffff;
`;

const AboutPage = () => {
  const { christmas } = useGallery();
  return (
    <Layout>
      <SEO title="Who Am I" />
      <Body>
        <TopLeftSide>
          <HighlightText>Good question!</HighlightText>
          <RegularText>
            Not sure to be quite honest; I will say, I think that this page
            needs a bit more work
          </RegularText>
        </TopLeftSide>
        <TopRightSide>
          <ShadowedMainPic fluid={christmas.childImageSharp.fluid} />
        </TopRightSide>
        <Bottom> Hello </Bottom>
      </Body>
    </Layout>
  );
};

export default AboutPage;
