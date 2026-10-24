"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/utils/data";
import { useSectionInView } from "@/utils/hooks";
import { useTheme } from "@/context/theme-context";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);
  const { theme } = useTheme();
  // The timeline's built-in observer never fires under the App Router,
  // so drive its visibility ourselves.
  const { ref: timelineRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <div ref={timelineRef}>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h2 className="font-bold !mt-0 uppercase text-gray-900 dark:text-white/75">{item.company}</h2>
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="italic font-thin text-slate-500 !mt-0">{item.location}</p>
              {item.description.length > 0 && (
                <ul className="!mt-1 list-disc pl-4 space-y-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
      </div>
    </section>
  );
}
