import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Nexus Platform",
    description:
      "A SaaS analytics dashboard with real-time data visualization and collaborative team features.",
    longDescription:
      "Nexus Platform is a comprehensive analytics solution built for modern teams. It features real-time data streaming, customizable dashboards, and advanced visualization tools. The platform processes millions of data points daily and presents them through an intuitive, responsive interface.",
    tags: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    image: "/images/project-1.jpg",
    gradient: "from-purple-600 to-blue-600",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    slug: "nexus-platform",
    featured: true,
    year: "2024",
    role: "Lead Developer",
    challenges:
      "The primary challenge was handling real-time data streams from multiple sources while maintaining a smooth 60fps interface. We needed to process and visualize thousands of data points per second without blocking the main thread.",
    solution:
      "Implemented Web Workers for data processing, used canvas-based rendering for high-frequency charts, and built a custom WebSocket management layer with automatic reconnection and data buffering.",
  },
  {
    id: "2",
    title: "Lumina E-Commerce",
    description:
      "A premium e-commerce experience with 3D product previews and AI-powered recommendations.",
    longDescription:
      "Lumina reimagines online shopping with immersive 3D product visualization and intelligent recommendations. Every interaction is crafted to feel premium, from the smooth page transitions to the detailed product exploration experience.",
    tags: ["React", "Three.js", "Node.js", "Stripe"],
    image: "/images/project-2.jpg",
    gradient: "from-cyan-600 to-emerald-600",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    slug: "lumina-ecommerce",
    featured: true,
    year: "2024",
    role: "Full Stack Developer",
    challenges:
      "Creating performant 3D product previews that load quickly and work across all devices, while maintaining a seamless checkout experience with complex cart logic and payment processing.",
    solution:
      "Used progressive loading for 3D models with LOD (Level of Detail) switching, implemented optimistic UI updates for cart operations, and built a custom Stripe integration with support for subscriptions and one-time purchases.",
  },
  {
    id: "3",
    title: "Cipher Chat",
    description:
      "An end-to-end encrypted messaging app with ephemeral messages and secure file sharing.",
    longDescription:
      "Cipher Chat provides military-grade encryption for everyday communication. Built with privacy as the core principle, it features self-destructing messages, encrypted file transfers, and anonymous group conversations.",
    tags: ["React Native", "WebRTC", "Node.js", "MongoDB"],
    image: "/images/project-3.jpg",
    gradient: "from-orange-600 to-rose-600",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    slug: "cipher-chat",
    featured: true,
    year: "2023",
    role: "Full Stack Developer",
    challenges:
      "Implementing reliable end-to-end encryption that doesn't compromise on user experience, handling offline message queuing, and ensuring secure key exchange across devices.",
    solution:
      "Adopted the Signal Protocol for key exchange and message encryption, built a custom offline-first sync engine with conflict resolution, and created an intuitive key verification flow using QR codes.",
  },
  {
    id: "4",
    title: "Pulse Fitness",
    description:
      "A fitness tracking platform with AI coaching, social challenges, and real-time workout metrics.",
    longDescription:
      "Pulse Fitness combines AI-powered workout analysis with social fitness challenges. The platform uses computer vision for form checking, provides personalized training plans, and gamifies the fitness journey with team-based challenges.",
    tags: ["Next.js", "Python", "TensorFlow", "AWS"],
    image: "/images/project-4.jpg",
    gradient: "from-pink-600 to-violet-600",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    slug: "pulse-fitness",
    featured: false,
    year: "2023",
    role: "Frontend Lead",
    challenges:
      "Processing real-time video for pose estimation in the browser, creating smooth and motivating UI animations for workout tracking, and building a social feed that scales.",
    solution:
      "Leveraged TensorFlow.js for client-side pose estimation, built a custom animation system with GSAP for workout progress visualization, and implemented infinite scrolling with virtual lists for the social feed.",
  },
];
