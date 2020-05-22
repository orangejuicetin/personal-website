import React from "react"
import Button from "./Button"

const MenuBar = () => {
  const menuItems = ["/projects", "/about", "/blog"]
  return (
    <div>
      {menuItems.map(route => (
        <Button key={route} route={route} />
      ))}
    </div>
  )
}

export default MenuBar
