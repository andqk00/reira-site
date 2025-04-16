"use client";

import React, { useRef } from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section className="scroll-mt-28" id="projects" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      ref={ref}
      className="group sm:relative bg-gray-100 border border-black/5 overflow-hidden max-w-2xl mx-auto sm:h-[16rem] sm:mb-8 last:mb-0 hover:bg-gray-200 transition grid grid-cols-1 sm:grid-cols-2 sm:gap-4 sm:items-center"
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      {/* Content Section */}
      <div className="pt-4 pb-6 px-5 sm:pl-6 sm:pr-2 sm:pt-6 flex flex-col h-full group-even:sm:order-1">
        <h3 className="text-lg sm:text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-600">
          {description}
        </p>
        <ul className="flex flex-wrap mt-4 gap-1 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.6] px-3 py-1 text-xs sm:text-sm tracking-wide text-white rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div></div>

      {/* Image Section */}
      <div className="relative sm:absolute sm:top-6 sm:right-0 sm:w-[50%] sm:-mr-10 flex justify-center items-center group-even:sm:order-[-1] group-even:sm:left-0 group-even:sm:-ml-10">
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="w-full h-auto sm:w-[150%] sm:h-[15rem] object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
        />
      </div>
    </motion.section>
  );
}
