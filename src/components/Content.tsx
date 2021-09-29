import React from "react"
// custom hook
import { useBlogsQuery } from "components/hooks/useQuery"
// components
import Card from "components/Cards/Card"
import BigCard from "components/Cards/BigCard"
import VerticalCard from "components/Cards/VerticalCard"
import LatestCard from "components/Cards/LatestCard"

const Content = () => {
  const { data } = useBlogsQuery()
  return (
    <>
      <section className="feature">
        <div className="container">
          <div
            className="
            row row-cols-1 row-cols-md-4
            d-flex
            border-md-top
            mt-md-4 mt-2
            py-md-4 py-2
          "
          >
            <div
              className="
              col col-md-3
              feature-popular
              order-1 order-md-0
              border-md-right
            "
            >
              <h2 className="my-2 my-md-3 text-capitalize">
                popular collection
              </h2>
              {data.edges.map(post => {
                return <Card post={post} />
              })}
            </div>
            <div className="col col-md-6 feature-trending order-0 order-md-1">
              <BigCard title="our trending" />
              {data.edges.map(post => {
                return <VerticalCard post={post} />
              })}
            </div>
            <div className="col col-md-3 feature-latest order-2 border-md-left">
              <h2 className="my-2 my-md-3 text-capitalize">other collection</h2>
              {data.edges.map(post => {
                return <LatestCard post={post} />
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="container topic">
        <div className="py-1 py-md-3 text-center border-top border-bottom border-2">
          <h3>Latest from Nuansa Budaya</h3>
        </div>
        <div className="my-2 my-md-4 py-1 py-md-3">
          <div className="row row-cols-1 row-cols-md-4 topic-lists">
            {data.edges.map(post => {
              return <Card post={post} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Content
