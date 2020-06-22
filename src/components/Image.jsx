import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              sizes(maxWidth: 300) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  `)

  return <Img fixed={data.images.edges[1]} />
}
