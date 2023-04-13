import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import Addtocart from './Components/Addtocart';
import Pagenotfound from './Components/Pagenotfound';
import Navbar from './Components/Navbar';
import { useState } from 'react';
// import Nav from './Components/Navbar/Nav';

function App() {
  const [product,setproduct] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Products" element={<Products first={product} second={setproduct} />}/>
        <Route path="/Addtocart" element={<Addtocart first={product} second={setproduct}/>}/>
        <Route path="*" element={<Pagenotfound />}/>
      </Routes>
    </div>
  );
}

export default App;
