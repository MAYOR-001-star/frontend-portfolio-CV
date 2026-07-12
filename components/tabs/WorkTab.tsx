"use client";

import Image from "next/image";
import Link from "next/link";
import { Smartphone, Globe, ArrowUpRight, Linkedin } from "lucide-react";
import { projects } from "@/app/data/projects";

interface WorkTabProps {
  setActiveTab: (tab: "work" | "about" | "blogs" | "contact") => void;
}

const testimonials = [
  {
    name: "Tunde Alao",
    role: "Product Lead • PayFlex",
    quote: "Mayor is a rare talent who bridges backend stability and frontend animations seamlessly. He delivered our fintech mobile prototype on React Native weeks ahead of schedule.",
    avatar: "TA",
    linkedin: "https://www.linkedin.com/in/tunde-alao",
  },
  {
    name: "Sarah Jenkins",
    role: "Tech Founder • Xtensionvrse",
    quote: "Exceptional operational knowledge of double-entry ledger logic and PostgreSQL optimization. Mayor worked on our inventory systems and significantly optimized query latencies.",
    avatar: "SJ",
    linkedin: "https://www.linkedin.com/in/sarah-jenkins",
  },
  {
    name: "Chidi Okeke",
    role: "Senior Developer • Dev Labs",
    quote: "Documenting code in public and executing process-driven updates is part of Mayor's engineering identity. Highly collaborative and a stellar engineer.",
    avatar: "CO",
    linkedin: "https://www.linkedin.com/in/chidi-okeke",
  },
];

