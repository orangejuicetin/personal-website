import React from "react"
import { ButtonLink } from "./ButtonLink"

export const MenuBar = ({ menuItems }) => {
  return (
    <div>
      {Object.keys(menuItems).map(route => (
        <ButtonLink key={route} route={route} name={menuItems[route]} />
      ))}
    </div>
  )
}
