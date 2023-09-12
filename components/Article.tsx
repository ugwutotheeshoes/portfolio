"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { articlesData } from "@/utils/data";
import ArticleCard from "./ArticleCard";
import { useSectionInView } from "@/utils/hooks";

export default function Article() {
  const { ref } = useSectionInView("Articles", 0.5);

  return (
    <section ref={ref} id="articles" className="scroll-mt-28 mb-28">
      <SectionHeading>Articles</SectionHeading>
      <div>
        {articlesData.map((article, index) => (
          <React.Fragment key={index}>
            <ArticleCard {...article} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
