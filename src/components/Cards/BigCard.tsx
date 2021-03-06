import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage as Image, getImage } from "gatsby-plugin-image"
import { ReturnedPostsData } from "components/hooks/useQuery"

interface Props {
  title: string
}

const BigCard: React.FC<Props> = ({ title }) => {
  const { data } = useStaticQuery<ReturnedPostsData>(graphql`
    {
      data: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 1
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
  // simplify the post we get and extract the image expect object
  const post = data.edges.map(({ node }) => node)[0]
  const image = getImage(post.frontmatter.image)!

  return (
    <>
      <h2 className="my-2 my-md-3 text-capitalize">{title}</h2>
      {!post && (
        <div className="">
          <h2>loading</h2>
        </div>
      )}
      {post && (
        <div className="card mb-2 mb-md-4">
          <Image image={image} alt={post.frontmatter.title} />
          <div className="card-body">
            <a href="#" className="text-decoration-none feature-title">
              <h6 className="card-subtitle text-danger">
                {post.frontmatter.date}
              </h6>
              <h5 className="card-title text-dark">{post.frontmatter.title}</h5>
              <p className="card-text text-muted">{post.excerpt}</p>
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default BigCard
