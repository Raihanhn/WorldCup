import React from 'react'
import product from "./Product"
import img from "../../assets/img/ator.jpg"
import { useState } from 'react'

const Products = () => {

  const [data, setData] = useState(product);

  return (
    <div className='tough'>
      <img src={img} alt="" className='qatarflags' />

        <section className="products">
         <h1 className="heading">best<span>products</span></h1>

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

export default Products