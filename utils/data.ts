import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import testingImg from "@/utils/assets/testing.jpg";
import moneyImg from "@/utils/assets/money.jpg";
import calenderImg from "@/utils/assets/calender.jpg";
import sevanisImg from "@/utils/assets/sevanis.png";
import trailermaxImg from "@/utils/assets/trailermax.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Articles",
    hash: "#articles",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    company: "HNG",
    location: "Lagos, NG",
    description:
      "Collaborated on projects with team members from different fields of software engineering to build scalable web applications.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2020 - August 2020",
  },
  {
    title: "Technical Writer",
    company: "Hackmamba",
    location: "Delaware, US",
    description:
      "I focus on creating valuable technical content to guide developers on different use cases of client products.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2021 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Sevanis",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "CSS", "Stripe"],
    url: "https://sevanis.netlify.app/",
    imageUrl: sevanisImg,
  },
  {
    title: "TrailerMax",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "CSS", "RestAPI"],
    url: "https://trailermax.netlify.app/",
    imageUrl: trailermaxImg,
  },
] as const;

export const articlesData = [
  {
    title: "Build a crypto gift card store with Refine, Reloadly, and Stripe",
    description:
      "This article discusses using Node.js, Refine, Reloadly’s, and Stripe’s Session API to build a crypto gift card store.",
    tags: ["Refine", "Node.js", "Reloadly", "Stripe"],
    url: "https://ugwu.hashnode.dev/build-a-crypto-gift-card-store-with-refine-reloadly-and-stripe",
    imageUrl: moneyImg,
  },
  {
    title: "Testing Next.js components using Cypress",
    description:
      "This article reveals the similarities and differences between Cypress testing techniques and how to run tests in a Next.js application.",
    tags: ["React", "Cypress", "Tutorial"],
    url: "https://ugwu.hashnode.dev/testing-nextjs-components-using-cypress",
    imageUrl: testingImg,
  },
  {
    title: "Securing health data: A guide to implementing privacy and security in Next.js",
    description:
      "This article discusses safeguarding sensitive user data using Appwrite’s out-of-the-box functionalities.",
    tags: ["Next.js", "Appwrite", "Tutorial"],
    url: "https://dev.to/hackmamba/securing-health-data-a-guide-to-implementing-privacy-and-security-in-nextjs-5c",
    imageUrl: calenderImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React-Native",
  "Next.js",
  "Svelte",
  "Gatsby.js",
  "Vue",
  "Nuxt.js",
  "Git",
  "Tailwind",
] as const;
