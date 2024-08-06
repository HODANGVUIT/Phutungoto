import React, { useState, useEffect } from 'react';
import "./App.css";
import Home from "./Components/Home";
import Introduce from "./Components/Introduce";
import Work from "./Components/Work";
import Evaluate from "./Components/Evaluate";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Product from './Components/Product';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Phutunggam from "./Pages/Phutunggam/Phutunggam"

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
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Phutunggam" element={<Phutunggam />} />
      </Routes>
      <button
        className="scrollTop"
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}
      >
        &#8679;
      </button>
    </div>
  </Router>
  );
}

export default App;
