import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import DentApp from "@/public/dentapp.png";
import Breath from "@/public/breath.png";
import Cheber from "@/public/cheber.png";
import Bilingual from "@/public/bilingual.png";
import BuyGo from "@/public/buyGo.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Bilingual",
    description:
      "Bilingual: Интерактивное приложение для изучения языков, объединяющее игры, задания и адаптивные уроки для эффективного обучения.",
    tags: ["React", "Styled-components", "Redux-toolkit", "MUI"],
    imageUrl: Bilingual,
  },
  {
    title: "BuyGo",
    description:
      "BuyGo: Платформа с широким выбором товаров, удобной навигацией и быстрой доставкой для приятного онлайн-шопинга.",
    tags: ["VITE.JS", "tailwind", "COOKIE", "RTK QUERY", "CustomCalendar"],
    imageUrl: BuyGo,
  },
  {
    title: "DentApp",
    description:
      "Dentapp помогает стоматологам эффективно планировать расписание приема пациентов в течение дня.",
    tags: ["React", "Styled-components", "Redux-toolkit", "Full-calendar"],
    imageUrl: DentApp,
  },
  {
    title: "Breath of Production",
    description:
      "Breath of Production - это CRM-система для швейных цехов, предназначенная для контроля и отчётности о работе сотрудников",
    tags: ["TypeScript", "Tailwind", "RTK Query", "Vite.JS"],
    imageUrl: Breath,
  },
  {
    title: "Cheber",
    description:
      "Уникальный сервис онлайн записи для барбершопов, салонов красоты и медицинских центров в Бишкеке",
    tags: [
      "Next.js",
      "Module.css",
      "Framer",
      "FUllCalendar",
      "Swiper",
      "RTK Query",
      "TypeScript",
    ],
    imageUrl: Cheber,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "Redux-Toolkit",
  "Framer Motion",
  "RTK Query",
  "Vite.js",
  "Vue.js",
  "AWS",
  "Bootstrap",
  "Figma",
  "Firebase",
  "Node.js",
  "Postman",
  "ReactNative",
  "SASS",
  "Swiper",
  "FullCalendar",
  "React-router",
  "Material-UI",
  "Styled-components",
  "Module.css",
  "Eslint",
  "Lottie-react",
] as const;
