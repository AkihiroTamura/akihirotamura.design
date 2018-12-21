import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProjectList from '../components/ProjectList'
import Project from '../components/Project'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const Index = ({ data }) => {
  const posts = data.allContentfulPost.edges

  return (
    <Layout>
      <SEO />
        <Container>
          <ProjectList>
            {posts.map(({ node: post }) => (
              <Project key={post.id} {...post} />
            ))}
          </ProjectList>
        </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          heroImage {
            title
            fluid(maxWidth: 3200) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
  }
`

export default Index
