import React, { useEffect, useState } from 'react'

const Blogs = () => {
  const [active,setActive] = useState(false);
  const input= React.useRef();
  useEffect(() =>{
     if(active) input.current.focus();
  }, [active] );


  return (
    <div className='blog'>


      <section className="blogs">
        <div className="content">
         <h3>Hello <span> world welcome</span> to qatar</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum quis, cupiditate eius fuga unde asperiores assumenda perspiciatis. Aliquam, hic!</p>
          <a href="#" className='mybtn'>Read more</a>
        </div>
      </section>
 
      <div className="container">
        <div className="searchbar">
          <input type="search" placeholder='search here...'  ref={input} className={active?'input active':'input'} />
          <button className='btn' onClick={()=>setActive(!active)}>search</button>
        </div>
       </div>

    </div>
  )
}

export default Blogs