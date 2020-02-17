import React from "react"
import { Link, graphql } from "gatsby"
import GeneralLayout from "../components/general-layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.scss'

export default ({ data }) => {
    return (
        <GeneralLayout>
        <SEO title="Articles" />
        <div id="article-index">
            <br />
            <h4>Article Index</h4>
            <p><em><b>{data.allMarkdownRemark.totalCount}</b> Posts</em></p>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <p><Link to={node.fields.slug}>{node.frontmatter.title}</Link><span> | {node.frontmatter.date}</span></p>
                </div>
            ))}
        </div>
        </GeneralLayout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark {
        totalCount
        edges {
            node {
            id
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
            }
            fields {
                slug
            }
            excerpt
            }
        }
        }
    }
`
