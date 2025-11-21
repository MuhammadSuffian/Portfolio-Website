import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AwardsAndHackathons from './components/AwardsAndHackathons';
import Contact from './components/Contact';
import ChatAssistant from './components/ChatAssistant';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Initialize state based on what the index.html script determined
    if (document.documentElement.classList.contains('dark')) {
      setDarkMode(true);
    }

    // 2. Listen for system preference changes (dynamic switching)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (!('theme' in localStorage)) {
        if (e.matches) {
          document.documentElement.classList.add('dark');
          setDarkMode(true);
        } else {
          document.documentElement.classList.remove('dark');
          setDarkMode(false);
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setDarkMode(true);
    }
  };

  // Show Loader if state is loading
  if (isLoading) {
    return <Loader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 animate-in fade-in duration-700">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <AwardsAndHackathons />
      </main>
      <Contact />
      <ChatAssistant />
    </div>
  );
};

export default App;