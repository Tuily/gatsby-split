import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./page_two.scss"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="content">
      <h1>Hi from the 2 page(red)</h1>
      <a href="/page_one">Page 1</a>
    </div>
  </Layout>
)

export default SecondPage
