import React from "react"

interface Props {
  description: string
  cta: string
}

const About = ({ description, cta }: Props) => {
  return (
    <section className="banner bg-light">
      <div
        className="
          container
          p-3 p-md-4
          d-flex
          flex-wrap
          justify-content-evenly
          align-items-center
        "
      >
        <div className="banner-text text-dark">{description}</div>
        <div className="banner-button">
          <a
            href="#"
            className="d-block btn-dark px-3 py-2 mb-2 text-decoration-none"
          >
            {cta}
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
