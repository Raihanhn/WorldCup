import React from 'react'
import { useState } from 'react'
import img20 from "../../assets/img/catary.jpg"
import jersey from "./jersey"

const Categories = () => {

  const [data, setData] = useState(jersey);


  return (
    <div className='tough'>
        <img src={img20} alt="" className='catbanner' />

        <section className="categories">
          <h1 className="heading">football<span>jersey</span></h1>

          <div className="box-container">

         {data.map((value) =>{
            const {id, title, desc, bttn, image} = value;

          return (
              <>
                  <div className="box" key={id}>
                    <img src={image} alt="" />
                   <h3> {title} </h3>
                    <p>{desc}</p>
                    <a href="#" className='mybtns'> {bttn} </a>
                  </div>
              </>
            )
          })}

         </div>

      </section>
    </div>
  )
}

export default Categories