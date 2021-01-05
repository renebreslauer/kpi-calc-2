import React from "react"
import { Link } from "gatsby"
import KpiSection from "../components/sections/KpiSection"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <KpiSection />
    <p>This is the homepage</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
