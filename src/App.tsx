import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

type ThemeMode = 'dark' | 'light';

const sectionPathMap: Record<string, string | null> = {
  '/': null,
  '/about': 'about',
  '/skills': 'skills',
  '/projects': 'projects',
  '/experience': 'experience',
  '/contact': 'contact',
};

function PortfolioPage() {
  const location = useLocation();

  useEffect(() => {
    const targetId = sectionPathMap[location.pathname];

    window.setTimeout(() => {
      if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      document.getElementById(targetId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 0);
  }, [location.pathname]);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme') as ThemeMode | null;

    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <div className="app-shell">
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/about" element={<PortfolioPage />} />
        <Route path="/skills" element={<PortfolioPage />} />
        <Route path="/projects" element={<PortfolioPage />} />
        <Route path="/experience" element={<PortfolioPage />} />
        <Route path="/contact" element={<PortfolioPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
