"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experiences() {
  const { ref } = useSectionInView("Experiences");
  const { theme } = useTheme();

  return (
    <section className="mb-28 scroll-mt-28" id="experiences" ref={ref}>
      <SectionHeading>My Experiences</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              date={experience.date}
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
              icon={experience.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "#2e2e2e",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="text-lg font-bold">{experience.title}</h3>
              <p className="text-gray-500 dark:text-white/50">
                {experience.location}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-white/75">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
