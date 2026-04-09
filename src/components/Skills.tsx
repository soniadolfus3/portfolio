import React from 'react';
import { motion } from 'framer-motion';
import { skillGroups } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="section-block section-tint">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              Frontend systems for <span>modern product delivery.</span>
            </>
          }
          description="Core tools, integrations, and delivery strengths used across production-ready frontend work."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                className="skill-card surface-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className="skill-card-top">
                  <div className="skill-icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </div>

                <div className="tag-list">
                  {group.tags.map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
