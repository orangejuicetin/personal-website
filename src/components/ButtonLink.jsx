import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { DARK_GRAY, GRAY } from "./constants/colors"

export const ButtonLink = ({ route, name }) => {
  const StyledLink = styled(Link)`
    padding: 0.5rem 2rem;
    text-decoration: none;
    margin: 0rem 1rem;
    font-size: 1.5em;
    color: ${GRAY};
    &:hover {
      color: ${DARK_GRAY};
      -moz-transition: all 0.27s ease-in;
      -o-transition: all 0.27s ease-in;
      -webkit-transition: all 0.27s ease-in;
      transition: all 0.27s ease-in;
    }
  `

  return (
    <StyledLink to={route} activeStyle={{ color: DARK_GRAY }}>
      {name}
    </StyledLink>
  )
}
