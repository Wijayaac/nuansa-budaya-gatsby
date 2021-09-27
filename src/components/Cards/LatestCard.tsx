import React from "react"
import { GatsbyImage as Image, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

interface Props {
  title: string
}

interface Post {
  latest: {
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

const LatestCard = ({ title }: Props) => {
  const { latest } = useStaticQuery<Post>(graphql`
    {
      latest: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            excerpt(pruneLength: 150)
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
      <h4 className="my-3 my-md-4 text-capitalize">{title}</h4>
      {!latest && (
        <div className="">
          <h2>Loading</h2>
        </div>
      )}
      {latest &&
        latest.edges.map(post => {
          const image = getImage(post.node.frontmatter.image)!
          return (
            <div
              key={post.node.id}
              className="
                card
                mb-2 mb-md-4
                px-md-2 px-1
                py-1 py-md-2
                flex-md-row-reverse
                text-left
                align-items-center
              "
            >
              <div className="card-img-top flex-fill feature-img">
                <Image alt={post.node.frontmatter.title} image={image} />
              </div>
              <div className="card-body flex-fill">
                <a href="#" className="text-decoration-none feature-title">
                  <h6 className="card-title">{post.node.frontmatter.title}</h6>
                  <p className="card-text text-muted">
                    {post.node.frontmatter.date}
                  </p>
                </a>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default LatestCard
