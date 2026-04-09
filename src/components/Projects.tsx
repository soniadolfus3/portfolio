import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section id="projects" className="section-block">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Selected work across <span>commerce, dashboards, and brand-led products.</span>
            </>
          }
          description="A focused selection of frontend work spanning e-commerce, fintech-style interfaces, restaurant brands, and client delivery."
        />

        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                className={`project-card surface-card${index === 0 ? ' project-card-featured' : ''}`}
                data-accent={project.accent}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.18 }}
              >
                {project.imageUrl ? (
                  <div className="project-media has-image">
                    <img
                      className="project-media-image"
                      src={project.imageUrl}
                      alt={project.imageAlt ?? ''}
                    />
                  </div>
                ) : null}

                <div className="project-header">
                  <div className="project-icon">
                    <Icon size={19} />
                  </div>
                  <span className="project-label">{project.label}</span>
                </div>

                <h3>{project.title}</h3>
                <p className="project-type">{project.previewLabel}</p>

                <div className="project-copy-block">
                  <span className="project-copy-label">About the app</span>
                  <p className="project-summary">{project.summary}</p>
                </div>

                <div className="project-copy-block">
                  <span className="project-copy-label">Stack used</span>
                  <div className="tag-list">
                    {project.tech.map((item) => (
                      <span key={item} className="tag-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
