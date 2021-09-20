import React, { useEffect } from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  let AOS

  useEffect(() => {
    const AOS = require("aos")
    AOS.init(
      {
        once: true,
      },
      []
    )
    return () => {
      if (AOS) {
        AOS.refresh()
      }
    }
  }, [])

  if (isRootPath) {
    header = (
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = <Link to="/">{title}</Link>
  }

  return (
    <div data-is-root-path={isRootPath}>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
