"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import StartupLoader from "@/components/StartupLoader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkTab from "@/components/tabs/WorkTab";
import AboutTab from "@/components/tabs/AboutTab";
import BlogsTab from "@/components/tabs/BlogsTab";
import ContactTab from "@/components/tabs/ContactTab";

const useClientLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Home() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<"work" | "about" | "blogs" | "contact">("work");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [loading, setLoading] = useState(true);

  // Check if already loaded in this window session
  useClientLayoutEffect(() => {
    if (typeof window !== "undefined") {
      if (window.sessionStorage.getItem("mayor-loaded") === "true" || (window as any).mayorLoaded) {
        setLoading(false);
      }
    }
  }, []);

  // Check URL query parameters to set initial tab
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get("tab");
      if (tab === "work" || tab === "about" || tab === "blogs" || tab === "contact") {
        setActiveTab(tab);
      }
    }
  }, []);

  // Scroll to top when active tab changes on home page
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [activeTab]);

  // Theme Persistence
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

  const handleStartupComplete = () => {
    if (typeof window !== "undefined") {
      (window as any).mayorLoaded = true;
      window.sessionStorage.setItem("mayor-loaded", "true");
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500 font-sans">
      {/* 1. Startup Boot Loader Screen */}
      {loading && <StartupLoader onComplete={handleStartupComplete} />}

      {/* 2. Main Page Layout (Visible when loaded) */}
      <div className={`transition-all duration-700 ${loading ? "opacity-0 blur-sm" : "opacity-100"}`}>
        {/* Navigation Sticky Header */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} toggleTheme={toggleTheme} />

        {/* Content View Area */}
        <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          {activeTab === "work" && <WorkTab setActiveTab={setActiveTab} />}
          {activeTab === "about" && <AboutTab />}
          {activeTab === "blogs" && <BlogsTab />}
          {activeTab === "contact" && <ContactTab />}
        </main>

        {/* Global Footer */}
        <Footer setActiveTab={setActiveTab} />
      </div>

      {/* Tailwind animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
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
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-slide-up {
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
