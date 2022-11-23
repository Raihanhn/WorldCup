import React, { useEffect, useState } from 'react'

const Blogs = () => {
  const [active,setActive] = useState(false);
  const input= React.useRef();
  useEffect(() =>{
     if(active) input.current.focus();
  }, [active] );


  return (
    <div className='blogss'>
        hello world
        <div className="container">
        <div className="searchbar">
          <input type="search" placeholder='search here...'  ref={input} className={active?'input active':'input'} />
          <button className='btn' onClick={()=>setActive(!active)}>BT</button>
        </div>
        </div>
    </div>
  )
}

export default Blogs