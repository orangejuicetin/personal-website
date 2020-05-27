import { React } from "react"
import Link from "gatsby"
import styled from "styled-components"
import { NAVY, WHITE } from "./constants/colors"

export const ButtonLink = ({ route, name }) => {
  const styles = `
    border-radius: 0rem;
    padding: 0.5rem 1rem;
    background: ${NAVY};
    color: ${WHITE};
    display: inline-block;
    margin-bottom: 1rem;
    text-decoration: none;
    border-radius: 4px;
  `

  const StyledLink = styled(Link)`
    ${styles}
  `

  return <StyledLink to={route}>{name}</StyledLink>
}