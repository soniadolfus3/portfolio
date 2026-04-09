import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, Code2, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="hero" className="hero-section">
      <div className="section-inner hero-grid">
        <div className="hero-copy">
          <motion.p
            className="hero-kicker"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Frontend developer based in Ajax, Ontario
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.04 }}
          >
            Frontend interfaces built for clarity, performance, and product trust.
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            React.js, Next.js, JavaScript, and TypeScript frontend built for e-commerce,
            dashboards, and customer-facing products that need to feel polished and ready to
            launch.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            <button type="button" className="button-primary" onClick={() => navigate('/projects')}>
              View selected projects
              <ArrowRight size={18} />
            </button>
            <a className="button-secondary" href="mailto:soniadolfus.26@gmail.com">
              Contact Sonia
            </a>
          </motion.div>
        </div>

        <motion.aside
          className="hero-panel surface-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <p className="panel-label">Profile</p>
          <h2>Available for frontend roles and select freelance work.</h2>
          <p className="hero-panel-copy">
            6+ years delivering premium storefronts, dashboards, and realtime product interfaces.
          </p>

          <div className="hero-panel-list">
            <div className="hero-panel-item">
              <MapPin size={18} />
              <div>
                <span>Based in</span>
                <strong>Ajax, Ontario, Canada</strong>
              </div>
            </div>

            <div className="hero-panel-item">
              <Code2 size={18} />
              <div>
                <span>Core stack</span>
                <strong>React.js, Next.js, JavaScript, TypeScript</strong>
              </div>
            </div>

            <div className="hero-panel-item">
              <BriefcaseBusiness size={18} />
              <div>
                <span>Best fit</span>
                <strong>E-commerce, dashboards, and customer-facing products</strong>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
