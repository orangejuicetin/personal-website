import { useStaticQuery, graphql } from "gatsby";

export const useKoreaImages = () => {
  const korea = useStaticQuery(graphql`
    query {
      lotte: file(relativePath: { eq: "korea/lotte_sunset.JPG" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lotteAlternate: file(relativePath: { eq: "korea/korea_1.JPG" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      busanDonkatsu: file(relativePath: { eq: "korea/busan_donkatsu.JPG" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      flowerGarden: file(relativePath: { eq: "korea/flower_garden.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      busanSunset: file(relativePath: { eq: "korea/busan_sunset.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return korea;
};
