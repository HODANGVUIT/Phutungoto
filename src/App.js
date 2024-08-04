import React, { useState, useEffect } from 'react';
import "./App.css";
import Home from "./Components/Home";
import Introduce from "./Components/Introduce";
import Work from "./Components/Work";
import Evaluate from "./Components/Evaluate";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Product from './Components/Product';
import { Router, Routes } from 'react-router-dom';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);


  return (
    <div className="App"> 
    {/* <Router><Routes><Route path="/Phutunggam" element={<Phutunggam></Phutunggam>}></Route> */}
      <Home />
      <Introduce />
      <Work />
      <Product />
      <Evaluate />
      <Contact />
      <Footer />
      <button
        className="scrollTop"
        onClick={scrollTop}
        style={{ display: showScroll ? 'flex' : 'none' }}
      >
        &#8679;
      </button>
      {/* </Routes></Router> */}
    </div>
  );
}

export default App;
