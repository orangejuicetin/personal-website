import React, { useContext } from "react"
import { Link } from "gatsby"
import styled, { ThemeContext } from "styled-components"

const StyledLink = styled(Link)`
  padding: 0.5rem 2rem;
  text-decoration: none;
  margin: 0rem 1rem;
  font-size: 1.75vw;
  color: ${props => props.theme.colors.gray[1]};
  &:hover {
    color: ${props => props.theme.colors.gray[0]};
    -moz-transition: all 0.27s ease-in;
    -o-transition: all 0.27s ease-in;
    -webkit-transition: all 0.27s ease-in;
    transition: all 0.27s ease-in;
  }
`

export const ButtonLink = ({ route, name }) => {
  const themeContext = useContext(ThemeContext)
  console.log(themeContext)
  return (
    <StyledLink to={route} activeStyle={{ color: themeContext.colors.gray[0] }}>
      {name}
    </StyledLink>
  )
}
