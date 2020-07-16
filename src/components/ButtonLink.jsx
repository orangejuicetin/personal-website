import React, { useContext } from "react"
import { Link } from "gatsby"
import styled, { ThemeContext } from "styled-components"

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.75vw;
  color: ${props => props.theme.colors.gray[1]};
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  &:hover {
    color: ${props => props.theme.colors.gray[0]};
    -moz-transition: all 0.15s ease-in;
    -o-transition: all 0.15s ease-in;
    -webkit-transition: all 0.15s ease-in;
    transition: all 0.15s ease-in;
  }
`

export const ButtonLink = ({ route, name }) => {
  const themeContext = useContext(ThemeContext)
  return (
    <StyledLink to={route} activeStyle={{ color: themeContext.colors.gray[0] }}>
      {name}
    </StyledLink>
  )
}
