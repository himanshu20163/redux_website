import React from 'react'
import {Link} from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='main_menu'>
        <div style={{width:"35%"}}>
        <h4>Geekster</h4>
        </div>
      <div className='menu'>
        <Link to="/" style={{width:"20%",textDecoration:"none"}}>Home</Link> 
        <Link to="/Products" style={{width:"20%",textDecoration:"none"}}>Products</Link>
        <Link to="/Addtocart" style={{width:"20%",textDecoration:"none"}}>Add to cart</Link>
      </div>
    </div>
  )
}

export default Navbar
