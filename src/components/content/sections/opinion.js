import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import MoreArrow from "../../../images/section-more-arrow.svg"

const Opinion = ({data}) => (
    <StaticQuery 
        query={graphql`
            query OpinionArticles {
                opinion: allMarkdownRemark(filter: {frontmatter: {category: {eq: "opinion"}}}) {
                    edges {
                        node {
                            frontmatter {
                                title
                                tags
                                category
                                date(fromNow: true)
                            }
                            excerpt
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <>
                <h3>Opinion <MoreArrow /></h3>
                {data.opinion.edges.map(({ node }) => (
                    <>
                    <Link to={node.fields.slug} className="article-preview">
                        <h4>{node.frontmatter.title}</h4>
                        <p className="excerpt">{node.excerpt}</p>
                        <p className="date">{node.frontmatter.date}</p>
                    </Link>
                    </>
                ))}
            </>
        )}
    />
);

export default Opinion;