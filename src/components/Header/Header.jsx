import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
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
    
</header>
  )
}

export default Header