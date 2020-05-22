import { React } from "react"
import Link from "gatsby"

export const Button = ({ route }) => {
  return (
    <div>
      <Link to={route}>Hello there</Link>
    </div>
  )
}
