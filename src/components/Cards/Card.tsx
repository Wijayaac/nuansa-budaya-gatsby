import React from "react"
import { GatsbyImage as Image, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

interface Posts {
  featured: {
    edges: {
      node: {
        id: string
        fields: {
          slug: string
        }
        excerpt: string
        frontmatter: {
          title: string
          date: Date
          image: any
        }
      }
    }[]
  }
}

const Card = () => {
  const { featured } = useStaticQuery<Posts>(graphql`
    {
      featured: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            excerpt(pruneLength: 100)
            frontmatter {
              title
              date(formatString: "MMM-DD")
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {!featured && (
        <div className="loading">
          <h2>Loading</h2>
        </div>
      )}
      {featured &&
        featured.edges.map(post => {
          const gambar = getImage(post.node.frontmatter.image)!
          return (
            <div key={post.node.id} className="col col topic-item">
              <div className="card mb-2 mb-md-4">
                <Image image={gambar} alt={post.node.fields.slug} />
                <div className="card-body">
                  <a href="#" className="text-decoration-none feature-title">
                    <h6 className="card-subtitle text-danger">
                      {post.node.frontmatter.date}
                    </h6>
                    <h5 className="card-title text-dark">
                      {post.node.frontmatter.title}
                    </h5>
                    <p className="card-text text-muted">{post.node.excerpt}</p>
                  </a>
                </div>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default Card
