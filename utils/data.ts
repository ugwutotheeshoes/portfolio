import React from "react";
import { StaticImageData } from "next/image";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import sevanisImg from "@/utils/assets/Sevanis.png";
import worldwiseImg from "@/utils/assets/worldwise.png";
import kwuoImg from "@/utils/assets/kwuo.jpg";
import iluFinderImg from "@/utils/assets/ilu-finder.jpg";
import omsTrackerImg from "@/utils/assets/oms-tracker.jpg";
import izuWebImg from "@/utils/assets/izu-web.jpg";
import izuPlayImg from "@/utils/assets/izu-play.jpg";
import auto808Img from "@/utils/assets/auto808.jpg";
import abTestImg from "@/utils/assets/ab-test.jpg";
import productVariationsImg from "@/utils/assets/product-variations.jpg";
import midjourneyImg from "@/utils/assets/midjourney.jpg";
import dalleManagerImg from "@/utils/assets/dalle-manager.jpg";
import rnUiLibrariesImg from "@/utils/assets/rn-ui-libraries.jpg";


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
    title: "Full-Stack Developer",
    company: "OMS Labs",
    location: "Virginia, US",
    description: [
      "Sole frontend engineer, owning UI architecture and implementation decisions across the platform.",
      "Built a multi-admin dashboard for 50+ staff, replacing a single-login WordPress workflow with role-based credentials and per-session login tracking.",
      "Architected the admin-to-frontend data flow so content edits reflect on the live site instantly.",
      "Built a centralized complaint/feedback system with automated email notifications.",
      "Designed and built the OMS Teachings Tracker Tool, used by 100+ members to track 350+ teachings.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "January 2025 - Present",
  },
  {
    title: "Mobile Development Engineer Intern",
    company: "Spacemates",
    location: "Oslo, NO",
    description: [
      "Built 7+ core UI screens (search, listings, booking, and user profiles) in a 3-person mobile team.",
      "Implemented geolocation-based discovery of nearby rental listings across multiple cities.",
      "Improved responsiveness with code splitting, lazy loading, and image optimization.",
      "Integrated backend APIs for authentication, search, booking, and messaging, backed by unit tests.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "January 2024 - May 2024",
  },
  {
    title: "Frontend Engineer & Technical Writer",
    company: "Hackmamba",
    location: "Delaware, US",
    description: [
      "Built 50+ demo applications with React, Next.js, and Nuxt.js to showcase product capabilities.",
      "Authored technical articles reaching 10,000+ readers on dev.to alone, with an estimated combined reach of up to 100,000.",
      "Collaborated with product teams so demos and articles reflected audience needs and desired UX.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "September 2021 - May 2025",
  },
  {
    title: "B.Eng., Computer Engineering",
    company: "Bells University of Technology",
    location: "Ogun, NG",
    description: [],
    icon: React.createElement(LuGraduationCap),
    date: "",
  },
] as const;

type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  url?: string;
  imageUrl?: StaticImageData;
};

