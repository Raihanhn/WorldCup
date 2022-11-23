import React, { useEffect, useState } from 'react'

const Review = () => {


  const [active,setActive] = useState(false);
  const input= React.useRef();
  useEffect(() =>{
     if(active) input.current.focus();
  }, [active] );




  return (
    <div className='reviews'>
        Argentina hari gece
        <div className="containers">
        <div className="searchbars">
          <input type="search" placeholder='search here...'  ref={input} className={active?'input active':'input'} />
        </div>
        <button className='btns' onClick={()=>setActive(!active)}>BT</button>
        </div>
    </div>
  )
}

export default Review