import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./page_one.scss"

const SecondPage = () => (
  <Layout>
    <SEO title="Page one" />
    <div className="content">
      <h1>Hi from the 1 page(green)</h1>

      <a href="/page_two">Page 2</a>
    </div>
  </Layout>
)

export default SecondPage
