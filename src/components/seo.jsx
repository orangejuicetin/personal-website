/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultDescription: description
            author
            siteUrl: url
            twitterUsername
          }
        }
      }
    `
  )

  const {
    defaultDescription,
    siteUrl,
    author,
    twitterUsername,
  } = site.siteMetadata

  const defaultImage = "../images/gallery/puertorico_juicetin.png"

  const seo = {
    title: title,
    author: author,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    image: defaultImage,
    twitterUsername: twitterUsername,
  }

  return (
    <Helmet title={seo.title} titleTemplate={`%s · ${seo.author}`}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={image ? image : seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && (
        <meta property="og:image" content={image ? image : seo.image} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.twitterUsername && (
        <meta name="twitter:creator" content={seo.twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && (
        <meta name="twitter:image" content={image ? image : seo.image} />
      )}
    </Helmet>
  )
}

SEO.defaultProps = {
  description: ``,
  lang: `en`,
  meta: [],
  title: ``,
  image: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default SEO
