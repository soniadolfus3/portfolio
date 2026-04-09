import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, MoveUpRight, SunMedium, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { navLinks } from '../data/portfolio';

type NavbarProps = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigate = (path: string) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="site-header">
      <motion.nav
        className={`nav-shell${scrolled ? ' is-scrolled' : ''}`}
        initial={{ opacity: 0, y: -22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <button
          type="button"
          className="brand-lockup"
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              return;
            }

            navigate('/');
          }}
          aria-label="Scroll to top"
        >
          <span className="brand-mark">SD</span>
          <span className="brand-copy">
            <strong>Sonia Dolfus</strong>
            <span>Frontend Developer</span>
          </span>
        </button>

        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <button
              key={link.path}
              type="button"
              className={`nav-link${location.pathname === link.path ? ' is-active' : ''}`}
              onClick={() => handleNavigate(link.path)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle theme-toggle-icon desktop-only"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
          </button>
          <button type="button" className="nav-cta desktop-only" onClick={() => handleNavigate('/contact')}>
            Contact
            <MoveUpRight size={16} />
          </button>
          <button
            type="button"
            className="mobile-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  type="button"
                  className={`mobile-link${location.pathname === link.path ? ' is-active' : ''}`}
                  onClick={() => handleNavigate(link.path)}
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                className="theme-toggle theme-toggle-icon mobile-theme-toggle"
                onClick={onToggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
              </button>
              <button type="button" className="mobile-cta" onClick={() => handleNavigate('/contact')}>
                Contact
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
