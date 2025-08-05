import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experiences from './components/Experiences';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <About />
        <Experiences />
        <Education />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;