import { useStaticQuery, graphql } from "gatsby";

export const useKoreaImages = () => {
  const korea = useStaticQuery(graphql`
    query {
      lotte: file(relativePath: { eq: "korea/lotte_sunset.JPG" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      lotteAlternate: file(relativePath: { eq: "korea/korea_1.JPG" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      busanDonkatsu: file(relativePath: { eq: "korea/busan_donkatsu.JPG" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      flowerGarden: file(relativePath: { eq: "korea/flower_garden.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      busanSunset: file(relativePath: { eq: "korea/busan_sunset.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);
  return korea;
};
