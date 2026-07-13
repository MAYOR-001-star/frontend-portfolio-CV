"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  Globe,
  ArrowUpRight,
  ArrowLeft,
  Sun,
  Moon,
} from "lucide-react";
import { projects } from "../data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OtherProjectsSlider from "@/components/OtherProjectsSlider";

export default function ProjectsPage() {
  const [projectFilter, setProjectFilter] = useState<"all" | "web" | "mobile">("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Sync theme with local storage and document class
  useEffect(() => {
    const savedTheme = localStorage.getItem("mayor-theme");
    if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("mayor-theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mayor-theme", "light");
    }
  };

  const filteredProjects = projects.filter((project) => {
    if (projectFilter === "all") return true;
    return project.category === projectFilter;
  });

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500 font-sans">

      {/* Navigation Header */}
      <Header theme={theme} toggleTheme={toggleTheme} showBackLink={true} />

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 animate-slide-up">

        {/* Page Title & Filter Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-card-border pb-8 mb-12 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">
              Full Archive
            </span>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight font-display text-foreground">
              All Projects<span className="text-accent">.</span>
            </h1>
          </div>

          {/* Categories filter switches - Desktop */}
          <div className="hidden sm:flex items-center gap-2 bg-badge p-1 rounded-xl text-xs font-mono border border-card-border sm:self-auto">
            <button
              onClick={() => setProjectFilter("all")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${projectFilter === "all"
                ? "bg-card text-foreground font-bold border border-card-border"
                : "text-subtext hover:text-foreground"
                }`}
            >
              All
            </button>
            <button
              onClick={() => setProjectFilter("web")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${projectFilter === "web"
                ? "bg-card text-foreground font-bold border border-card-border"
                : "text-subtext hover:text-foreground"
                }`}
            >
              Web
            </button>
            <button
              onClick={() => setProjectFilter("mobile")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${projectFilter === "mobile"
                ? "bg-card text-foreground font-bold border border-card-border"
                : "text-subtext hover:text-foreground"
                }`}
            >
              Mobile
            </button>
          </div>

          {/* Categories filter switches - Mobile */}
          <div className="relative w-full sm:hidden">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between bg-card border border-card-border rounded-xl py-2.5 px-3.5 text-xs font-mono text-foreground outline-none focus:border-accent transition-colors cursor-pointer font-bold capitalize"
            >
              <span>{projectFilter === "all" ? "All" : projectFilter === "web" ? "Web" : "Mobile"}</span>
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 text-subtext ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {isDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div className="absolute left-0 right-0 mt-1.5 bg-card border border-card-border rounded-xl shadow-lg z-20 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-100">
                  {(["all", "web", "mobile"] as const).map((filterOpt) => (
                    <button
                      key={filterOpt}
                      onClick={() => {
                        setProjectFilter(filterOpt);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-mono transition-colors capitalize cursor-pointer font-bold ${
                        projectFilter === filterOpt
                          ? "bg-badge text-foreground font-black border-l-2 border-accent"
                          : "text-subtext hover:bg-badge/50 hover:text-foreground"
                      }`}
                    >
                      {filterOpt === "all" ? "All" : filterOpt}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
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
        ) : (
          <div className="text-center py-20 text-xs text-subtext font-mono border border-dashed border-card-border rounded-2xl">
            No projects found matching the filter.
          </div>
        )}
      </main>

      {/* Interactive Other Projects Slider */}
      <OtherProjectsSlider />

      {/* Global Footer */}
      <Footer setActiveTab={(tab) => {
        window.location.href = `/?tab=${tab}`;
      }} />

      {/* Slide up animation styling */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

    </div>
  );
}
