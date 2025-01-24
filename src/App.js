import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';  
import AboutUs from './components/AboutUs';
import Notices from './components/Notices';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import FounderMessage from './components/FounderMessage'; 
import FeeStructure from './components/FeeStructure'; 

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Notices" element={<Notices />} />
            <Route path="/FeeStructure" element={<FeeStructure />} /> 
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/FounderMessage" element={<FounderMessage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
