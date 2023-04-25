import React from 'react'
import {Link} from 'react-router-dom';
import './navbar.css';
import { useContext } from 'react';
import { mycontext } from '../App';

const Navbar = () => {
  const data = useContext(mycontext);
  return (
    <div className='main_menu'>
        <div style={{width:"35%"}}>
        <h4>Geekster</h4>
        </div>
      <div className='menu'>
        <Link to="/" style={{width:"20%",textDecoration:"none"}}>Home</Link> 
        <Link to="/love" style={{width:"20%",textDecoration:"none"}}>Love</Link> 
        <Link to="/Products" style={{width:"20%",textDecoration:"none"}}>Products</Link>
        <Link to="/Addtocart" style={{width:"20%",textDecoration:"none"}}>Add to cart</Link>
      </div>
      {data.count}&nbsp;<i class="fa fa-shopping-cart" aria-hidden="true"></i>
    </div>
  )
}

export default Navbar
