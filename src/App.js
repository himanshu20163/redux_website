import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import Addtocart from './Components/Addtocart';
import Pagenotfound from './Components/Pagenotfound';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import { createContext } from 'react';

export  const mycontext = createContext();
function App() {
  
  const [carddata,setcarddata] = useState([]);
  const [count ,setcount] = useState(0);

  return (
    <div className="App">
      <mycontext.Provider value={{count,setcount}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Products" element={<Products carddata={carddata} setcarddata={setcarddata} />}/>
        <Route path="/Addtocart" element={<Addtocart carddata={carddata} setcarddata={setcarddata}/>}/>
        <Route path="*" element={<Pagenotfound />}/>
      </Routes>
      </mycontext.Provider>
     
    </div>
  );
}

export default App;
