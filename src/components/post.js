import React from "react"

import { MDXRenderer } from "gatsby-plugin-mdx"


import Layout from "./Layout"
import TagList from "./TagList"
//import SEO from "./seo"
//import PostTitle from "./post-title"
//import PostFooter from "./Footer"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location
}) => (
  <Layout location={location} title={title}>
    <div id="main">
      <div className="inner">
    <main>
      <h1>{ post.title }</h1>
      <TagList tags={post.tags || []} />
      <MDXRenderer>{post.body}</MDXRenderer>
    </main>
    </div>
    </div>
  </Layout>
)

export default Post
