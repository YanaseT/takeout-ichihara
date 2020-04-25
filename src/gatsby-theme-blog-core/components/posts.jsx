import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/Layout"

export default ({
  data: {
    allBlogPost: { totalCount, edges: blogs },
  },
}) => (
  <Layout>
    <strong>掲載店舗一覧</strong>
    {blogs.map(
      ({
        node: {
          id,
          title,
          slug
        },
      }) => (
        <div key={id}>
          <h2>
            <Link to={slug}>{title}</Link>
          </h2>
        </div>
      )
    )}
  </Layout>
)

export const query = graphql`
query {
  allBlogPost{
    totalCount
    edges {
      node {
        id
        slug
        title
      }
    }
  }
}
  `
