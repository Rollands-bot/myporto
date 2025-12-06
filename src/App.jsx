import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStackSlider from './components/TechStackSlider';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Removed Skills import as it is now integrated into About
// Removed ParticleNetwork to fit the clean, corporate/startup aesthetic

function App() {
  return (
    <div className="bg-white min-h-screen selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TechStackSlider />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
