import { User } from "lucide-react";

export const projectData = [
  {
    id: "symptom-cms",
    title: "Symptom Stream CMS/CRM Platform",
    description:
      "Internal content and relationship management platform for announcements, outreach, and company-wide task coordination.",
    about: `The Symptom Stream CMS/CRM is a role-based internal platform designed to streamline operational communication, user engagement, and task coordination across our startup. Built from the ground up using Next.js, Tailwind CSS, and Convex, the system supports company-wide announcements, outreach, task assignment for individuals or groups, blog publishing, user analytics, and access-controlled user roles.

After implementation, the platform led to measurable improvements in internal operations. Communication between interns and staff doubled, as calculated by weekly interaction metrics. Task completion rates increased significantly due to integrated email reminders and clear workflows. Admin engagement rose, with team leads spending more time collaborating through shared dashboards and messaging features. We also observed a 50% estimated increase in stakeholder retention, based on engagement tracking and feedback cycles.

This CMS has become a foundational part of our internal infrastructure, helping Symptom Stream grow more organized, responsive, and connected as we scale.`,
    image: "/images/projects/ss-dash.png", // Replace with the actual path when ready
    progress: 100,
    tech: ["Next.js", "Tailwind CSS", "Convex", "TypeScript", "Zod", "ShadCN"],
    features: [
      "Company-wide announcements with markdown editor",
      "Task management system for individuals and groups",
      "Internal blog platform with author tracking",
      "Outreach modules for targeted communications",
      "Real-time user analytics dashboard",
      "Role-based access control with Convex authentication",
      "Modular structure for future integrations",
    ],
    github: "https://github.com/symptomstream/employee-portal",
    url: "https://staff.symptomstream.com",
  },
  {
    id: "moneyExpoApp",
    title: "Money Man",
    description:
      "Mobile first expense tracker that blends bank synced transactions with manual entries, designed so each person keeps a private, device centric view of their money.",
    about: `The Personal Finance Companion App is a mobile app built with Expo and React Native that helps users understand day to day spending without feeling like a full enterprise accounting tool. The design focuses on clarity, fast entry, and a calm interface that makes it easy to see where money is going at a glance.

The core of the app runs on a local SQLite database. Every transaction, budget, and category is stored on device first, which means the app feels fast, works even without a network connection, and keeps the users information close to them. When the user taps the sync control, the app connects to a secure backend, pulls in new bank transactions, and merges them into the local store. Existing transactions are matched by stable identifiers so duplicates are ignored while new items are added. Manually created records stay intact, so people can keep their own notes, cash spending, and adjustments on top of the bank feed.

Security and privacy are treated as first class requirements rather than afterthoughts. Sensitive values such as access tokens and any keys that can reach banking data are stored using the platform secure storage through Expo SecureStore, which relies on the operating system keychain on iOS and the secure system store on Android. No raw credentials are stored in plain text inside the SQLite database. All communication with the backend is designed to use modern TLS over HTTPS, so data in transit is protected from basic interception. The sync flow is token based, so the server can validate a device without the user needing a heavy sign in system for casual personal use. The goal is to keep each app instance solo for the owner while still allowing multiple friends to install their own copy and safely connect to their own accounts.

On the architecture side, the app uses a clear separation between presentation and data. A central state layer coordinates the SQLite queries, derived views, and computed summaries such as category totals, monthly spend, or upcoming bills. The UI layer uses reusable components for lists, cards, and modals, which makes it easier to add new surfaces such as future budget views or insights without rewriting core logic. This structure also supports a future path toward more advanced analytics and a richer sync story if the backend grows.

Overall, the project combines a pragmatic local data model, careful storage of sensitive information, and a clean mobile interface to create a finance tool that feels trustworthy, practical, and easy to live with every day.`,
    image: "",
    progress: 70,
    tech: [
      "Expo",
      "React Native",
      "TypeScript",
      "Expo SQLite",
      "Expo SecureStore",
      "React Navigation",
    ],
    features: [
      "Local device storage of transactions using SQLite",
      "Optional secure sync of bank transactions with merge into local data",
      "Support for both synced and manually entered expenses",
      "Category based summaries and monthly spending views",
      "Token based communication with backend services",
      "Use of platform secure storage for sensitive values",
      "Offline friendly experience with on demand sync",
    ],
    github: "https://github.com/Virain6/money-management",
    url: "",
  },
  {
    id: "medi-care",
    title: "MediCare Healthcare Camp App",
    description:
      "Mobile data collection platform for healthcare camps with real-time registration, secure data storage, and AI-assisted features.",
    about: `MediCare is a collaborative healthcare data collection platform designed to modernize and accelerate patient registration during healthcare camps. Built as part of a team project for Data Care LLC, the application allows healthcare professionals to register patients, record health questionnaires, and securely store all data in real-time.

I was primarily responsible for the initial server setup and designing the API routes to support patient workflows. I set up and configured our backend Node.js server, which was hosted on Google Cloud. For the frontend, I led the creation of the UI using Expo with React Native, handling the visual styling and implementing flows for record creation, editing, and deletion—ensuring smooth integration between frontend interactions and backend operations.

Our team architected the backend with YugabyteDB, a distributed Postgres-compatible datastore. I contributed to designing normalized SQL-style database tables and establishing clear relationships to maintain data integrity. Throughout development, we collaborated closely on Figma-based prototypes, iterating on the app's user experience and running multiple rounds of usability testing.

MediCare also laid the groundwork for future AI features such as facial recognition, speech recognition, and vision testing modules, which would run on edge devices and integrate with the scalable Kubernetes infrastructure provided by Data Care LLC.`,
    image: "", // Replace with an actual image path if you have one
    progress: 85,
    tech: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "YugabyteDB",
      "Google Cloud",
      "Figma",
      "Docker",
      "Kubernetes",
      "Tailwind CSS",
    ],
    features: [
      "Patient registration and questionnaire management",
      "Real-time data storage in a distributed Postgres datastore",
      "Modular API routes with input validation and error handling",
      "Secure authentication and role-based access flows",
      "Responsive mobile UI built with Expo and React Native",
      "Hosted backend on Google Cloud with containerized deployment",
      "Future support for AI features like facial and speech recognition",
    ],
    github: "https://github.com/ShaimaaAliECE/group-project-3350-group-25",
    url: "", // Add a live demo URL if you have one
  },
  {
    id: "building-blocks",
    title: "Building Blocks Construction Platform",
    description:
      "Full-stack content management and ordering system for construction materials.",
    about: `Building Blocks is a comprehensive content management system and e-commerce platform designed to streamline product management, ordering, and customer interactions for a construction supply business. I planned this project extensively, outlining requirements for secure checkout, admin controls, supplier management, and user-friendly browsing. The backend is architected around a Node.js Express API connected to a Convex database, while the frontend leverages React Vite and Tailwind CSS for a responsive, modern experience.

During development, I focused on modular design and clear separation of concerns—deploying the frontend independently on Vercel and ensuring robust API communication with the Convex back end. I implemented strategies such as rate limiting, CAPTCHA verification, and server-side validation to safeguard user data and prevent abuse. Additionally, I incorporated advanced features like Excel export for orders, bulk discount management, image upload handling (with plans to integrate Cloudinary or Convex for optimized media storage), and dynamic sorting by supplier, barcode, or pricing.

This project showcases how I combine careful planning, modern frameworks, and a security-first mindset to build scalable, real-world applications.`,
    image: "/images/projects/building-blocks.png",
    progress: 55,
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Convex",
      "Cloudinary",
      "JavaScript",
    ],
    features: [
      "Admin dashboards for managing products, suppliers, and departments",
      "Secure customer checkout with optional email confirmations",
      "Excel export and printable invoices for orders",
      "Dynamic product search and filtering",
      "Bulk discount management by supplier, department, or product",
      "Future support for PayPal integration and e-transfer receipts",
      "Photo storage and optimization for product images",
    ],
    github: "https://github.com/Virain6/building-blocks",
    url: "", // Optional live demo URL if you host it
  },
  {
    id: "ai-prompts",
    title: "SymptomStream AI Prompt Generator",
    description:
      "Conversational AI prompt generator website built as a fast-paced collaboration and deployed on Vercel.",
    about: `The AI Prompt Generator project was developed as a rapid prototype to showcase the capabilities of modern web APIs in powering real-time natural language interactions. Built collaboratively with a partner in a fast-paced environment, the application uses the Web Speech API to convert user voice input into text, which is then processed and sent to a custom backend wrapper around the ChatGPT API. The model generates tailored responses that are displayed back to the user in a clean web interface.

I contributed extensively to integrating the Web Speech API for speech recognition and ensuring that the transcription was reliable and responsive. I also helped set up the React-based frontend, designed intuitive UI components, and implemented state management for streaming AI responses. Our backend was designed as a lightweight API layer that securely forwarded user prompts to OpenAI and returned results in near real time.

The project was deployed on Vercel for streamlined continuous deployment, enabling us to iterate quickly and test updates with production-like performance. Throughout the project, we focused on clean architecture, clear separation of concerns, and optimizing prompt latency to create a seamless user experience.`,
    image: "/images/projects/ai-prompts.png", // Replace with your actual image path
    progress: 75,
    tech: [
      "React",
      "JavaScript",
      "Web Speech API",
      "OpenAI API",
      "Vercel",
      "Tailwind CSS",
    ],
    features: [
      "Voice-to-text transcription using the Web Speech API",
      "Dynamic prompt submission and response streaming",
      "Custom ChatGPT wrapper backend for prompt processing",
      "Clean React interface with responsive design",
      "Collaborative development in a fast-paced workflow",
      "Continuous deployment on Vercel",
    ],
    github: "https://github.com/symptomstream/v0.1",
    url: "", // Add your live URL if you have it
  },
  {
    id: "my-spots",
    title: "My Spots",
    description:
      "Collaborative list-making app with secure authentication, scalable backend, and efficient APIs.",
    about: `My Spots is a full-stack server-client application designed to let users create, manage, and share public or private lists in real time. Developed as a way to explore advanced backend practices, it was deployed on an AWS EC2 instance using NGINX for reverse proxying and load balancing to handle production traffic efficiently.

One of the most valuable parts of this project was learning to build robust authentication flows using Firebase Authentication and securing the app with JWT tokens. I implemented input sanitization and server-side rate limiting to protect the API endpoints from malicious requests or misuse, while ensuring a smooth experience for legitimate users. 

I designed APIs to be efficient even when working with a large volume of data, focusing on optimizing queries, minimizing redundant requests, and delivering low-latency responses. Throughout development, I learned best practices for structuring Express servers, designing secure routes, and maintaining a clear separation of concerns between client and server.

This project deepened my skills in secure web application development, backend architecture, and cloud deployment while reinforcing the importance of planning for scalability and security from the start.`,
    image: "/images/projects/my-spots.png",
    progress: 100,
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "Firebase Authentication",
      "JWT",
      "MongoDB",
      "AWS EC2",
      "NGINX",
      "Tailwind CSS",
      "Axios",
    ],
    features: [
      "Firebase Authentication and JWT-based protected routes",
      "Input sanitization and server-side validation",
      "API rate limiting and efficient request handling",
      "Real-time list creation and collaboration",
      "AWS EC2 deployment with NGINX reverse proxy",
      "Responsive UI built with React and Tailwind CSS",
    ],
    github: "https://github.com/Virain6/MySpots",
    url: "", // If you have a live demo, add it here
  },
  {
    id: "guesteau",
    title: "Guesteau Restaurant Ordering System",
    description:
      "A multi-user, multi-transaction restaurant ordering platform with robust concurrency controls.",
    about: `Guesteau is a distributed restaurant ordering platform built as a full-stack project in a team of five. The system was designed to replace traditional workflows with a modern web application combining a React frontend and a high-performance C++ server. My contributions included developing server concurrency using mutexes and multithreading, implementing role management (distinguishing regular users and administrators), and integrating support for secure user sessions. The backend adhered to ACID properties, leveraging YugabyteDB to maintain transactional integrity and data consistency under concurrent load. Throughout development, I worked closely with the team to design APIs, implement process synchronization strategies, and deliver a scalable system that handled real-time orders efficiently.`,
    image: "/images/projects/guesteau.png",
    progress: 100,
    tech: [
      "React",
      "Node.js",
      "C++ (Crow Framework)",
      "YugabyteDB",
      "WebSockets",
      "Mutexes",
      "Semaphores",
    ],
    features: [
      "Multi-user web interface for placing and managing orders",
      "Real-time order updates and transaction confirmations",
      "Role-based access control for administrators and customers",
      "Thread-safe C++ server with multithreaded processing",
      "ACID-compliant database transactions",
      "Scalable deployment architecture for remote accessibility",
    ],
    github: "https://github.com/Virain6/Guesteau",
    url: "", // If you deploy a live demo, place the URL here
  },
  {
    id: "nba-scouts",
    title: "NBA Scouts",
    description:
      "A player analytics platform built with a relational database backend and modern frontend.",
    about:
      "NBA Scouts is a professional-grade player analytics platform developed to showcase end-to-end database and frontend integration. This project was built using SQL and SQL Workbench for the backend, where we applied rigorous normalization techniques to design an efficient relational schema. Throughout the development process, we created complex SQL views and functions with multi-table joins to aggregate and present performance insights. Connecting this robust backend to a modern React interface required careful API design and planning, resulting in an intuitive dashboard that visualizes player metrics in real time. This project reflects a comprehensive journey—combining advanced database skills with frontend development to deliver a cohesive analytics experience",
    image: "/images/projects/nba-scouts.png",
    progress: 100,
    tech: [
      "React",
      "Node.js",
      "Tailwind CSS",
      "SQL",
      "SQL Workbench",
      "Express",
    ],
    features: [
      "Advanced player performance analytics and charts",
      "Fully normalized relational schema with complex joins",
      "Dynamic dashboards using SQL views and aggregations",
      "Secure REST API integration with the frontend",
      "Responsive design inspired by modern sports platforms",
    ],
    github: "https://github.com/Virain6/NBA-Scout",
    url: "", // If you have a demo URL, put it here
  },

  {
    id: "electric-bike-arm",
    title: "Electric Bike Throttle Control (ARM)",
    description:
      "Embedded C project to control throttle input on an electric bike using ARM microcontroller PWM.",
    about: `This project implemented an embedded control system for an electric bike using an ARM microcontroller. Working in a team, I led the development of the core firmware and was responsible for testing and verifying the hardware interfaces. I personally reviewed and validated all pin mappings against the hardware schematic to ensure reliable connections. The system was built entirely from scratch in C, utilizing PWM (Pulse Width Modulation) to precisely modulate the throttle signal based on analog sensor input. The project also involved configuring timers, handling interrupts, and calibrating duty cycles to achieve smooth throttle response. I extensively tested the firmware in hardware-in-the-loop conditions to confirm correct motor actuation and fault tolerance under varying load conditions.`,
    image: "/images/projects/electric-bike.png",
    progress: 100,
    tech: [
      "C",
      "ARM Microcontroller",
      "PWM",
      "Embedded Systems",
      "GPIO",
      "Timers/Interrupts",
    ],
    features: [
      "Custom PWM throttle signal generation",
      "Analog input processing and scaling",
      "Hardware pin mapping and configuration",
      "Interrupt-driven control logic",
      "Real-time response to throttle adjustments",
      "Extensive bench testing and calibration",
    ],
    github: "https://github.com/Virain6/electric-bike-ARM",
    url: "", // If you publish a video/demo, you can link it here
  },
  {
    id: "pomodoro-app",
    title: "My Pomodoro Timer",
    description:
      "A productivity timer with real-time syncing and workflow customization.",
    about: `My Pomodoro Timer was inspired by my desire to improve focus and structure my own workflow while studying and developing projects. The app provides a clean, distraction-free interface for timing work intervals and breaks, helping users stay accountable and maintain productivity throughout the day.

I built this project using modern React and state management techniques to ensure a smooth, responsive experience. One of the core challenges—and ongoing areas of refinement—has been implementing live syncing across devices so sessions can seamlessly continue if you switch from desktop to mobile. I'm continuing to iterate on this feature to improve consistency and reliability.

In addition to the standard Pomodoro intervals, I incorporated customization options for session lengths and break times, along with progress visualization to track your focus over time. This project reflects both my commitment to building tools I personally use and my focus on delivering polished, user-centered experiences.`,
    image: "/images/projects/pomodoro.png",
    progress: 60,
    tech: [
      "React",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Local Storage",
      "Socket.io (planned)",
    ],
    features: [
      "Customizable Pomodoro timers and break durations",
      "Real-time countdown with visual progress indicators",
      "Session persistence across page reloads",
      "Lightweight, responsive design for desktop and mobile",
      "Planned live syncing across devices",
    ],
    github: "https://github.com/Virain6/my-pomodoro-app",
    url: "", // Add your live demo URL if you deploy it
  },
  {
    id: "budgeting-app",
    title: "Personal Budgeting App",
    description:
      "Early React project to track expenses and manage monthly budgets.",
    about: `This project was one of my first React applications, designed to help me better understand React fundamentals while building something personally useful. The app provides a clean interface to track expenses, categorize spending, and visualize budgeting over time. Developing this project gave me hands-on experience with React state management, component design, and data flow. I also implemented basic form validation and local storage persistence so budgets and transactions remain saved between sessions. This project laid the foundation for my confidence in modern frontend development and demonstrated how quickly React can be used to create practical tools.`,
    image: "/images/projects/budgeting-app.png",
    progress: 100,
    tech: ["React", "JavaScript", "CSS", "HTML", "LocalStorage"],
    features: [
      "Expense tracking by category",
      "Monthly budget management",
      "Local storage for persistent data",
      "Responsive layout for mobile and desktop",
      "Simple and intuitive user interface",
    ],
    github: "https://github.com/Virain6/budgeting-app",
    url: "", // Optional live demo link if you deploy
  },
];

export const playlistData = [
  {
    id: "featured",
    title: "Featured Work",
    icon: User,
    description: "Some of my best projects.",
    projects: ["nba-scouts", "my-spots", "guesteau"],
  },
  {
    id: "highlights-2024",
    title: "2024 Highlights",
    icon: User,
    description: "Recent work from this year.",
    projects: ["building-blocks", "pomodoro-app"],
  },
  {
    id: "react-projects",
    title: "React Projects",
    icon: User,
    description: "Apps built in React.",
    projects: [
      "nba-scouts",
      "my-spots",
      "budgeting-app",
      "building-blocks",
      "pomodoro-app",
      "ai-prompts",
    ],
  },
  {
    id: "experiments",
    title: "Experiments",
    icon: User,
    description: "Prototypes and side projects.",
    projects: ["electric-bike-arm"],
  },
];
