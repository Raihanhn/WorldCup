import React from 'react'
import img1 from "../../assets/img/pic-1.png"
import img2 from "../../assets/img/pic-2.png"
import img3 from "../../assets/img/pic-3.png"

const Home = () => {
  return (
    <div className="akeel">
    <section className="home">
      <div className="content">
      <h3>Qatar <span>world cup</span> 2022</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum quis, cupiditate eius fuga unde asperiores assumenda perspiciatis. Aliquam, hic!</p>
      <a href="#" className='mybtn'>Read more</a>
      </div>
    </section>

    <section className="countries">
      <h1 className="heading">worldcup <span>countries</span></h1>

      <div className="box-container">

        <div className="box">
          <img src={img1} alt="" />
          <h3>fresh and organic</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, debitis!</p>
          <a href="#" className='mybtn'>read more</a>
        </div>

        <div className="box">
          <img src={img2} alt="" />
          <h3>fresh and organic</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, debitis!</p>
          <a href="#" className='mybtn'>read more</a>
        </div>

        <div className="box">
          <img src={img3} alt="" />
          <h3>fresh and organic</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, debitis!</p>
          <a href="#" className='mybtn'>read more</a>
        </div>

      </div>
    </section>


    </div>
  )
}

export default Home