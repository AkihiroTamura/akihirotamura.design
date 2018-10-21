import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges

  return (
    <Layout>
      <SEO />
      <Helmet>
        <title>{`${config.siteTitle}`}</title>
      </Helmet>
      <Container>
        <CardList>
          {posts.map(({ node: post }) => (
            <Card key={post.id} {...post} />
          ))}
        </CardList>
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
            fluid(maxWidth: 1800) {
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