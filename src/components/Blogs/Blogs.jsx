import React from 'react'
import blog from "./blog"
import { useState } from 'react';

const Blogs = () => {

  const [data, setData] = useState(blog);

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

      {data.map((value) =>{
                const {id, title, desc, bttn, image} = value;

                return (
                    <>
                        <div className="boxer" key={id}>
                          <img src={image} alt="" />
                         <h3> {title} </h3>
                          <p>{desc}</p>
                          <a href="#" className='mybtns'> {bttn} </a>
                        </div>
                    </>
                )
            })}

      </section>

    </div>
  )
}

export default Blogs