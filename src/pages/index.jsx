import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to Dialect online.</p>
    <p>Now build something great.</p>
    <Link to="/create/">Create a game</Link> <br />
    <Link to="/join/">Join a game</Link>
  </Layout>
)

export default IndexPage
