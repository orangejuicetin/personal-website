import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { NAVY, WHITE } from "./constants/colors"

export const ButtonLink = ({ route, name }) => {
  const StyledLink = styled(Link)`
    padding: 0.5rem 2rem;
    background-color: ${WHITE};
    border: solid;
    border-color: ${NAVY};
    text-decoration: none;
    border-radius: 20px;
    margin: 0rem 1rem;
  `

  const activeStyles = {
    background: NAVY,
    color: WHITE,
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
