import { useStaticQuery, graphql } from "gatsby";

export const useGallery = () => {
  const picData = useStaticQuery(graphql`
    query {
      personalPic: file(
        relativePath: { eq: "gallery/puertorico_juicetin.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sleepy: file(relativePath: { eq: "gallery/sleepy_juicetin.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      christmas: file(relativePath: { eq: "gallery/christmas.JPG" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return picData;
};
