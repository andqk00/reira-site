"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 1);

  return (
    <motion.section
      className="mb-28 max-w-[38rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Multiple skills in{" "}
        <span className="font-bold">
          Fashion Design, Garment Development, 3D Garment Simulation
        </span>{" "}
        and <span className="font-bold">Training 3D Software</span>.
      </p>
      <p className="italic">
        &quot;Enthusiastic but prudent planned, insane diligent in achieving
        goals.&quot;
      </p>
    </motion.section>
  );
}