const techCategories = [
  {
    title: "Frontend",
    items: [
      {
        name: "HTML5",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-orange-600 fill-current">
            <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm4 17.5l5.5 1.8 5.5-1.8 1.1-12.3H6.4l-.2 2.3h10.2l-.3 3H8.3l-.2 2.3h7.8l-.4 4.5-3.5 1-3.5-1-.2-2.3H6.3l.2 2.5z" />
          </svg>
        ),
      },
      {
        name: "CSS3",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-blue-600 fill-current">
            <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm14.7 5.2H6.6l.2 2.3h8.9l-.3 3.3H9l.2 2.3h5l-.4 4.5-3.8 1.1-3.8-1.1-.3-3H6.5l.3 5.3 5.2 1.5 5.2-1.5 1-11.2z" />
          </svg>
        ),
      },
      {
        name: "Tailwind",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-cyan-500 fill-current">
            <path d="M12 6.5c-2.7 0-4.5 1.3-5.4 4 1.3-1.8 2.7-2.2 4.5-1.3.9.4 1.6 1.2 2.4 2 1.2 1.3 2.7 2.8 5.9 2.8 2.7 0 4.5-1.3 5.4-4-1.3 1.8-2.7 2.2-4.5 1.3-.9-.4-1.6-1.2-2.4-2-1.2-1.3-2.7-2.8-5.9-2.8zM6 13.5c-2.7 0-4.5 1.3-5.4 4 1.3-1.8 2.7-2.2 4.5-1.3.9.4 1.6 1.2 2.4 2 1.2 1.3 2.7 2.8 5.9 2.8 2.7 0 4.5-1.3 5.4-4-1.3 1.8-2.7 2.2-4.5 1.3-.9-.4-1.6-1.2-2.4-2-1.2-1.3-2.7-2.8-5.9-2.8z" />
          </svg>
        ),
      },
      {
        name: "Bootstrap",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-purple-600 fill-current">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.89 15.65c-.17.65-.54 1.16-1.11 1.51-.57.36-1.32.54-2.24.54H8.71V8.3h3.58c.84 0 1.52.17 2.05.51.53.34.88.82 1.05 1.44.17.62.14 1.27-.08 1.95-.22.68-.62 1.18-1.21 1.5.76.24 1.29.7 1.59 1.37.3.67.38 1.53.23 2.58zm-4.32-4.71h-1.6V9.77h1.6c.41 0 .73.08.97.23.24.15.39.38.45.69.06.31.02.57-.13.77-.15.2-.41.3-.79.3zm.49 3.48c-.06.32-.23.57-.52.73-.29.16-.68.24-1.17.24h-1.74v-2.31h1.74c.47 0 .84.08 1.11.23.27.15.42.39.46.73.04.34.08.57.12.38z" />
          </svg>
        ),
      },
      {
        name: "JavaScript",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-yellow-500 fill-current">
            <path d="M0 0h24v24H0V0zm19.6 17c-.7-.9-1.6-1.5-2.7-1.8-.7-.2-1.1-.4-1.1-.8 0-.4.3-.5.8-.5.5 0 .9.2 1.2.6l1.7-1.3c-.6-.9-1.6-1.4-2.9-1.4-2.1 0-3.6 1.3-3.6 3.2 0 1.9 1.1 2.7 2.9 3.2 1.2.3 1.8.6 1.8 1.1 0 .5-.5.8-1.2.8-.8 0-1.5-.4-1.9-1l-1.8 1.1c.7 1.3 2.1 2.1 3.7 2.1 2.3 0 3.9-1.2 3.9-3.4 0-1.8-1-2.7-2.9-3.2zm-9.3-3.2h-2v5.7c0 .9-.5 1.3-1.3 1.3-.4 0-.7-.1-.9-.3l-.7 1.6c.5.4 1.2.6 1.9.6 2 0 3-.9 3-3.1v-5.8z" />
          </svg>
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 fill-current">
            <rect width="24" height="24" rx="3" fill="#3178c6" />
            <text x="18" y="19" fill="#ffffff" fontSize="12" fontWeight="black" fontFamily="monospace" textAnchor="end">TS</text>
          </svg>
        ),
      },
      {
        name: "React",
        icon: (
          <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6 md:w-7 md:h-7 text-cyan-400 stroke-current">
            <circle cx="0" cy="0" r="2.05" fill="currentColor" />
            <g strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        ),
      },
    ],
  },
  {
    title: "Mobile",
    items: [
      {
        name: "React Native",
        icon: (
          <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6 md:w-7 md:h-7 text-cyan-400 stroke-current">
            <circle cx="0" cy="0" r="2.05" fill="currentColor" />
            <g strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        ),
      },
      {
        name: "Expo",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-foreground fill-current">
            <path d="M2 3h20v2H2V3zm18 4H4v2h16V7zm-2 4H6v2h12v-2zm-2 4H8v2h8v-2zm-2 4h-4v2h4v-2z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "MongoDB",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-green-500 fill-current">
            <path d="M12 0C12 0 6 6.3 6 11.2c0 3.7 2.7 6.8 6 6.8s6-3.1 6-6.8C18 6.3 12 0 12 0zm1.1 14.8V19h-2.2v-4.2c-1.3-.4-2.2-1.6-2.2-3 0-1.8 1.5-3.2 3.3-3.2s3.3 1.4 3.3 3.2c0 1.4-.9 2.6-2.2 3z" />
          </svg>
        ),
      },
      {
        name: "Next Auth",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-sky-500 fill-current">
            <path d="M12 1L3 5v6c0 5.5 4.5 10 9 11 4.5-1 9-5.5 9-11V5l-9-4zm0 15c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
          </svg>
        ),
      },
      {
        name: "Convex",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-orange-500 fill-current">
            <path d="M12 2L2 12h20L12 2zm0 4.5L17.5 12H6.5L12 6.5zM2 14h20v4H2v-4z" />
          </svg>
        ),
      },
      {
        name: "Better Auth",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-violet-500 stroke-current" fill="none" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286z" />
          </svg>
        ),
      },
      {
        name: "Prisma",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-[#0c344b] dark:text-[#5a80a4] fill-current">
            <path d="M12 2L2 19.5h20L12 2zm-1 4.5l-6.5 11.5h6.5V6.5zm2 0v11.5h6.5L13 6.5z" />
          </svg>
        ),
      },
      {
        name: "Neon",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-emerald-400 fill-current">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
      {
        name: "Firebase",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-amber-500 fill-current">
            <path d="M3.9 19.3l1.1-6.8 6.5 6.5-7.6.3zm8.9.7l6.8-6.8-2.6-8.9-4.2 15.7zm1.1-16l-1.9 3.6 2.2 2.2 1.3-3.8-1.6-2z" />
          </svg>
        ),
      },
      {
        name: "Supabase",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-emerald-500 fill-current">
            <path d="M21 10.5h-7.5V3l-10.5 10.5h7.5V21L21 10.5z" />
          </svg>
        ),
      },
      {
        name: "Appwrite",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-pink-500 stroke-current" fill="none" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
          </svg>
        ),
      },
      {
        name: "Clerk Auth",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-blue-500 fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v5z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Tools & Others",
    items: [
      {
        name: "Git",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-orange-500 fill-current">
            <path d="M23.3 10.9L13.1.7C12.7.3 12 .3 11.6.7L8.2 4.1l3.1 3.1c.8-.3 1.8-.1 2.5.6.7.7.9 1.7.6 2.5l3.1 3.1c.8-.3 1.8-.1 2.5.6.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.7-.7-.9-1.7-.6-2.5L13.5 12c-.3.3-.7.5-1.1.5-.4 0-.8-.2-1.1-.5-.7-.7-.9-1.7-.6-2.5L7.6 6.4l-6.9 7c-.4.4-.4 1.1 0 1.5l10.2 10.2c.4.4 1.1.4 1.5 0l10.9-10.9c.4-.4.4-1.1 0-1.7z" />
          </svg>
        ),
      },
      {
        name: "GitHub",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-foreground fill-current">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        ),
      },
      {
        name: "VS Code",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-blue-500 fill-current">
            <path d="M23.985 6.802a.601.601 0 00-.236-.372L19.46 3.14a.606.606 0 00-.737.018l-8.216 6.035-4.48-3.385a.601.601 0 00-.733.006L.237 9.878a.602.602 0 000 .963l5.057 4.064a.601.601 0 00.733.006l4.48-3.385 8.216 6.035a.606.606 0 00.737.018l4.289-3.29a.601.601 0 00.236-.372V7.126h-.001zm-5.26 9.843l-5.61-4.122 5.61-4.122v8.244z" />
          </svg>
        ),
      },
      {
        name: "Figma",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 fill-current">
            <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
            <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
            <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#F24E1E" />
            <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
            <path d="M16 12c2.2 0 4-1.8 4-4s-1.8-4-4-4h-4v8h4z" fill="#1ABC9C" />
          </svg>
        ),
      },
      {
        name: "npm",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-red-600 fill-current">
            <path d="M0 0v24h24V0H0zm21 18h-3V9h-3v9h-6V6h12v12z" />
          </svg>
        ),
      },
      {
        name: "Postman",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-orange-500 fill-current">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.1 14.8c-.8.8-1.8.8-2.6 0-.8-.8-.8-1.8 0-2.6.8-.8 1.8-.8 2.6 0 .8.8.8 1.8 0 2.6z" />
          </svg>
        ),
      },
    ],
  },
];

