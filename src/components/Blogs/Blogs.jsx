import React from 'react'
import img1 from "../../assets/beautiful/place1.jpg"

const Blogs = () => {

  return (
    <div className='blog'>


      <section className="blogs">
        <div className="content">
         <h3>Hello <span> world welcome</span> to qatar</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum quis, cupiditate eius fuga unde asperiores assumenda perspiciatis. Aliquam, hic!</p>
          <a href="#" className='mybtn'>Read more</a>
        </div>
      </section>

      <section className="blog-img">
      <h1 className="heading">qatar <span>beautiful</span> places</h1>
      <div className="boxer">
        <img src={img1} alt="" />
        <h3> qatar beautiful place </h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus </p>
        <a href="#" className='mybtns'> read more </a>
      </div>

      <div className="boxer">
        <img src={img1} alt="" />
        <h3> qatar beautiful place </h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus </p>
        <a href="#" className='mybtns'> read more </a>
      </div>
      </section>

    </div>
  )
}

export default Blogs