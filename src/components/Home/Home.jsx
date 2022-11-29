import React, { useState }  from 'react'
import category from './category'


const Home = () => {

  const [data, setData] = useState(category);

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


      {data.map((values) =>{
                const {id, title, desc, bttn, image} = values;

                return (
                    <>
                        <div className="box" key={id}>
                          <img src={image} alt="" />
                          <h3> {title} </h3>
                          <p>{desc}</p>
                          <a href="#" className='mybtn'> {bttn} </a>
                        </div>
                    </>
                )
            })}

      </div>
    </section>


    </div>
  )
}

export default Home