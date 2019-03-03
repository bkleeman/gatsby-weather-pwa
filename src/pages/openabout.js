import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/openlayout"

export default ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title} with OpenWeather</h1> 
    <p>
      The following data pulled from OpenWeather:
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`