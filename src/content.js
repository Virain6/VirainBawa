import ProjectsWindow from "./windows/Projects";
import BlogWindow from "./windows/Blog";
import AboutWindow from "./windows/About";
import ContactWindow from "./windows/Contact";
import LanguagesWindow from "./windows/Languages";
import EducationWindow from "./windows/Education";
import ExperienceWindow from "./windows/Experience";
import {
  User,
  FolderKanban,
  BookOpen,
  Code,
  GraduationCap,
  Mail,
  Home,
  BriefcaseBusiness,
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
    name: "Languages",
    icon: Code,
    component: LanguagesWindow,
    hoverEffect: "scale-110 rotate-3",
  },
  {
    name: "Experience",
    icon: BriefcaseBusiness,
    component: ExperienceWindow,
    hoverEffect: "scale-110",
  },
  {
    name: "Education",
    icon: GraduationCap,
    component: EducationWindow,
    hoverEffect: "scale-110 -rotate-3",
  },
  {
    name: "Blog",
    icon: BookOpen,
    component: BlogWindow,
    hoverEffect: "scale-110",
  },
  {
    name: "Contact",
    icon: Mail,
    component: ContactWindow,
    hoverEffect: "scale-110",
  },
];

export const mobileDockApps = [
  {
    name: "Home",
    icon: Home,
    component: null, // No component, it just closes
    hoverEffect: "scale-110",
  },
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
    name: "Contact",
    icon: Mail,
    component: ContactWindow,
    hoverEffect: "scale-110",
  },
];

export const aboutContent = {
  name: "Virain Bawa",
  titles: [
    "Software Engineering Student",
    "Full-Stack Developer",
    "Problem Solver",
  ],
  location: "Ontario, Canada",
  phone: "(416) 708 8472",
  email: "bawavirain@gmail.com",
  resume: "/files/virain_resume.pdf",
  linkedin: "https://www.linkedin.com/in/yourprofile",
  github: "https://github.com/Virain6",
};
