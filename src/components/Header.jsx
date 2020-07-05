import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { BLACK, WHITE } from "./constants/colors"

const Head = styled.header`
  background: ${WHITE};
  padding: 1.25em;
  margin: 1rem 2rem 0rem;
`
const Title = styled(Link)`
  color: ${BLACK};
  text-decoration: none;
  font-size: 2.5em;
`
export const Header = ({ siteTitle }) => (
  <Head>
    <Title to="/">{siteTitle}</Title>
  </Head>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
