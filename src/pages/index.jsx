import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { Layout } from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import korea from "../images/lotte_sunset.JPG"

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: 1.5fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`

const TopLeft = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  justify-content: center;
  margin: 0em 2em 1em;
  font-size: 1.9rem;
`
const TopRight = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  margin: 1em;
`
const Bottom = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  justify-content: center;
  align-items: center;
  margin: 2em;
`

const PersonalPic = () => {
  const picData = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "ksa_roof_pic.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={picData.fileName.childImageSharp.fluid} />
}

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Body>
        <TopLeft>
          <p>
            Hi there! I'm a rising junior at the University of Pennsylvania
            currently studying computer science, but outside of trying to learn
            make my React components <em>not</em> ugly (CSS blows) and not
            failing school work, I really enjoy running at either extremes of
            the day, playing guitar, reading some super old books, and admiring
            puppies on Instagram. feel free to browse around to check out what
            else i do!
          </p>
        </TopLeft>
        <TopRight>
          <PersonalPic />
        </TopRight>
        <Bottom>
          <p>
            Some of the other things that i've been involved with are: test text
            repeated over and over: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Massa massa ultricies mi quis hendrerit dolor
            magna eget. Malesuada proin libero nunc consequat interdum varius
            sit amet mattis. Accumsan sit amet nulla facilisi morbi tempus.
            Consectetur libero id faucibus nisl tincidunt eget nullam. Placerat
            duis ultricies lacus sed. Vivamus at augue eget arcu. Et tortor
            consequat id porta nibh ven Pretium nibh ipsum consequat nisl vel.
            Magna eget est lorem ipsum. Egestas dui id ornare arcu odio ut sem.
            Iaculis eu non diam phasellus. Gravida dictum fusce ut placerat
            orci.
          </p>
          <p>
            Consectetur adipiscing elit ut aliquam purus sit amet. Risus
            ultricies tristique nulla aliquet. Id aliquet lectus proin nibh
            nisl. Consectetur adipiscing elit ut aliquam purus sit amet luctus.
            Cras sed felis eget velit. Egestas purus viverra accumsan in nisl.
            Morbi tincidunt ornare massa eget egestas purus viverra. Iaculis
            nunc sed augue lacus viverra vitae congue eu consequat. A arcu
            cursus vitae congue mauris rhoncus aenean vel. Cursus mattis
            molestie a iaculis. Commodo nulla facilisi nullam vehicula ipsum a
            arcu. Erat nam at lectus urna. Commodo quis imperdiet massa
            tincidunt nunc pulvinar
          </p>
          <p>
            sapien et. Turpis massa sed elementum tempus egestas sed. Aliquam
            nulla facilisi cras fermentum odio eu feugiat. A scelerisque purus
            semper eget duis at tellus at. Molestie at elementum eu facilisis
            sed odio morbi. Habitant morbi tristique senectus et netus et
            malesuada fames. Nulla pharetra diam sit amet nisl suscipit. Ornare
            suspendisse sed nisi lacus sed. Consectetur adipiscing elit
            pellentesque habitant morbi tristique. Augue eget arcu dictum varius
            duis at consectetur lorem donec.
          </p>
        </Bottom>
      </Body>
    </Layout>
  )
}

export default IndexPage
