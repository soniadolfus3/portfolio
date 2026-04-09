import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-block about-section">
      <div className="section-inner">
        <motion.div
          className="about-shell"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="about-story">
            <p className="about-story-lead">
              Frontend Developer with 6+ years of experience building scalable, high-performance
              web applications using React.js, Next.js, and TypeScript. I specialize in creating
              clean, responsive user interfaces and developing real-world applications such as
              e-commerce platforms, financial dashboards, and food delivery systems.
            </p>
            <p>
              I have hands-on experience integrating payment systems like Stripe and Razorpay,
              working with Firebase for authentication and real-time data, and deploying
              applications to Vercel, Netlify, and AWS. I enjoy turning ideas into
              production-ready products with a strong focus on performance, usability, and modern
              design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
