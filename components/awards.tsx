"use client";

import React, { useRef } from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { awardsData } from "@/lib/data";

export default function Awards() {
  const { ref } = useSectionInView("Awards");
  const refs = useRef<HTMLDivElement>(null);

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section id="awards" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My awards</SectionHeading>
      {
        <div className="flex flex-wrap justify-center gap-2">
          {awardsData.map((awardsPhoto, awardsIndex) => (
            <motion.div
              key={awardsIndex}
              ref={refs}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={awardsIndex}
              className="group mb-3 sm:mb-8 last:mb-0 rounded-md"
            >
              <Image
                src={awardsPhoto}
                alt="Project I worked on"
                quality={95}
                className="w-[20rem] h-[11rem] sm:w-[25rem] sm:h-[16rem] shadow-2xl rounded-md"
              />
            </motion.div>
          ))}
        </div>
      }
    </section>
  );
}
