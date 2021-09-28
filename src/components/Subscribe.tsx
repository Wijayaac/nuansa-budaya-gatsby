import React from "react"

interface Props {}

const Subscribe = (props: Props) => {
  return (
    <section className="subscriber border-bottom border-top bg-light">
      <div className="container py-2 py-md-5 d-flex justify-content-around align-items-center flex-wrap">
        <div className="subscriber-text fs-5">
          Follow Nuansa Budaya and get the latest news and videos every week !
        </div>
        <div className="subscribe-button">
          <form action="#" method="post">
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Subscriber's email"
                aria-label="Subscriber's email"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
