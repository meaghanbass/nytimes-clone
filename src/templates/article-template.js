import React from "react"
import { graphql } from "gatsby"
import GeneralLayout from "../components/general-layout"
import "../styles/article.scss"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <GeneralLayout>
      <div className="article-template">
        <article>
          <div>
            <h4>{post.frontmatter.category}</h4>
            <h1>{post.frontmatter.title}</h1>
            <p className="publish-date">Published: {post.frontmatter.date}</p>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </article>

        <aside>
          <img src="https://via.placeholder.com/295x800?text=295x800+Ad" alt="ad" />
        </aside>
      </div>
    </GeneralLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
        date(fromNow: false, formatString: "MMMM DD, YYYY")
      }
    }
  }
`