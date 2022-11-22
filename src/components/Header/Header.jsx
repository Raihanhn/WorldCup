import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
    <a href="#" className='logo'> World Cup </a>

    <nav className="navbar">
        <li><Link to="/">home</Link></li>
        <li><Link to="/features">features</Link></li>
        <li><Link to="/products">products</Link></li>
        <li><Link to="/categories">categories</Link></li>
        <li><Link to="/review">review</Link></li>
        <li><Link to="/blogs">blogs</Link></li>
    </nav>
    
</header>
  )
}

export default Header