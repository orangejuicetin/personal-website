import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { LIGHT_ORANGE, BLACK, WHITE } from "./constants/colors"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `${WHITE}`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
        textAlign: `center`,
      }}
    >
      <h1 className="juicetinTitle">
        <Link
          to="/"
          style={{
            color: `${BLACK}`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
