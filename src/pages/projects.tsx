import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { SEO, Layout } from "../components";
import {
  HeaderText,
  SubtitleText,
  SmallText,
  RegularParagraph,
  SmallParagraph,
} from "../styled";
import Img from "gatsby-image";

// layout
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 15%;
`;

const Section = styled.div`
  border-radius: 2vw;
  background: #ffffff;
  box-shadow: -0.65vw 0.65vw 2.4vw #f0f0f0, 0.65vw -0.65vw 2.4vw #ffffff;
  font-size: ${props => props.theme.typography.small.fontSize};
  font-family: ${props => props.theme.typography.small.fontFamily};
  margin: 1vw auto;
  padding: 3%;
`;

const BigSpacer = styled.div`
  margin: 2.5% auto 4%;
  flex-grow: 1;
`;
const MediumSpacer = styled.div`
  margin: 1.5% auto;
  flex-grow: 1;
`;

// text

const ExternalLink = styled.a`
  color: ${props => props.theme.colors.orange[0]};
  text-decoration: none;
  opacity: 1;
  -moz-transition: all 0.45s ease-in;
  -o-transition: all 0.45s ease-in;
  -webkit-transition: all 0.45s ease-in;
  transition: all 0.45s ease;
  &:hover {
    opacity: 0.65;
    -moz-transition: all 0.4s ease-in;
    -o-transition: all 0.4s ease-in;
    -webkit-transition: all 0.4s ease-in;
    transition: all 0.4s ease;
  }
`;

// pictures
const RowImageContainer = styled.div`
  margin: 2% auto;
  text-align: center;
`;

const LogoImage = styled.div`
  width: 7%;
  display: inline-block;
  margin: auto 4%;
  border-radius: 3vw;
  background: #ffffff;
  box-shadow: -0.4vw 0.4vw 1vw #d1d1d1, 0.4vw -0.4vw 1vw #ffffff;
`;

const GenericImage = styled(Img)`
  margin: 3% 6%;
  border-radius: 3vw;
  box-shadow: -0.5vw 0.5vw 2vw #cccccc, 0.5vw -0.5vw 2vw #ffffff;
