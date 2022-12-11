import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import img1 from "../../assets/review/rs-5.png"
import img2 from "../../assets/review/rs-6.png"
import img4 from "../../assets/review/rs-7.png"
import img3 from "../../assets/review/rs-4.png"

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
            <img src={img2} alt="" />
            <h3>jasica oliver</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos sunt natus ipsam nesciunt, eos quisquam ut reiciendis nostrum iure</p>
            <div className="stars"> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <img src={img3} alt="" />
            <h3>alisa margarate</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos sunt natus ipsam nesciunt, eos quisquam ut reiciendis nostrum iure</p>
            <div className="stars"> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> </div>
    
          </div>

          <div className="box">
            <img src={img4} alt="" />
            <h3>alison banz</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos sunt natus ipsam nesciunt, eos quisquam ut reiciendis nostrum iure</p>
            <div className="stars"> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> </div>
          </div>
        </div>


       </section>

    </div>
  )
}

export default Review