import React from "react"
import { ButtonLink } from "./ButtonLink"

const MenuBar = ({ menuItems }) => {
  return (
    <div>
      {Object.keys(menuItems).map(route => (
        <ButtonLink key={route} route={route} name={menuItems[route]} />
      ))}
    </div>
  )
}

export default MenuBar
