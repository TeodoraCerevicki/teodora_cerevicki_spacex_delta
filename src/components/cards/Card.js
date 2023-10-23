import React from 'react'
import rocket from "../../images/rocket_launch.svg";

const Card = React.forwardRef(({ post }, ref) => {

  const content = (
      <>
          <header>
              <img className="image" alt="rocket" src={rocket} />
              <h1 className="title">{post.mission_name}</h1>
          </header>

          <div className="content">
              <span className="date">{post.launch_date_utc}</span>
              <p className="details">{post.details}</p>
          </div>

          <footer>
              <button className="accent-button details-button">More Details</button>
          </footer>
      </>
  )

  const wrapper = ref
      ?   <div className="col-12 col-md-4 col-lg-3">
              <section className="card" ref={ref}>{content}</section>
          </div>
      :   <div className="col-12 col-md-4 col-lg-3">
              <section className="card">{content}</section>
          </div>

  return wrapper
})

export default Card