import React from "react";
import { TbCube3dSphere } from "react-icons/tb";
import { GiLoincloth } from "react-icons/gi";
import savageBeautyImg from "@/../public/savage-beauty.jpeg";
import uynosImg from "@/../public/uynos.jpeg";
import parisByNightImg from "@/../public/paris-by-night.jpeg";

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
    name: "Experiences",
    hash: "#experiences",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Support Engineer",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "A Style3D Software Support Engineer provides training, client support, and issue resolution while maintaining client relationships and communicating feedback to internal teams to enhance product and customer satisfaction.",
    icon: React.createElement(TbCube3dSphere),
    date: "Dec 2023 - Present",
  },
  {
    title: "3D Specialist",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "A Clo3D Specialist simulates 3D knit garments based on buyer standards and technical team inputs, collaborates with merchandisers and the 3D team in Korea, and submits project packs in MS AX.",
    icon: React.createElement(TbCube3dSphere),
    date: "Sep 2023 - Nov 2023",
  },
  {
    title: "Fashion Designer",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "A Fashion Designer manages design tasks from concept to execution, including market research, moodboards, sketches, technical directions, sample fittings, and collaborating with teams for materials, photoshoots, and final media output.",
    icon: React.createElement(GiLoincloth),
    date: "Mar 2022 - Aug 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Savage Beauty",
    description:
      "Womenswear Spring/Summer 2020 collection for my Graduation Project",
    tags: [
      "Fashion Design",
      "Fabric Development",
      "2D CAD Drawing",
      "Garment Fitting",
      "Fashion Illustration",
    ],
    imageUrl: savageBeautyImg,
  },
  {
    title: "UYNOS",
    description: "All Line Fashion Design and Production Management",
    tags: [
      "Product Costing",
      "Tech Packs",
      "Supplier Sourcing",
      "Trims (Clothing)",
      "Branding & Identity",
    ],
    imageUrl: uynosImg,
  },
  {
    title: "Paris By Night Performed Clothes",
    description: "Associated with ThaiTuan Group",
    tags: [
      "Fashion Design",
      "Fabric Development",
      "2D CAD Drawing",
      "Garment Fitting",
      "Fashion Illustration",
    ],
    imageUrl: parisByNightImg,
  },
] as const;

export const skillsData = [
  "Hand-drawing",
  "Wacom",
  "Sewing",
  "Textile",
  "Pattern Making",
  "Drapping",
  "Makeup",
  "Photography",
  "Style3D",
  "Clo3D",
  "Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe Premiere Pro",
] as const;
