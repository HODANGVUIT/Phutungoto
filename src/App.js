import React, { useState, useEffect } from 'react';
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Phutunggam from "./Pages/Phutunggam/Phutunggam";
import Phutungmay from "./Pages/Phutungmay/Phutungmay";
import Phutungdien from "./Pages/Phutungdien/Phutungdien";
import Phutungdieuhoa from "./Pages/Phutungdieuhoa/Phutungdieuhoa";
import Phutungthanvo from "./Pages/Phutungthanvo/Phutungthanvo";
import Phutungtro from "./Pages/Phutungtro/Phutungtro";

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
        <Route path="/Phutungmay" element={<Phutungmay />} />
        <Route path="/Phutungdien" element={<Phutungdien />} />
        <Route path="/Phutungdieuhoa" element={<Phutungdieuhoa />} />
        <Route path="/Phutungthanvo" element={<Phutungthanvo />} />
        <Route path="/Phutungtro" element={<Phutungtro/>} />
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