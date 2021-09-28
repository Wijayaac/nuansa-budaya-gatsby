import * as React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "components/layout"
import Seo from "components/seo"
import Hero from "components/Hero"
import About from "components/About"
import Card from "components/Cards/Card"
import BigCard from "components/Cards/BigCard"
import VerticalCard from "components/Cards/VerticalCard"
import LatestCard from "components/Cards/LatestCard"
import Subscribe from "components/Subscribe"

const heroConstants = {
  title: "Welcome to Nuansa Budaya",
  description:
    " Place you can find Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, adipisci tempore. Tenetur exercitationem voluptates, velit molestias, non blanditiis qui voluptatum quam quis architecto ipsam illum!",
}
const aboutConstants = {
  cta: "About Us",
  description:
    "Nuansa Budaya collecting various Balinese cultures, we believe that the culture of each place is unique and holds various interesting stories.",
}

export const blogPostQuery = graphql`
  {
    popular: allMarkdownRemark(
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
            date(formatString: "")
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

const Index: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="Halaman Utama" />
      <div className="">
        <Hero
          title={heroConstants.title}
          description={heroConstants.description}
        />
        <About
          description={aboutConstants.description}
          cta={aboutConstants.cta}
        />
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
                <h2 className="my-3 my-md-4 text-capitalize">
                  popular collection
                </h2>
                <Card />
              </div>
              <div className="col col-md-6 feature-trending order-0 order-md-1">
                <BigCard title="our trending" />
                <VerticalCard />
              </div>
              <div className="col col-md-3 feature-latest order-2 border-md-left">
                <LatestCard title="latest collection" />
              </div>
            </div>
          </div>
        </section>
        <section className="container topic">
          <div className="py-1 py-md-3 text-center border-top border-bottom border-2">
            <h3>Lates from Nuansa Budaya</h3>
          </div>
          <div className="my-2 my-md-4 py-1 py-md-3">
            <div className="row row-cols-1 row-cols-md-4 topic-lists">
              <Card />
            </div>
          </div>
        </section>
        <Subscribe />
      </div>
    </Layout>
  )
}
export default Index
