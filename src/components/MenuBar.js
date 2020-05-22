import React from "react"
import Button from "./Button"

const MenuBar = ({ menuItems }) => {
  return (
    <div>
      {Object.keys(menuItems).map(route => (
        <Button key={route} route={route} name={menuItems[route]} />
      ))}
    </div>
  )
}

export default MenuBar
