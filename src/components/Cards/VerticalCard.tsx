import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage as Image, getImage } from "gatsby-plugin-image"

interface Props {
  trending: {
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
          image: any | undefined
        }
      }
    }[]
  }
}

const VerticalCard = () => {
  const { trending } = useStaticQuery<Props>(graphql`
    {
      trending: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: ASC }
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
      {!trending && (
        <div className="">
          <h2>Loading</h2>
        </div>
      )}
      {trending &&
        trending.edges.map(post => {
          const image = getImage(post.node.frontmatter.image)!
          return (
            <div
              key={post.node.id}
              className="
                card
                mb-2 mb-md-4
                flex-md-row
                align-items-center
                px-md-2 px-1
              "
            >
              <div className="card-img-top flex-fill feature-img">
                <Image image={image} alt={post.node.frontmatter.title} />
              </div>
              <div className="card-body flex-fill">
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
          )
        })}
    </>
  )
}

export default VerticalCard
