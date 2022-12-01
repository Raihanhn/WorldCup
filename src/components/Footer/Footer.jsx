import React from 'react'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">

        <div className="box">
            <h3> world cup </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quos.</p>
            <div className="share">
                <a href="#"> <AiFillFacebook className='loki'/> </a>
                <a href="#"> <AiFillTwitterSquare className='loki'/> </a>
                <a href="#"> <AiFillInstagram className='loki'/> </a>
                <a href="#"> <AiFillLinkedin className='loki'/> </a>
            </div>
        </div> 
        
       <div class="box">
        <h3> contact info</h3>
        <a href="#" className="links"> <BsFillTelephoneFill/> +123 -456-7890</a>
        <a href="#" className="links"> <BsFillTelephoneFill/> +111 -112-7840</a>
        <a href="#" className="links"> <GrMail/> Raihanhn@gmail.com</a>
        <a href="#" className="links"> <FaMapMarkerAlt/> chittagong,Bangladesh - 4203</a>
        </div> 

        <div className="box">
           <h3> newsletter</h3>
           <p>subscribe for latest updates</p>
           <input type="email" placeholder="your email" className="email"/>
           <input type="submit" value="suscribe" className="mybtn"/>
          
          </div> 

        







      </div>
    </section>
  )
}

export default Footer