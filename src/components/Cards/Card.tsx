import React from "react"
import { GatsbyImage as Image, getImage } from "gatsby-plugin-image"
import { PostData } from "components/hooks/useQuery"

const Card = ({ post }: PostData) => {
  const gambar = getImage(post.node.frontmatter.image)!
  return (
    <>
      <div key={post.node.id} className="col topic-item">
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
    </>
  )
}

export default Card
