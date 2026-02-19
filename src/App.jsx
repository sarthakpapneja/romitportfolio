import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
    return (
        <div className="bg-dark selection:bg-primary/30 text-slate-200">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </div>
    );
}

export default App;
