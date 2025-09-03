// src/App.jsx
import React from 'react';
import EarthScene from './components/EarthScene';
import ErrorBoundary from './components/ErrorBoundary';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Chatbot from './pages/chatbot';
import Data from './pages/data';




function App() {
  return (
     <ErrorBoundary>
     <div> <EarthScene /></div>
    </ErrorBoundary>
    ); (
    <Routes>
      <Route path="/" element={<EarthScene />} />
      <Route path="/home" element={<Home />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/data" element={<Data />} />
    </Routes>
  );
}

export default App;