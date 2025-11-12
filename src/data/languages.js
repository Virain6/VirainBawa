import {
  Code,
  Server,
  Database,
  Network,
  GitBranch,
  Boxes,
  Cloud,
  Wrench,
  Paintbrush,
  Music,
  Video,
  FileText,
  BrainCircuit,
  PenTool,
  Cpu,
  AppWindow,
  FolderGit2,
  Figma,
  Coffee,
  Settings,
  Terminal,
  BookText,
  Headphones,
  FileCog,
  Cloudy,
  Router,
  MonitorPlay,
} from "lucide-react";

export const finderSections = {
  Development: {
    icon: Code,
    children: {
      "Front End": {
        icon: Paintbrush,
        children: {
          React: {
            icon: BrainCircuit,
            children: [
              "building-blocks",
              "nba-scouts",
              "pomodoro-app",
              "budgeting-app",
              "my-spots",
            ],
          },
          "React Native": {
            icon: AppWindow,
            children: ["medi-care", "moneyExpoApp"],
          },
          "Next.js": {
            icon: Server,
            children: ["ai-prompts"],
          },
          "Tailwind CSS": {
            icon: Paintbrush,
            children: [
              "building-blocks",
              "nba-scouts",
              "pomodoro-app",
              "budgeting-app",
              "my-spots",
            ],
          },
          JavaScript: {
            icon: FileText,
            children: [
              "building-blocks",
              "nba-scouts",
              "pomodoro-app",
              "budgeting-app",
              "my-spots",
            ],
          },
          TypeScript: {
            icon: FileCog,
            children: ["ai-prompts"],
          },
          Java: {
            icon: Coffee,
            children: [],
          },
        },
      },
      "Back End": {
        icon: Server,
        children: {
          Node: {
            icon: Terminal,
            children: [
              "building-blocks",
              "my-spots",
              "nba-scouts",
              "medi-care",
            ],
          },
          Cpp: {
            icon: Cpu,
            children: ["guesteau"],
          },
          Embedded: {
            icon: Settings,
            children: ["electric-bike-arm"],
          },
        },
      },
      Database: {
        icon: Database,
        children: {
          SQL: { icon: Database, children: ["nba-scouts"] },
          Firebase: { icon: Cloud, children: ["my-spots"] },
          YugabyteDB: { icon: Cloudy, children: ["guesteau", "medi-care"] },
          Convex: {
            icon: Cloud,
            children: ["building-blocks", "pomodoro-app"],
          },
          Cloudinary: { icon: Cloud, children: ["building-blocks"] },
        },
      },
      Networking: {
        icon: Network,
        children: {
          "Coming Soon": {
            icon: FileText,
            children: [],
          },
        },
      },
    },
  },

  Tools: {
    icon: Wrench,
    children: {
      "Development Tools": {
        icon: Wrench,
        children: {
          Arduino: { icon: Cpu, children: [] },
          Postman: { icon: FileCog, children: [] },
          Expo: { icon: AppWindow, children: [] },
          Git: { icon: GitBranch, children: [] },
        },
      },
      "DevOps / Cloud": {
        icon: Cloud,
        children: {
          Docker: { icon: Boxes, children: [] },
          Vercel: { icon: Server, children: [] },
          "Google Cloud": { icon: Cloudy, children: [] },
          "Amazon EC2 with NGINX": { icon: Server, children: [] },
        },
      },
      "Network / Simulation Tools": {
        icon: Router,
        children: {
          "Cisco Packet Tracer": { icon: Network, children: [] },
          WireShark: { icon: Router, children: [] },
        },
      },
      "Design & UI/UX": {
        icon: PenTool,
        children: {
          Figma: { icon: Figma, children: [] },
          SceneBuilder: { icon: AppWindow, children: [] },
          Obsidian: { icon: BookText, children: [] },
        },
      },
      IDEs: {
        icon: AppWindow,
        children: {
          VSCode: { icon: Terminal, children: [] },
          "IntelliJ IDEA": { icon: Terminal, children: [] },
        },
      },
      "Media Production": {
        icon: Video,
        children: {
          "Logic Pro": { icon: Headphones, children: [] },
          "Final Cut Pro": { icon: MonitorPlay, children: [] },
          "After Effects": { icon: Video, children: [] },
        },
      },
      "Productivity / Office": {
        icon: FileText,
        children: {
          "Microsoft Suite": { icon: FileText, children: [] },
        },
      },
    },
  },
};
