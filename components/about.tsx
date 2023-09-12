"use client";

import React from "react";
import { motion } from "framer-motion";

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
      Dedicated and results-driven Frontend Developer with a passion for creating visually 
      appealing and user-friendly web applications. Proficient in modern web technologies, 
      such as React, React-Native, and Next.js. Adept at collaborating with cross-functional teams to 
      bring innovative designs to life and optimize user experiences. 
      Strong problem-solving skills and a commitment to staying up-to-date with industry trends.
      </p>
    </motion.section>
  );
}
