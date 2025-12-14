import React, { useState, useEffect } from 'react';
import { resumeData } from './data/resumeData';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './styles/globals.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-dark text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Alexander Cortada
          </a>

          <div className="flex gap-6">
            <a href="#skills" className="hover:text-primary transition">Skills</a>
            <a href="#experience" className="hover:text-primary transition">Experience</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="px-3 py-1 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Hero data={resumeData.personal} />
        <Skills skills={resumeData.skills} />
        <Experience experiences={resumeData.experience} />
        <Contact data={resumeData.personal} />
      </main>

      <footer className="py-8 px-6 bg-dark border-t border-gray-800 text-center text-gray-400">
        <div className="max-w-6xl mx-auto">
          <p>© {new Date().getFullYear()} Alexander Cortada. All rights reserved.</p>
          <p className="mt-2 text-sm">Systems & Infrastructure Engineer</p>
          <p className="mt-1 text-sm">alexander.acension.pro</p>
        </div>
      </footer>
    </div>
  );
}

export default App;