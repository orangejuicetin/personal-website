import React from "react";
import styled from "styled-components";
import { SEO, Layout } from "../components";
import { useGallery, useKoreaImages } from "../hooks";
import Img from "gatsby-image";
import KoreanFlag from "../../images/assets/korean_flag.svg";
import {
  SubtitleText,
  RegularParagraph,
  RegularText,
  CenteringDiv,
  Caption,
} from "@design";

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: auto 10%;
`;

const TopLeftSide = styled.div`
  grid-area: 1 / 1 / 4 / 3;
  margin: 5%;
`;

const TopRightSide = styled.div`
  grid-area: 1 / 3 / 4 / 6;
  margin: 5%;
`;

const Bottom = styled.div`
  grid-area: 4 / 1 / 6 / 6;
  margin: auto;
`;

const ShadowedMainPic = styled(Img)`
  border-radius: 5%;
  box-shadow: -1vw 1vw 2vw #d9d9d9, 1vw -1vw 2vw #ffffff;
`;

const PicRow = styled.div`
  display: flex;
`;

const ShadowedGeneralPic = styled(Img)`
  border-radius: 10%;
  box-shadow: -0.5vw 0.5vw 1vw #d1d1d1, 0.5vw -0.5vw 1vw #ffffff;
`;

const Figure = styled.figure`
  margin: 5% 2%;
`;

const Svg = styled.img`
  display: inline-block;
  width: 5%;
  vertical-align: text-bottom;
`;

const AboutPage = () => {
  // const { oidd_290 } = useGallery();
  const {
    lotte,
    lotteAlternate,
    busanDonkatsu,
    flowerGarden,
    busanSunset,
  } = useKoreaImages();

  return (
    <Layout>
      <SEO
        title="about"
        // image={oidd_290.childImageSharp.resize}
        description="what i do other than scroll through twitter"
      />
      <Body>
        {/* <TopRightSide>
          <ShadowedMainPic fluid={oidd_290.childImageSharp.fluid} />
        </TopRightSide>
        <TopLeftSide>
          <SubtitleText>who am i?</SubtitleText>
          <br />
          <br />
          <RegularText>
            I think that question is better answered through show rather than
            tell, hence why I decided to make this website of mine; thought I
            could add a personal touch.
          </RegularText>
        </TopLeftSide> */}
        <Bottom>
          <CenteringDiv>
            <RegularParagraph>
              I think that these pics descibe more of my life than any short
              pithy Twitter bio ever could. They're subject to change given the
              day and my mood, but hopefully some can stay as constants and
              serve as good reminders to me on the not-so-good days :))
              <div>
                On the note of memories (and the unfortunate lack of traveling
                due to COVID ), I really wanna go back to Korea&nbsp;
                <Svg src={KoreanFlag} alt="korea_flag" />
                &nbsp;one of these days – if there's any chance, y'know, flying
                becomes normal again. So, in the mean time, here's some nice
                memories for you to enjoy:
              </div>
            </RegularParagraph>
          </CenteringDiv>
          <PicRow>
            <Figure>
              <ShadowedGeneralPic fluid={lotte.childImageSharp.fluid} />
              <Caption>
                Isn't this one so pretty? This was at the top of Lotte Tower,
                and I got soooo lucky to capture these colors; if you look
                closely enough in the direction of the sunset, you can see 남산
                타워 (Namsan Tower), which is a super cool spot in Seoul with
                cute locks on its fence (!!)
              </Caption>
            </Figure>
            <div>
              <Figure>
                <ShadowedGeneralPic
                  fluid={busanDonkatsu.childImageSharp.fluid}
                />
                <Caption>
                  This was 돈까스 (donkatsu) down in Busan the same summer, and
                  it was sooo good, especially after a long train ride from
                  Seoul. brb gonna go cry for a bit T.T
                </Caption>
              </Figure>
              <Figure>
                <ShadowedGeneralPic
                  fluid={lotteAlternate.childImageSharp.fluid}
                />
                <Caption>
                  Also at Lotte tower, but just more pretty shades :D
                </Caption>
              </Figure>
            </div>
          </PicRow>
          <PicRow>
            <Figure>
              <ShadowedGeneralPic fluid={flowerGarden.childImageSharp.fluid} />
              <Caption>
                A flower garden that I stumbled upon in Busan, and I just
                thought this pic was cute ~ the banners just say "happy wish"
                and "flower garden" haha
              </Caption>
            </Figure>
            <Figure>
              <ShadowedGeneralPic fluid={busanSunset.childImageSharp.fluid} />
              <Caption>
                As you can tell, I sorta have a thing for nice sunsets LOL, this
                one was also in Busan and I thought it was so nice to gaze at
                :')
              </Caption>
            </Figure>
          </PicRow>
        </Bottom>
      </Body>
    </Layout>
  );
};

export default AboutPage;
