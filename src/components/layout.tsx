import * as React from "react"
import { Link } from "gatsby"

const Header = ({ menu }) => {
  return (
    <header className="header sticky-top">
      <nav className="navbar navbar-dark bg-dark p-0 header-hm">
        <div className="container-fluid py-1 bg-dark header-hm">
          <Link className="text-light mx-auto" to="/">
            Subscribe
          </Link>
          <Link className="text-light mx-auto" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <title>Search Articles</title>
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Link>
        </div>
        <div className="container border-bottom">
          <Link
            className="
        navbar-brand
        header-logo
        fs-1
        mx-auto
        border-2 border-light
        text-primary
      "
            to="/"
          >
            Nuansa Budaya
          </Link>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-md-0 sticky-top">
        <div className="container">
          <Link className="navbar-brand header-hd" to="/">
            Nuansa Budaya
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {menu.map(item => (
                <li key={item.link} className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
const Footer = ({ menu }) => {
  return (
    <footer className="bg-dark py-2 py-md-5 px-2 px-md-5">
      <div className="row row-cols-1 row-cols-md-2 container p-2 p-5">
        <div className="col flex-column align-items-center mb-4">
          <h6 className="d-inline-block text-light mb-3 border-bottom">
            Other Menu
          </h6>
          <div className="footer-link d-flex flex-wrap flex-column flex-md-row">
            {menu.map(item => (
              <Link
                key={item.link}
                className="d-inline-block mx-2 text-light text-decoration-none fs-6"
                to={item.link}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="col text-md-end">
          <div className="footer-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="currentColor"
              className="bi bi-asterisk text-light"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
            </svg>
          </div>
          <div
            className="
          footer-social
          my-4
          d-flex
          align-items-center
          text-md-end
          justify-content-md-end
        "
          >
            <a className="d-inline-block mx-2 text-light" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a className="d-inline-block mx-2 text-light" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-youtube"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg>
            </a>
          </div>
          <div className="footer-text">
            <p className="text-light">
              Jl. Baja Taki VII No.7, Dalung, Kec. Kuta Utara, Kabupaten Badung,
              Bali 80117
            </p>
            <a href="mailto:candrawinetra@pnb.ac.id">Candra Winetra</a>
          </div>
        </div>
      </div>
      <div className="container py-2 py-md-4 border-top text-center">
        <div className="footer-copyright text-white-50">
          Copyright © 2021 Nuansa Budaya, www.nuansabudaya.com. All rights
          reserved.
        </div>
      </div>
    </footer>
  )
}

const Layout = ({ location, children }) => {
  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
  ]
  return (
    <>
      <Header menu={menus} />
      <span className="position-absolute trigger"></span>
      <main>{children}</main>
      <Footer menu={menus} />
    </>
  )
}

export default Layout
