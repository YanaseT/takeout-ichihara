import React from "react"
import { Link } from 'gatsby'
/*import Layout from "./Layout"
import Post from "./post"
import { graphql } from "gatsby"*/


const Tag = ({ pageContext }) => {
  const { posts, tagName } = pageContext
  return (
    <div>
      <div>
        {`${tagName}`}の店舗
      </div>
      <div>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={post.slug}>
                  {post.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Tag
/*const Tags = ({ pageContext, data }) => {
  return (
    <Layout>
      <h1>
        {pageContext.tags} ({data.allBlogPost.totalCount}件)
      </h1>
      {data.allBlogPost.edges.map(({ node }) => {
        return (
          <Post
            slug={node.slug}
            title={node.title}
            tags={node.tags}
            excerpt={node.excerpt}
          />
        )
      })}
    </Layout>
  )
}

export const query = graphql`
query($tag: String) {
  allBlogPost(
    filter: { tags: { in: [$tag] } }
) {
  totalCount
  edges {
    node {
      id
      title
      excerpt
    }
   }
 }
}
 `
*/
