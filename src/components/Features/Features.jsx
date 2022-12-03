import React from 'react'
import img from "../../assets/img/qatarflag.jpg"
import img1 from "../../assets/img/groups.jpg"

const Features = () => {
  return (
    <div className="tough">
      <img src={img} alt="" className='qatarflag' />

    <section className='features'>
    <h1 className="heading">qatar<span>2022</span>groups</h1>
      <div className="box-container">
        <div className="boxs">
           <img src={img1} alt="" />
        </div>
      </div>
    </section>


    </div>
  )
}

export default Features