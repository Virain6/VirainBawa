import ProjectsWindow from "./windows/Projects";
import BlogWindow from "./windows/Blog";
import AboutWindow from "./windows/About";
import ContactWindow from "./windows/Contact";
import LanguagesWindow from "./windows/Languages";
import EducationWindow from "./windows/Education";
import {
  User,
  FolderKanban,
  BookOpen,
  Code,
  GraduationCap,
  Mail,
} from "lucide-react";

export const dockApps = [
  {
    name: "About",
    icon: User,
    component: AboutWindow,
    hoverEffect: "scale-110 -rotate-3",
  },
  {
    name: "Projects",
    icon: FolderKanban,
    component: ProjectsWindow,
    hoverEffect: "scale-110 rotate-3",
  },
  {
    name: "Blog",
    icon: BookOpen,
    component: BlogWindow,
    hoverEffect: "scale-110",
  },
  {
    name: "Languages",
    icon: Code,
    component: LanguagesWindow,
    hoverEffect: "scale-110 rotate-3",
  },
  {
    name: "Education",
    icon: GraduationCap,
    component: EducationWindow,
    hoverEffect: "scale-110 -rotate-3",
  },

  {
    name: "Contact",
    icon: Mail,
    component: ContactWindow,
    hoverEffect: "scale-110",
  },
];

// src/content.js
export const aboutContent = {
  about: `I’m a passionate software engineering student at the University of Western Ontario, graduating in 2026. I love combining technology and creativity to solve real-world problems.`,

  experience: `I’ve worked as CIO and Developer at Symptom Stream, building AI-driven tools for hospitals. As a Full Stack Developer at KeyStone, I designed a web app to manage and sell over 1,000 products. Previously, at HTS Engineering, I led sales efforts and collaborated closely with clients to deliver custom solutions.`,

  projects: `Some of my notable projects include My Spots, a real-time collaborative list app; NBA Scouts, an analytics platform to track player performance; and a healthcare data collection app leveraging AI-powered facial and speech recognition in a Kubernetes environment.`,

  skills: `I’m proficient in JavaScript, TypeScript, Java, Python, SQL, and C++, and I enjoy working with React, Next.js, Node.js, Express, Tailwind CSS, Convex, Firebase, and MongoDB.`,
};