export const projectsData: readonly Project[] = [
  {
    title: "Kwuo",
    description: "Interactive games for learning Igbo, with text and voice chat on the way.",
    tags: ["TypeScript", "React", "Node.js", "MongoDB", "Tailwind", "Zod", "TanStack"],
    url: "https://kwuo.xyz",
    imageUrl: kwuoImg,
  },
  {
    title: "Ilu Finder",
    description: "A searchable database of Igbo proverbs with their meanings and recordings.",
    tags: ["React", "JavaScript", "Vite", "Tailwind", "React Router"],
    url: "https://ilufinder.com",
    imageUrl: iluFinderImg,
  },
  {
    title: "OMS Tracker Tool",
    description: "A tracker tool to help edutech members follow their learning journey.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "EmailJS"],
    url: "https://omslabsprojects.com/tracker-tool",
    imageUrl: omsTrackerImg,
  },
  {
    title: "Izu Igbo Calendar (Web)",
    description:
      "An interface to browse and convert Gregorian dates across a 120-year span of Igbo market data.",
    tags: ["TypeScript", "React", "Node.js", "MongoDB"],
    url: "https://izuigbocalendar.com",
    imageUrl: izuWebImg,
  },
  {
    title: "Izu Igbo Calendar (Mobile)",
    description:
      "An Android app mapping the Igbo 4-day market week to the Gregorian calendar. Live on Google Play.",
    tags: ["React Native", "Expo", "MongoDB", "TypeScript"],
    url: "https://play.google.com/store/apps/details?id=com.calendar.izuigbo",
    imageUrl: izuPlayImg,
  },
  {
    title: "Auto808",
    description:
      "A car dealership web app for browsing new and used vehicle inventory with financing information.",
    tags: ["React", "Tailwind", "EmailJS", "MongoDB"],
    url: "https://auto808.netlify.app/",
    imageUrl: auto808Img,
  },
  {
    title: "Sevanis",
    description:
    "An e-commerce furniture store.",
    tags: ["React", "Auth0", "Stripe"],
    url: "https://sevanis.netlify.app/",
    imageUrl: sevanisImg,
  },
  {
    title: "Worldwise",
    description:
      "A world map that tracks your footsteps into every city you can think of",
    tags: ["React", "Vite", "React Leaflet" ],
    url: "https://wurldwise.netlify.app/",
    imageUrl: worldwiseImg,
  },
];

export const articlesData = [
  {
    title: "A/B Test Visual Assets With DAM for Data-Driven Campaigns",
    description:
      "Optimize visual assets with A/B testing using Cloudinary DAM: automate workflows, generate asset variations, and analyze the results.",
    tags: ["Cloudinary", "DAM", "A/B Testing"],
    url: "https://cloudinary.com/blog/a-b-test-visual-assets-dam-data-driven-campaigns",
    imageUrl: abTestImg,
  },
  {
    title: "How to Test Product Image Variations for Higher Conversions",
    description:
      "Improve product image performance with Cloudinary by generating variations, automating testing, and tracking engagement.",
    tags: ["Cloudinary", "E-commerce", "Tutorial"],
    url: "https://cloudinary.com/blog/test-product-image-variations-higher-conversions",
    imageUrl: productVariationsImg,
  },
  {
    title: "Customize Midjourney Images for Your E-commerce Website",
    description:
      "Use Cloudinary to turn AI-generated Midjourney images into polished visuals for an e-commerce store.",
    tags: ["Cloudinary", "Midjourney", "AI"],
    url: "https://cloudinary.com/blog/customize-midjourney-images-e-commerce",
    imageUrl: midjourneyImg,
  },
  {
    title: "Building an AI Image Manager With DALL-E and Cloudinary",
    description:
      "Generate images with DALL-E 3 and store, organize, and deliver them with Cloudinary in a Next.js app.",
    tags: ["Next.js", "OpenAI", "Cloudinary"],
    url: "https://cloudinary.com/blog/building-ai-image-manager-dall-e-cloudinary",
    imageUrl: dalleManagerImg,
  },
  {
    title: "Exploring the Best UI Component Libraries for React Native apps",
    description:
      "A tour of UI component libraries that solve consistent design language and responsive layouts in React Native.",
    tags: ["React Native", "UI", "Mobile"],
    url: "https://dev.to/ugwutotheeshoes/exploring-the-best-ui-component-libraries-for-react-native-apps-p5c",
    imageUrl: rnUiLibrariesImg,
  },
] as const;

export const skillsData = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Expo",
  "Next.js",
  "Vue",
  "Nuxt.js",
  "Redux",
  "TanStack Query",
  "Zod",
  "Tailwind",
  "Styled Components",
  "Node.js",
  "MongoDB",
  "Git/GitHub",
  "Docker",
] as const;
