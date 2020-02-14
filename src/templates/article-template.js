import React from "react"
import { graphql } from "gatsby"
import GeneralLayout from "../components/general-layout"
import "../styles/article.scss"
import Img from "gatsby-image"
import EndOfContentIcon from "../images/nyt-icon-black.svg"

export default ({ data }) => {
  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <GeneralLayout>
      <div className="article-template">
        <article>
          <div>
            <h4>{post.frontmatter.category}</h4>
            <h1>{post.frontmatter.title}</h1>
            <p className="publish-date">Published: {post.frontmatter.date}</p>
            <Img fluid={featuredImgFluid} />
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
            <EndOfContentIcon />
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`