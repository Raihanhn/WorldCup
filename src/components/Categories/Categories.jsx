import React from 'react'
import { useState } from 'react'
import img20 from "../../assets/img/catary.jpg"
import jersey from "./jersey"
import phant from "./phant"
import socks from "./socks"
import boots from "./boots"
import football from "./football"

const Categories = () => {

  const [data, setData] = useState(jersey);
  const [datta, setDatta] = useState(phant);
  const [dataa, setDataa] = useState(socks);
  const [daata, setDaata] = useState(boots);
  const [ddata, setDdata] = useState(football);


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

      <section className="categories">
          <h1 className="heading">football<span>phant</span></h1>

          <div className="box-container">

         {datta.map((value) =>{
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

      <section className="categories">
          <h1 className="heading">football<span>socks</span></h1>

          <div className="box-container">

         {dataa.map((value) =>{
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

      
      <section className="categories">
          <h1 className="heading">football<span>socks</span></h1>

          <div className="box-container">

         {daata.map((value) =>{
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

      <section className="categories">
          <h1 className="heading"><span>football</span></h1>

          <div className="box-container">

         {ddata.map((value) =>{
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