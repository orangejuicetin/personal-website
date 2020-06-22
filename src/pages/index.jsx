import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import { Image } from "../components/Image"
import { MenuBar } from "../components/MenuBar"
import { Header } from "../components/Header"

import {
  PROJECTS_ROUTE,
  ABOUT_ROUTE,
  BLOG_ROUTE,
  GITHUB,
} from "../components/constants/routes"
// import korea from "../images/lotte_sunset.JPG"

const IndexPage = () => {
  const siteData = useStaticQuery(graphql`
    query indexTitleQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const routes = {
    [PROJECTS_ROUTE]: "Projects",
    [ABOUT_ROUTE]: "About",
    [BLOG_ROUTE]: "Blog",
  }
  return (
    <>
      <Header siteTitle="Justin Choi" />
      <MenuBar menuItems={routes} />
      <SEO title="Home" />
      <div>
        <div>
          <Image />
        </div>
        <div>
          <article>
            This is just some test and initialization for Juice's website :DD
          </article>
          <article>
            Some more text just so that I know I can get the hang of how this is
            supposed to be styled!
          </article>
          <Link to="/projects">Other works</Link>
        </div>
      </div>
      <div>More information here about general projects, links, etc.</div>
      <footer>
        © {new Date().getFullYear()}, made with {`<3`} by {` `}
        <a href={GITHUB}>{siteData.site.siteMetadata.author}</a>
      </footer>
    </>
  )
}

export default IndexPage
