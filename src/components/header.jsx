import { Link } from "gatsby"
import React from "react"

import '../css/header.css'

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <h1 className="site-title">
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </nav>
  </header>
)

export default Header
