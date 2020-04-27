import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/Layout"
import TagList from "../../components/TagList"

export default ({
  data: {
    allBlogPost: { totalCount, edges: blogs },
  },
}) => (
  <Layout>
   <div id="main">
      <div className="inner">
    <h1>掲載店舗一覧 {totalCount}</h1>
    {blogs.map(
      ({
        node: {
          id,
          title,
          slug,
          tags,
        },
      }) => (<div key={id}>
        <h2 style={{
            margin : `5px`,
            fontSize : `30px`,
        }}>
          <Link to={slug}>{title}</Link>
        </h2>
        <TagList tags={tags || []} />
      </div>)
    )}
    </div>
    </div>
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
        tags
      }
    }
  }
}
  `
