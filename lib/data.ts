import React from "react";
import { CgWorkAlt, CgOrganisation } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

// AWARDS PHOTO
import RatatypeAwards from "@/public/ratatypeAwards.png";
import UdemyNextAwards from "@/public/udemyNext.jsAwards.png";

// PROJECTS PHOTO
import DentApp from "@/public/dentapp.png";
import Breath from "@/public/breath.png";
import Cheber from "@/public/cheber.png";
import Bilingual from "@/public/bilingual.png";
import BuyGo from "@/public/buyGo.png";
import Estetic from "@/public/esteticClinic.png";

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
    name: "Awards",
    hash: "#awards",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const awardsData = [RatatypeAwards, UdemyNextAwards] as const;

export const experiencesData = [
  {
    title: "Peaksoft house",
    location: "г.Бишкек , ул.Гражданская 119",
    description:
      "Я учился в Peaksoft House в течение 9 месяцев. В течение 6 месяцев изучал JavaScript, HTML, CSS и React, а оставшиеся 3 месяца работал над коммерческим проектом, похожим на стажировку.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Aksoft",
    description:
      "Я работал фронтенд-разработчиком в течение года на одной работе. Кроме того, я значительно улучшил свои навыки до уровня strong-junior.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Программирование в компьютерных системах",
    location: "г.Бишкек , ул.Чуй 255",
    description:
      "Закончил обучение в колледже МУК по программированию в компьютерных системах, параллельно учась на практике в компании Aksoft",
    icon: React.createElement(CgOrganisation),
    date: "2024",
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
  {
    title: "Estetic Clinic",
    description:
      "Стоматологический LandingPage: информация: О клинике, Услуги, Доктора, Онлайн запись, Отзывы.",
    tags: [
      "Next.js",
      "tailwind",
      "typescript",
      "RTK query",
      "framer-motion",
      "NextUI",
    ],
    imageUrl: Estetic,
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
  "GitHub",
] as const;
