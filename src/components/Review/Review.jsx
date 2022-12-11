import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import img1 from "../../assets/review/rs-5.png"

const Review = () => {

  return (
    <div className='reviews'>
       <section className="reviews">
        <h1 className="heading">customer <span>reviews</span></h1>
        <div className="box-container">
          <div className="box">
            <img src={img1} alt="" />
            <h3>john deo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos sunt natus ipsam nesciunt, eos quisquam ut reiciendis nostrum iure</p>
            <div className="stars"> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> </div>
    
          </div>

          <div className="box">
            i am roky
          </div>

        </div>


        
       </section>
    </div>
  )
}

export default Review