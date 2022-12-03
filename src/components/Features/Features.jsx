import React from 'react'
import img from "../../assets/img/hard.jpg"
import img1 from "../../assets/img/groups.jpg"
import img2 from "../../assets/img/top16.png"

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

    <section className='feature-card'>
      <h1 className="heading">top<span>sixteen</span>teams</h1>
      <div className="box-container">
        <div className="boxs">
           <img src={img2} alt="" />
        </div>
      </div>
    </section>


    </div>
  )
}

export default Features