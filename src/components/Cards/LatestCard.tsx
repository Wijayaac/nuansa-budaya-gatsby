import React from "react"
import { GatsbyImage as Image, getImage } from "gatsby-plugin-image"
import { PostData } from "components/hooks/useQuery"

const LatestCard = ({ post }: PostData) => {
  const image = getImage(post.node.frontmatter.image)!
  return (
    <>
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
            <p className="card-text text-muted">{post.node.frontmatter.date}</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default LatestCard
