import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Header from './components/Header';
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (

    <div className="App">

      <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
      <Footer />

    </div>

  );
}

export default App;
