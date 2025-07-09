import ProjectsWindow from "./windows/Projects";
import BlogWindow from "./windows/Blog";
import AboutWindow from "./windows/About";
import ContactWindow from "./windows/Contact";
import LanguagesWindow from "./windows/Languages";
import EducationWindow from "./windows/Education";
import ExperienceWindow from "./windows/Experience";
import CommandLineWindow from "./windows/CommandLine";
import {
  User,
  FolderKanban,
  BookOpen,
  Code,
  GraduationCap,
  Mail,
  Home,
  BriefcaseBusiness,
  SquareTerminal,
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
    name: "Command Line",
    icon: SquareTerminal,
    component: CommandLineWindow,
    hoverEffect: "scale-110 - rotate-3 ",
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
