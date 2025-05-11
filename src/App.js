import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (

    <div className="App">

      <Header />
        <Router basename="/janhnguyen.github.io">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>

    </div>

  );
}

export default App;
