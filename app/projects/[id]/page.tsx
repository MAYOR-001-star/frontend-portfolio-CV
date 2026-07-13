"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Sun, Moon } from "lucide-react";
import { projects } from "@/app/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OtherProjectsSlider from "@/components/OtherProjectsSlider";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { id } = React.use(params);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [scrollProgress, setScrollProgress] = useState(0);

  const project = projects.find((p) => p.id === id);

  // Scroll Progress Listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const scrolled = (window.scrollY / totalScroll) * 100;
        setScrollProgress(scrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground font-mono text-xs gap-4">
        <span>Project not found.</span>
        <Link href="/" className="underline text-accent">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500 font-sans flex flex-col">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-16 left-0 h-[3px] bg-foreground z-[50] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation Header */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 flex-1 w-full animate-slide-up">
        
        {/* Back navigation breadcrumb */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-subtext hover:text-accent font-bold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-card-border">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-foreground leading-none">
              {project.title}
            </h1>
            <p className="text-sm md:text-base text-subtext font-medium leading-relaxed max-w-xl">
              {project.desc}
            </p>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto py-3 px-6 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-mono text-xs hover:opacity-90 active:scale-95 transition-all cursor-pointer font-bold inline-flex items-center gap-2 shrink-0"
          >
            <span>Visit Live Site</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Hero Media Container */}
        <div className="relative w-full aspect-[21/9] bg-card border border-card-border rounded-2xl overflow-hidden mb-16">
          <Image
            src={project.image}
            alt={`${project.title} Banner`}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        {/* Detail Matrix: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Rail: Metadata info */}
          <div className="md:col-span-4 flex flex-col gap-8 border-b md:border-b-0 pb-8 md:pb-0 border-card-border">
            {/* Role */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">Role</span>
              <span className="text-sm font-bold font-display text-foreground">{project.role}</span>
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">Timeline</span>
              <span className="text-sm font-bold font-display text-foreground">{project.timeline}</span>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono bg-badge text-foreground px-2.5 py-1 rounded-md border border-card-border/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Board: Written content */}
          <div className="md:col-span-8 flex flex-col gap-10">
            {/* Overview */}
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-bold font-display text-foreground flex items-center gap-2">
                <span className="text-accent text-sm font-mono">01.</span> Overview
              </h2>
              <p className="text-xs md:text-sm text-subtext leading-relaxed font-sans">
                {project.overview}
              </p>
            </div>

            {/* Challenges & Solutions */}
            <div className="flex flex-col gap-3 border-t border-card-border/60 pt-8">
              <h2 className="text-lg font-bold font-display text-foreground flex items-center gap-2">
                <span className="text-accent text-sm font-mono">02.</span> Challenges & Solutions
              </h2>
              <p className="text-xs md:text-sm text-subtext leading-relaxed font-sans">
                {project.challenges}
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-col gap-4 border-t border-card-border/60 pt-8">
              <h2 className="text-lg font-bold font-display text-foreground flex items-center gap-2">
                <span className="text-accent text-sm font-mono">03.</span> Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.features.map((feature, idx) => (
                  <div
                    key={feature}
                    className="p-4 border border-card-border bg-card rounded-xl flex items-center gap-3.5"
                  >
                    <span className="w-6 h-6 rounded-full bg-badge text-accent flex items-center justify-center text-[10px] font-mono font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Project Screens Panel */}
        <div className="border-t border-card-border/60 pt-12 mt-12">
          <h2 className="text-lg font-bold font-display text-foreground mb-8">
            Project Screens
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Screen 1 placeholder */}
            <div className="relative aspect-[16/10] bg-card border border-card-border rounded-xl overflow-hidden p-6 flex flex-col justify-between">
              <div className="text-[10px] font-mono text-accent font-bold">SCREEN 01 — USER DASHBOARD</div>
              <div className="relative w-full h-[80%] rounded-lg overflow-hidden border border-card-border/50">
                <Image
                  src={project.image}
                  alt={`${project.title} Dashboard Screen`}
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            {/* Screen 2 placeholder */}
            <div className="relative aspect-[16/10] bg-card border border-card-border rounded-xl overflow-hidden p-6 flex flex-col justify-between">
              <div className="text-[10px] font-mono text-accent font-bold">SCREEN 02 — WORKFLOW MODULES</div>
              <div className="relative w-full h-[80%] rounded-lg overflow-hidden border border-card-border/50">
                <Image
                  src={project.image}
                  alt={`${project.title} Settings Screen`}
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Interactive Other Projects Slider */}
      <OtherProjectsSlider excludeId={project.id} />

      {/* Global Footer component */}
      <Footer setActiveTab={(tab) => {
        // Redirect to home tab
        window.location.href = `/?tab=${tab}`;
      }} />
    </div>
  );
}