`;

const ProjectsPage = () => {
  const picData = useStaticQuery(graphql`
    query {
      ampe_main: file(relativePath: { eq: "ampe/ampe-logo.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ampe_sky: file(relativePath: { eq: "ampe/ampe-logo-sky.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ampe_yellow: file(relativePath: { eq: "ampe/ampe-logo-yellow.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cord_19_clusters: file(
        relativePath: { eq: "gallery/cord-19_diagram.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cord_19_lda: file(
        relativePath: { eq: "gallery/cord-19_lda_sample.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Projects" />
      <Body>
        <HeaderText>Gallery</HeaderText>
        <RegularParagraph>
          Here are some projects that I wanted to display in fuller detail!
          Figured that I'd rather not use this space to just repeat my resume on
          this, but rather try to make something that helps explore these
          projects with some more detail and also allow some cool pics too!
        </RegularParagraph>
        <BigSpacer />
        <Section>
          <SubtitleText>Ampe</SubtitleText>
          <div>
            <SmallText>
              <em>May 2020 - Present</em>
            </SmallText>
          </div>
          <RowImageContainer>
            <LogoImage>
              <Img fluid={picData.ampe_main.childImageSharp.fluid} />
            </LogoImage>
            <LogoImage>
              <Img fluid={picData.ampe_sky.childImageSharp.fluid} />
            </LogoImage>
            <LogoImage>
              <Img fluid={picData.ampe_yellow.childImageSharp.fluid} />
            </LogoImage>
          </RowImageContainer>
          <MediumSpacer />
          <RegularParagraph>
            WIP right now, but it's what I'm working on for the summer! Helping
            create a startup that aims to innovate the way that we calendar
            social events and organize things with our friends. Fingers crossed
            we're gonna launch a beta by beginning of August, and as of right
            now it's looking super promising! Currently building it from the
            ground up using TypeScript, and our stack is React Native, an Apollo
            GraphQL server, and Nexus + Prisma in order to build our schema and
            map it to our PostgreSQL database. Sneak peek of our logo designed
            by the wonderful&nbsp;
            <ExternalLink
              href="https://andrewshen.net/"
              target="_blank"
              rel="noreferrer"
            >
              @andrewshen
            </ExternalLink>
            !!
          </RegularParagraph>
        </Section>
        <Section>
          <SubtitleText>CORD-19 Dataset Analysis + Modeling</SubtitleText>
          <div>
            <SmallText>
              <em>April 2020 - May 2020</em>
            </SmallText>
          </div>
          <GenericImage
            fluid={picData.cord_19_clusters.childImageSharp.fluid}
          />
          <BigSpacer />
          <RegularParagraph>
            Quite pertinent to the times, my{" "}
            <ExternalLink
              href="https://github.com/orangejuicetin/CIS545-Final-Project"
              target="_blank"
              rel="noreferrer"
            >
              final project
            </ExternalLink>{" "}
            for CIS545 was based around this dataset that was amassed thanks to
            AI2, Chan Zuckerberg Initiative, NIH and more. Called the "CORD-19"
            dataset (I swear, it wasn't a typo or anything on my end), it
            contained a massive number of research articles covering all topics
            related to coronaviruses, whether it be COVID-19, SARS, MERS, etc.
            in the form of <code>.json</code> files.
          </RegularParagraph>
          <RegularParagraph>
            From there, a lot of the work was first cleaning the data and
            getting it into a workable form. Although a lot of the later parts
            of the class was heavily involved with working with Apache
            Spark/Storm, Keras/mxnet, and Elastic MapReduce, for this specific
            dataset I didn't want to overdo it by having to startup an AWS
            instance every single time I wanted to work on something, and the
            files overall still could fit onto local memory on my computer so I
            said "screw it" and just downloaded 6 gigs of raw data onto my
            laptop to work on it locally with pandas. Great for convenience, but
            def a lot of times my Mac fan just started going berserk when I
            started using NLTK to tokenize the abstracts/articles and to create
            a tf-idf vector model of the corpus, so definitely not ideal, but
            honestly I still thought the setup was far more reliable compared to
            having a Google Colab session crash on me 4 different times within
            the span of an hour.
          </RegularParagraph>
          <RegularParagraph>
            Beyond that, it was then a matter of seeing if I could derive some
            useful conclusions from this data. First was the EDA, and using
            primarily seaborn, some of the visualizations I made involved the
            publishing date relative to how many papers were published (as
            expected, February and March 2020 had a MASSIVE spike in publishing
            ), which journals seemed most prolific in researching this area of
            coronaviruses, etc. And, as any ~quality~ data science project does,
            I tried to make sure the charts a) made sense and b) used a ton of
            pretty colors so people reading at least stop to read them :D
            Followed this up with some spicy feature extraction as well to prep
            it for the NLP analysis later down the line.
          </RegularParagraph>
          <RegularParagraph>
            Now, of course, came the Machine Learning™ that we all know and
            love, so after I made the appropriate vector space of the model, I
            put sklearn to work. First, instead of using PCA like normal to
            reduce dimensionality of the tf-idf matrix, I actually had to end up
            using Latent Semantic Analysis (LSA), a very similar method to PCA
            but better suited for a sparse matrix like this term-document one.
            Then I slapped on a k-means clustering algorithm in order to see if
            I could settle on a natural number of clusters that the data
            naturally grouped into. From there, each of the points of data had a
            cluster assignment appended to it (this is where we got the
            colorings for that viz at the very top), and the final step was
            running t-SNE to be able to visualize this fairly high-dimensional
            data and bring it down to a 2D setting we could see. Thus, the
            visualization itself is actually produced by the t-SNE algorithm,
            but the colors are actually just taken from the k-means and applied
            over top! Hence, it solidifies the validity of our clusterings
            initially found by k-means and implies that there must be some
            shared characteristics within each of these clusters (otherwise our
            model wouldn't have partitioned them this way otherwise!).
          </RegularParagraph>
          <GenericImage fluid={picData.cord_19_lda.childImageSharp.fluid} />
          <BigSpacer />
          <RegularParagraph>
            As some finishing touches, the last cool thing I got to do was to
            then ask exactly that: "what ARE in these clusters that they all
            share stuff in common?". And to answer that question, I ended up
            using Latent Dirichlet Allocation to find these topics, which is
            what you see above! Separated by lines, each section represents the
            common topics found in each cluster, and represent some of the
            things that tie these – at times, disparate – research papers
            together!
          </RegularParagraph>
          <RegularParagraph>
            Apologies for basically recapping the research that I did lol, but
            this was highkey one of the coolest things I've done with the stuff
            I've learned in school, which is definitely not the case for most
            classes you take. Not only was it extremely pertinent to things
            going on in our world right this instant, but also shows that there
            are takeaways that could actually provide immense utility to those
            helping in the fight against this pandemic-sized threat. Ultimately,
            a rewarding project overall in which, for once in my life, I felt
            that things I had learned in the classroom could indeed apply to the
            real world.
          </RegularParagraph>
        </Section>
        <Section>
          <SmallParagraph>
            If you've hit this, the rest isn't complete yet! And as a token of
            gratitude for your patience, here's a cute puppy gif to keep you
            company:
          </SmallParagraph>
          <BigSpacer />
          <RowImageContainer>
            <iframe
              src="https://giphy.com/embed/3oKIPd8EtLUiCYHbry"
              title="puppy"
              width="384"
              height="480"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </RowImageContainer>
        </Section>
      </Body>
    </Layout>
  );
};

export default ProjectsPage;
