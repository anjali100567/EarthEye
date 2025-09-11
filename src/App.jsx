// src/App.jsx
import React from 'react';
import EarthScene from './components/EarthScene';
import Navigation from './components/navigation.jsx';
import ErrorBoundary from './components/ErrorBoundary';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Chatbot from './pages/chatbot.jsx';
import About from './pages/about.jsx';
import Data from './pages/data.jsx';
import Contact from './pages/contact.jsx';




function App() {
  return (
     <ErrorBoundary>
      <Navigation/>
     <div> <EarthScene /></div>
    
    
    <Routes>
      <Route path="/" element={<EarthScene />} />
      <Route path="/home" element={<Home />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
    
    </ErrorBoundary>
  );
}

export default App;