export default function WorkTab({ setActiveTab }: WorkTabProps) {
  const displayedProjects = projects.slice(0, 4);

  return (
    <div className="flex flex-col gap-12 animate-slide-up">
      {/* Hero Profile Summary */}
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 border-b border-card-border pb-12">
        <div className="flex-1 flex flex-col gap-4">
          <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">
            Frontend Developer
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight font-display">
            Hi. I'm Mayowa.<br />
            <span className="text-[#8f9cae]">Frontend Dev.</span>
          </h1>
          <p className="text-sm text-subtext leading-relaxed max-w-xl">
            I build and deploy full-stack web and mobile applications using modern JavaScript technologies. I focus on developing scalable user interfaces, reliable backend systems, and maintainable software solutions with an emphasis on performance, usability, and clean architecture.

          </p>
          <button
            onClick={() => setActiveTab("contact")}
            className="self-start mt-2 py-3 px-6 rounded-xl bg-foreground text-background font-mono text-xs hover:opacity-90 active:scale-95 transition-all cursor-pointer font-bold"
          >
            Get In Touch
          </button>
        </div>

        {/* Profile Avatar Image */}
        <div className="relative w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden border-2 border-card-border p-1 bg-card shrink-0 hidden md:block">
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-200">
            <Image
              src="/mayor.png"
              alt="Mayor Headshot"
              fill
              sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Projects Grid Panel */}
      <div className="flex flex-col gap-8">
        <div className="flex sm:items-center justify-between gap-4">
          <h2 className="text-xl font-bold font-display">
            Projects<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Portfolio items list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group border border-card-border bg-card rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
            >
              {/* Image panel */}
              <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden shrink-0 border-b border-card-border">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content panel */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#8f9cae] uppercase tracking-wider">
                    {project.category === "mobile" ? (
                      <Smartphone className="w-3.5 h-3.5" />
                    ) : (
                      <Globe className="w-3.5 h-3.5" />
                    )}
                    <span>{project.tag}</span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-bold font-display text-foreground">
                      {project.title}
                    </h3>
                    <Link
                      href={`/projects/${project.id}`}
                      className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-115 hover:bg-accent group-hover:rotate-45"
                      aria-label={`View ${project.title} details`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <p className="text-xs text-subtext leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Technology tags stack */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-card-border/60">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono bg-badge text-badge-text px-2 py-1 rounded-md border border-card-border/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Projects button */}
        <div className="flex justify-center mt-8">
          <Link
            href="/projects"
            className="py-3.5 px-8 rounded-xl bg-card hover:bg-badge border border-card-border hover:border-accent/40 text-subtext hover:text-accent font-mono text-xs transition-all cursor-pointer font-bold inline-flex items-center gap-2.5 shadow-sm hover:shadow"
          >
            <span>See More Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Tech Stack Section */}
        <div className="flex flex-col gap-8 border-t border-card-border/60 pt-12 mt-12 animate-slide-up">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">
              Skills & Technologies
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-foreground">
              Tech Stack<span className="text-accent">.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6 bg-card border border-card-border rounded-2xl p-6 md:p-8">
            {techCategories.map((category) => (
              <div key={category.title} className="flex flex-col sm:flex-row sm:items-start gap-4 pb-6 last:pb-0 last:border-b-0 border-b border-card-border/40">
                <h3 className="text-xs font-black font-mono text-[#8f9cae] uppercase tracking-wider w-full sm:w-36 shrink-0 pt-1.5">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2.5 flex-1">
                  {category.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-badge hover:bg-card border border-card-border/40 hover:border-accent/30 transition-all hover:scale-[1.03] text-xs font-mono text-foreground cursor-default"
                      title={tech.name}
                    >
                      <div className="w-5 h-5 flex items-center justify-center shrink-0 [&>svg]:!w-5 [&>svg]:!h-5">
                        {tech.icon}
                      </div>
                      <span className="text-xs font-bold text-foreground">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="flex flex-col gap-8 border-t border-card-border/60 pt-12 mt-12 animate-slide-up">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">Recommendations</span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-foreground">Testimonials<span className="text-accent">.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border border-card-border rounded-2xl p-6 flex flex-col justify-between hover:border-accent/30 hover:shadow-md transition-all">
                <p className="text-xs text-subtext leading-relaxed italic mb-6">"{t.quote}"</p>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-badge text-accent border border-card-border flex items-center justify-center font-mono text-xs font-bold shrink-0">{t.avatar}</div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold text-foreground font-display truncate">{t.name}</span>
                      <span className="text-[9px] font-mono text-[#8f9cae] truncate" title={t.role}>{t.role}</span>
                    </div>
                  </div>
                  {t.linkedin && (
                    <a
                      href={t.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-lg border border-card-border bg-badge hover:bg-card text-subtext hover:text-accent flex items-center justify-center transition-all cursor-pointer shrink-0"
                      title={`Connect with ${t.name} on LinkedIn`}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Banner Section */}
        <div className="flex flex-col gap-8 border-t border-card-border/60 pt-12 mt-12 animate-slide-up">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">
              Collaboration
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-foreground">
              Contact<span className="text-accent">.</span>
            </h2>
          </div>

          <div className="bg-[#000000] border border-slate-800 rounded-2xl p-8 md:p-12 text-center flex flex-col items-center justify-center gap-6 shadow-lg">
            <h3 className="text-3xl md:text-4xl font-black font-display text-[#ffffff]">
              Let's Work Together
            </h3>

            <p className="text-sm text-[#8f9cae] max-w-lg leading-relaxed font-sans">
              I'm currently open to freelance contracts, full-time roles, and interesting collaborations. If you have a project in mind or just want to talk, I'd love to hear from you.
            </p>

            <button
              onClick={() => {
                setActiveTab("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="py-3.5 px-8 rounded-full bg-[#ffffff] hover:bg-[#e5e7eb] text-[#111827] font-mono text-xs hover:scale-105 transition-all cursor-pointer font-bold inline-flex items-center gap-2 shadow-md"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-[#111827]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
