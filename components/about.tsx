"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Меня зовут Абу, и я фронтенд разработчик с опытом роботы в этой области
        в течение больше года. За это время получил ценый опыт в создани
        интерактивных и пользовательских веб-сайтов. Моя цель - продолжать
        развиваться и совершенствовать свои навыки, чтобы создавать качественные
        и современные интерфейсы для пользователей.
      </p>
      <br />
      <p>
        Когда я не программирую, мне нравится играть в настольный теннис,
        смотреть фильмы. Мне также нравится узнавать что-то новое. Сейчас я
        учусь играть на гитаре.
      </p>
    </motion.section>
  );
}
