import React, { useState, useEffect } from 'react';
import mystore from './Store';
import { useSelector } from 'react-redux';

const Redux_products = () => {
  const [num, setnum] = useState('himanshu');
  const [productdata, setproductdata] = useState([]);
  const [carddata, setcartdata] = useState('');

  useEffect(() => {
    fetch_products();
  }, []);

  const getname = (e) => {
    setnum(e.target.value);
    mystore.dispatch({
      type: 'name',
      myname: num,
    });
  };

  async function fetch_products() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setproductdata(data);
    console.log(data)
  }

  useEffect(() => {
    // Dispatch the product data to the store after it has been set
    mystore.dispatch({
      type: 'products',
      myproducts: productdata,
    });
  }, [productdata]);

  const addfunc=(id)=>{
    const realdata = reduxdata.products.find((elem,index)=>{
        return id === index
      })
      setcartdata([...carddata,realdata])
  }

  useEffect(() => {
    // Dispatch the product data to the store after it has been set
    mystore.dispatch({
      type: 'addtocart',
      mycards: carddata,
    });
  }, [carddata]);
  
  const reduxdata = useSelector((mystore) => {
    return mystore;
  });

  return (
    <div>
      <div className='productcontainer'>
        {console.log(reduxdata.products)}
        {reduxdata.products.map((ele,id) => {
          return (
            <div className='cards'>
              <img src={ele.image} />
              <h3>{ele.category}</h3>
              <h2>Price:{ele.price}</h2>
              <div className='buttondiv'><button onClick={()=>addfunc(id)}>Add To Cart</button></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Redux_products;
