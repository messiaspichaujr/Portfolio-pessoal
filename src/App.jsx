import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css'; 
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <main>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;