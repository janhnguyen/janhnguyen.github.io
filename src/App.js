import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Projects from "./components/Projects";

function App() {
  return (

    <div className="App">

      <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>

    </div>

  );
}

export default App;
