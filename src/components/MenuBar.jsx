import React from "react"
import styled from "styled-components"
import { ButtonLink } from "./ButtonLink"

const MenuContainer = styled.div`
  padding: 1em;
`

export const MenuBar = ({ menuItems }) => {
  return (
    <MenuContainer>
      {Object.keys(menuItems).map(route => (
        <ButtonLink key={route} route={route} name={menuItems[route]} />
      ))}
    </MenuContainer>
  )
}
