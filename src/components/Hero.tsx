import React from "react"

interface Props {
  title: string
  description: string
}

const Hero = ({ title, description }: Props) => {
  return (
    <section className="hero d-flex justify-content-center align-items-center">
      <div className="hero-text position-relative container-md ms-md-5">
        <h1 className="hero-title h1 text-primary mb-2 mb-md-3">{title}</h1>
        <div className="hero-description text-light">{description}</div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  )
}

export default Hero
