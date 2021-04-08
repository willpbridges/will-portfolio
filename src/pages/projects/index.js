/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import PostList from '../../components/post-list'
import Config from '../../../config'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" description={Config.siteDescription} path="" />
    <h2>Other Projects</h2>
    <PostList posts={data.allMarkdownRemark.edges} />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___value], order: ASC }
      filter: { 
        fileAbsolutePath: { regex: "/index.md$/" }
        frontmatter: {
          tags: {
            in: "projects"
          }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            tags
            excerpt
            cover {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
