import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {

  const [active,setActive] = useState(false);
  const input= React.useRef();
  useEffect(() =>{
     if(active) input.current.focus();
  }, [active] );

  return (
    <header className="header">
    <a href="#" className='logo'> World Cup </a>
    <nav className="navbar">
        <ul>
        <li><Link className='right' to="/">home</Link></li>
        <li><Link className='right' to="/features">features</Link></li>
        <li><Link className='right' to="/products">products</Link></li>
        <li><Link className='right' to="/categories">categories</Link></li>
        <li><Link className='right' to="/review">review</Link></li>
        <li><Link className='right' to="/blogs">blogs</Link></li>
        </ul>
    </nav>


    <div className="containers">
        <div className="searchbars">
          <input type="search" placeholder='search here...' ref={input} className={active?'input active':'input'} />
        </div>
        <button className='btns' onClick={()=>setActive(!active)}> <BsSearch/></button>

        <button className='menu-btn'> <GiHamburgerMenu/> </button>
        </div>
    
</header>
  )
}

export default Header