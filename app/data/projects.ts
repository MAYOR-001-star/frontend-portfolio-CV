export interface Project {
  id: string;
  title: string;
  category: "web" | "mobile";
  tag: string;
  desc: string;
  tags: string[];
  image: string;
  link: string;
  role: string;
  timeline: string;
  overview: string;
  challenges: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "sale",
    title: "Sale",
    category: "mobile",
    tag: "Mobile App",
    desc: "A production-ready Nigerian fintech platform engineered with a fault-tolerant double-entry ledger, asynchronous API orchestration, and cryptographic security for zero-loss VTU transactions.",
    tags: ["React Native", "PostgreSQL", "Node.js", "System Architecture", "Fintech"],
    image: "/project_sale.png",
    link: "https://github.com/mayorazubike",
    role: "Lead Mobile Developer",
    timeline: "Live",
    overview: "Sale is a high-performance Nigerian fintech mobile application designed to facilitate seamless and secure VTU transactions, bill payments, and cash deposits. Built with React Native and PostgreSQL, the app features an offline-first transactional ledger to prevent user balance discrepancies under poor network connectivity.",
    challenges: "Securing asynchronous transactional queries under highly volatile network latency. We resolved this by implementing an atomic, double-entry database ledger logic combined with optimistic state updates in React Native.",
    features: ["Atomic Ledger Logic", "Secure Pin & Biometrics Authentication", "Asynchronous API Redundancy", "Offline-First Balance Synced"]
  },
  {
    id: "xtension",
    title: "Xtensionvrse",
    category: "web",
    tag: "Web App",
    desc: "A specialized e-commerce platform for braiding hair extensions, built in public with advanced filtering, client inventory views, and smooth checkout integrations.",
    tags: ["E-commerce", "React", "Node.js", "PostgreSQL", "Build In Public"],
    image: "/project_xtension.png",
    link: "https://github.com/mayorazubike",
    role: "Full Stack Developer",
    timeline: "Live",
    overview: "Xtensionvrse is a specialized e-commerce platform for ordering premium hair extensions. It features an advanced category filtering engine, vendor dashboard interfaces, real-time inventory management, and modular payments integration.",
    challenges: "Rendering high-resolution product media files dynamically without lagging the customer checkout flow. We utilized Next.js Image caching optimizations alongside Cloudinary CDN services.",
    features: ["Multi-Vendor Support", "Frictionless Guest Checkout", "Dynamic Advanced Filters", "Real-Time Stock Counter"]
  },
  {
    id: "confession",
    title: "CONFESSION",
    category: "web",
    tag: "Web App",
    desc: "Real-time anonymous confession board with live updates, grid card loading, masonry display layout, and custom admin moderation modules.",
    tags: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "Socket.io"],
    image: "/project_confession.png",
    link: "https://github.com/mayorazubike",
    role: "Full Stack Developer",
    timeline: "Live",
    overview: "CONFESSION is an anonymous, real-time confession board for campus students, allowing students to publish anonymous updates, comments, and reactions. The system uses a WebSocket layer for instant board updates.",
    challenges: "Preventing spam messages and malicious scripts from being posted anonymously. We resolved this by implementing rate limiters at the API gateway level and automated client-side content sanitization.",
    features: ["Real-Time WebSocket Sync", "Automated Spam Filters", "Masonry Dynamic Layouts", "Card Reaction Modules"]
  },
  {
    id: "fitlog",
    title: "FitLog",
    category: "mobile",
    tag: "Mobile App",
    desc: "A high-performance mobile fitness tracking application built with React Native and Expo, featuring real-time progress visualization, step counters, and push notifications.",
    tags: ["React Native", "Expo", "HealthKit Integration", "Node.js", "PostgreSQL"],
    image: "/project_fitlog.png",
    link: "https://github.com/mayorazubike",
    role: "Lead Mobile Developer",
    timeline: "Live",
    overview: "FitLog is a high-performance mobile fitness log and calorie tracking application featuring data visualization of workouts, offline logging, and device health kit integrations.",
    challenges: "Syncing background step count data reliably across different mobile operating systems. We utilized customized Expo plugins to run native device sensor listeners in the background.",
    features: ["Apple Health & Google Fit Sync", "Background Step Detection", "Dynamic Exercise Graphing", "Offline Progress Database"]
  },
  {
    id: "yvonne",
    title: "Yvonne Kafor Coaching",
    category: "web",
    tag: "Web App",
    desc: "A professional service platform for divorce, custody, and parental coaching with parental coaching tools, consultation schedulers, and payment gateway.",
    tags: ["React", "Next.js", "Tailwind CSS", "Calendly API", "Services"],
    image: "/project_translator.png",
    link: "https://github.com/mayorazubike",
    role: "Full Stack Developer",
    timeline: "Live",
    overview: "A specialized professional services website for divorce custody mediation and parental coaching, featuring integrated scheduling calendars, client libraries, and parental coaching resources.",
    challenges: "Configuring cross-platform API calls to schedule consultations with automatic time zone translations. We configured custom Calendly API endpoints with time zone normalization.",
    features: ["Consultation Scheduling Engine", "Parenting Resource Portal", "Timezone Synced Calendars", "Stripe Checkout Integrations"]
  },
  {
    id: "lingua",
    title: "LinguaCore AI",
    category: "web",
    tag: "Web App",
    desc: "AI-Powered Language Mastery Platform utilizing translation nodes, text-to-speech feedback, and interactive audio correction files.",
    tags: ["Next.js", "OpenAI API", "Node.js", "PostgreSQL", "AI Tools"],
    image: "/project_sale.png",
    link: "https://github.com/mayorazubike",
    role: "Full Stack Developer",
    timeline: "Live",
    overview: "LinguaCore AI is an intelligent language learning platform designed to provide personalized, interactive, and high-frequency language practice using advanced AI models to simulate real-life conversations.",
    challenges: "Building a real-time, low-latency voice interaction system that feels natural and handles localized dialects accurately.",
    features: ["AI-Powered Conversations", "Personalized Learning Paths", "Real-time Feedback", "Voice Analysis"]
  },
  {
    id: "translator",
    title: "Translator App",
    category: "mobile",
    tag: "Mobile App",
    desc: "A cross-platform mobile translator supporting 100+ languages — including native dialects like Igbo, Yoruba, and Hausa — built using React Native.",
    tags: ["React Native", "Expo", "Translation API", "Offline Translation"],
    image: "/project_translator.png",
    link: "https://github.com/mayorazubike",
    role: "Lead Mobile Developer",
    timeline: "Live",
    overview: "A fast cross-platform mobile translation application supporting over 100 languages, including localized Nigerian dialects like Igbo, Yoruba, and Hausa, running fully offline.",
    challenges: "Packaging huge deep learning models within mobile application bundles without exceeding App Store installation limits. We used compressed translation datasets dynamically loaded on demand.",
    features: ["Dialect Translation Sync", "Offline Translation Database", "Text-to-Speech Engine", "OCR Image Text Translation"]
  }
];
