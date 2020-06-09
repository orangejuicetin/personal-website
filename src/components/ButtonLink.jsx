import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { NAVY, WHITE } from "./constants/colors"

export const ButtonLink = ({ route, name }) => {
  const StyledLink = styled(Link)`
    border-radius: 0rem;
    padding: 0.5rem 1rem;
    background: ${NAVY};
    color: ${WHITE};
    display: inline-block;
    margin-bottom: 1rem;
    text-decoration: none;
    border-radius: 4px;
  `

  const activeStyles = {
    background: WHITE,
    color: NAVY,
    display: "inline-block",
    textDecoration: "none",
    marginBottom: "1rem",
  }

  return (
    <StyledLink to={route} activeStyle={activeStyles}>
      {name}
    </StyledLink>
  )
}
