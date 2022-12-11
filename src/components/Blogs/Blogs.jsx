import React, { useEffect, useState } from 'react'
import img from "../../assets/img/porto.jpg"

const Blogs = () => {
  const [active,setActive] = useState(false);
  const input= React.useRef();
  useEffect(() =>{
     if(active) input.current.focus();
  }, [active] );


  return (
    <div className='blog'>
      <img src={img} alt="" className='blogimg' />
       <section className="blogs">
         <h1 className='topline'> hello world welcome to qatar</h1>
        <div className="container">
        <div className="searchbar">
          <input type="search" placeholder='search here...'  ref={input} className={active?'input active':'input'} />
          <button className='btn' onClick={()=>setActive(!active)}>BT</button>
        </div>
        </div>
       </section>
    </div>
  )
}

export default Blogs