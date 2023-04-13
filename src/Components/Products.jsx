import React, { useState, useEffect } from 'react';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    api_data();
  }, []);

  async function api_data(){
      const data = await fetch('https://fakestoreapi.com/products');
      const ans = await data.json();
      setProducts(ans);
  }

  const handleAddToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
  }

  const handleRemoveFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }
  return (
    <div style={{display:"flex",width:"100%"}}>
      <div style={{display:"flex",width:"70%",flexWrap:"wrap",height:"150px"}}>
      {products.map(product => (
        <div key={product.id} className="card">
          
          <div className="card-body" style={{height:"30rem",width:"20rem",margin:"1rem"}}>
            <img src={product.image} alt={product.title} height="250px" width="250" />
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.category}</p>
            <p className="card-text">{product.price}</p>
            <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
      </div>
      <hr />
      <div style={{width:"30%"}}>
      <h2>Add to cart item</h2>
      {cartItems.map(item => (
        <div key={item.id} className="card" >
          <img src={item.image} alt={item.title} height="100px" width="100px"/>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.category}</p>
            <p className="card-text">{item.price}</p>
            <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item.id)}>Remove Item</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default ProductPage;
