import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "ksa_roof_pic.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.image.childImageSharp.fixed} />
}

export default Image
