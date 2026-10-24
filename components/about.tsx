"use client";

import React from "react";
import { motion } from "motion/react";

export default function About() {

  return (
    <motion.section
      className="mb-6 text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <p>
      Full-stack engineer building responsive, user-friendly web and mobile interfaces with
      React, React Native, Next.js, and Nuxt.js. I've shipped 50+ demo applications and written
      technical content reaching an estimated 100,000+ readers. I work across the full frontend
      lifecycle (UI architecture, API integration, performance, and testing) and have
      independently owned frontend systems for startups and edutech platforms.
      </p>
    </motion.section>
  );
}
