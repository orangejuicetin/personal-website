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
          resize(width: 1200) {
            src
            width
            height
          }
        }
      }
      sleepy: file(relativePath: { eq: "gallery/sleepy_juicetin.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      oidd_290: file(relativePath: { eq: "gallery/oidd_290.JPG" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
          resize(width: 1200) {
            src
            width
            height
          }
        }
      }
    }
  `);
  return picData;
};
