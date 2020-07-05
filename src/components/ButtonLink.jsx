import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { DARK_GRAY } from "./constants/colors"

export const ButtonLink = ({ route, name }) => {
  const StyledLink = styled(Link)`
    padding: 0.5rem 2rem;
    text-decoration: none;
    margin: 0rem 1rem;
    font-size: 1.5em;
    color: ${DARK_GRAY};
    &:visited {
      text-decoration: none;
      color: ${DARK_GRAY};
    }
  `

  return <StyledLink to={route}>{name}</StyledLink>
}
