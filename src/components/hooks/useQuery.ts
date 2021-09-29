import { graphql, useStaticQuery } from "gatsby"

export interface PostData {
  post: {
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
  }
}

export interface ReturnedPostsData {
  data: {
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

export const useBlogsQuery = (): ReturnedPostsData => {
  const { data } = useStaticQuery<ReturnedPostsData>(graphql`
    {
      data: allMarkdownRemark(
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

  return { data }
}
