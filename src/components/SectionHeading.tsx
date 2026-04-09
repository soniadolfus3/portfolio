import React from 'react';
import { motion } from 'framer-motion';

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <motion.p
        className="section-eyebrow"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          className="section-copy"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
