import { React } from "react"
import Link from "gatsby"

export const Button = ({ route, name }) => {
  return (
    <div>
      <Link to={route}>{name}</Link>
    </div>
  )
}
