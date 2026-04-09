import React from 'react';
import { motion } from 'framer-motion';
import { timeline } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section-block section-tint">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Experience across <span>product teams, freelance delivery, and shipped frontend work.</span>
            </>
          }
          description="A mix of in-house and freelance experience building scalable frontend products and production-ready interfaces."
        />

        <div className="timeline">
          {timeline.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.date}`}
              className="timeline-item surface-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="timeline-meta">
                <span>{item.date}</span>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>

              <ul className="timeline-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="education-card surface-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="education-label">Education</p>
          <h3>Computer Engineering Technology Diploma</h3>
          <p>Seneca College, North York, Ontario</p>
        </motion.div>
      </div>
    </section>
  );
}
