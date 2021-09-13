import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Index: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location} title="Hello">
      <Seo title="Halaman Utama" />

      <div className="container">
        <h1 className="text-primary">hello world</h1>
      </div>
    </Layout>
  )
}
export default Index
