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
        My core stacks
        are{" "}
        <span className="font-medium">
          React and Next.js
        </span>{" "}. I am also a bit familiar with Vue and React-Native. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I love the
        feeling of finally figuring out a solution to a problem.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">TypeScript</span>.
      </p>
    </motion.section>
  );
}
