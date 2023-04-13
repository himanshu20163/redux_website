import React, { useEffect } from 'react'
import { useState } from 'react';

const Addtocart = ({ first, second }) => {

  const [cart,setcart] = useState();

  const storedCartItems = localStorage.getItem('cartItems');
  
  console.log(storedCartItems);
  setcart(storedCartItems);
  
  return (
    <div>
      <h1>Add to cart</h1>
      
    </div>
  )
}

export default Addtocart
