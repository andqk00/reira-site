import React from "react";
import { TbCube3dSphere } from "react-icons/tb";
import { GiLoincloth } from "react-icons/gi";
import savageBeautyImg from "@/public/savage-beauty.jpeg";
import uynosImg from "@/public/uynos.jpeg";
import parisByNightImg from "@/public/paris-by-night.jpeg";

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
    title: "Software Support Engineer",
    location: "Ho Chi Minh City, Vietnam",
    description: `Style3D Software Support Engineer

- Training software/ hardware on-site for new and existing customers (private and corporate)
- Demonstrate 3D Garment and digitalize fabric support for Sales Team
- Build and maintain positive relationships with clients
- Keep current with product features and functionalities
- Respond to client inquiries and issues via email, phone, and online chat messages within 24 hours
- Troubleshoot client issues and escalate to designers and developers as needed
- Document client feedback for the product team
Communicate client needs to Account Managers and participate in client discussions as needed
- Assist with new client implementations when needed, including ensuring new clients are aware of available resources and how to access them`,
    icon: React.createElement(TbCube3dSphere),
    date: "Dec 2023 - Present",
  },
  {
    title: "3D Specialist",
    location: "Ho Chi Minh City, Vietnam",
    description: `Clo3D Specialist

- Simulating 3D Knit Garments (PINK, Duluth, A&F...) following the standard from the buyer and tech pack from the Technical Team.
- Feedback and work along with merchandiser if ineed information
- Submit project pack in MS AX and work along with 3D Team in Korea through MS Teams`,
    icon: React.createElement(TbCube3dSphere),
    date: "Sep 2023 - Nov 2023",
  },
  {
    title: "Fashion Designer",
    location: "Ho Chi Minh City, Vietnam",
    description: `- Get orders from Sale Department and Director
- Brainstorm and distribute tasks with colleagues
- Researching the market, forecast new trend
- Choose theme and make moodboard, graphic inspire, fabric,...
- Sketches and make graphic print
- Draw technical flat and make technical direction for Pattern Maker
- Work along with Merchandiser to follow the update status of Trims and Fabric
- Fitting sample and write comment
- Making shooting plan for approved designs
- Arranging garments, make styleboard pre-shooting
- Helping contact with Photographer, Makeup Artitst and Model
- Help Media Team on-set
- Commenting on photos and check the final result.`,
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
