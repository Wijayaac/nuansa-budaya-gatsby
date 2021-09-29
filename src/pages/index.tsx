import * as React from "react"
import { PageProps } from "gatsby"

// custom hooks

// components
import Layout from "components/layout"
import Seo from "components/seo"
import Hero from "components/Hero"
import About from "components/About"
import Content from "components/Content"
import Subscribe from "components/Subscribe"

// constants
import { aboutConstants } from "../constants"
import { heroConstants } from "../constants"

const Index: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="Halaman Utama" />
      <div>
        <Hero
          title={heroConstants.title}
          description={heroConstants.description}
        />
        <About
          description={aboutConstants.description}
          cta={aboutConstants.cta}
        />
        <Content />
        <Subscribe />
      </div>
    </Layout>
  )
}
export default Index
