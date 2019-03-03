import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/darklayout"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title} with DarkSky</h1> 
    <p>
      The following info pulled from the DarkSky API:
    </p>
  </Layout>
)
