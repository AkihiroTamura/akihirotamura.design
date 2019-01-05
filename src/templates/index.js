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
          <div className="about">
            <p>Hi, I’m Akihiro Tamura, Product Designer with over 4 years experiences in degital design.</p>
            <p>Currentry, I'm working at <a href="http://www.curiosity.vc/">curiosity.vc</a>.</p>
            <p>I focus on creating experiences that have the user in mind.</p><br></br>
            <p>Links: <a href="https://twitter.com/wowr_t">Twitter</a>, <a href="https://github.com/akihirotamura">GitHub</a>, <a href="https://dribbble.com/wowr_t">Dribbble</a>, <a href="https://wowr.hatenablog.com/">Blog(日本語)</a></p>
            <p>Contact: <a href="https://m.me/akihiro.tamura.75436">Messenger</a></p>
          </div>
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
            fluid(maxWidth: 2400) {
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
