"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/utils/data";
import ProjectCard from "./ProjectCard";
import { useSectionInView } from "@/utils/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
