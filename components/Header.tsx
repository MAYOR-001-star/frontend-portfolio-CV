"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, ArrowLeft } from "lucide-react";

interface HeaderProps {
  activeTab?: "work" | "about" | "blogs" | "contact" | null;
  setActiveTab?: (tab: "work" | "about" | "blogs" | "contact") => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
  showBackLink?: boolean;
}

export default function Header({
  activeTab,
  setActiveTab,
  theme,
  toggleTheme,
  showBackLink = false,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`border-b border-card-border bg-header backdrop-blur-md sticky top-0 z-40 transition-colors duration-500 ${
        isMobileMenuOpen ? "fixed inset-0 h-screen flex flex-col md:sticky md:h-auto md:block" : "relative"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between w-full shrink-0">
        {/* Logo */}
        {setActiveTab ? (
          <button
            onClick={() => {
              setActiveTab("work");
              setIsMobileMenuOpen(false);
            }}
            className="text-lg font-black tracking-tight font-display hover:opacity-85 transition-opacity cursor-pointer"
          >
            Mayor<span className="text-[#8f9cae] font-normal font-mono">.dev</span>
          </button>
        ) : (
          <Link
            href="/"
            className="text-lg font-black tracking-tight font-display hover:opacity-85 transition-opacity"
          >
            Mayor<span className="text-[#8f9cae] font-normal font-mono">.dev</span>
          </Link>
        )}

        {/* Controls / Links container */}
        <div className="flex items-center gap-4">
          {/* Navigation links (Desktop only if not showBackLink) */}
          {!showBackLink ? (
            <nav className="hidden md:flex items-center gap-4 text-xs font-mono">
              {(["work", "about", "blogs", "contact"] as const).map((tab) => {
                const isActive = activeTab === tab;
                const classes = `px-3 py-1.5 rounded-lg transition-all capitalize ${
                  isActive ? "text-accent font-bold" : "text-[#8f9cae] hover:text-foreground"
                }`;

                return setActiveTab ? (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`${classes} cursor-pointer`}
                  >
                    {tab}
                  </button>
                ) : (
                  <Link key={tab} href={`/?tab=${tab}`} className={classes}>
                    {tab}
                  </Link>
                );
              })}
            </nav>
          ) : (
            <Link
              href="/"
              className="px-3 py-1.5 rounded-lg border border-card-border hover:border-accent/30 text-xs font-mono text-subtext hover:text-accent transition-all flex items-center gap-1.5 font-bold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Back to Portfolio</span>
              <span className="sm:hidden">Back</span>
            </Link>
          )}

          {/* Accent Line Separator */}
          <div className="w-[1px] h-4 bg-card-border"></div>

          {/* Theme Selector Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-badge transition-colors text-subtext hover:text-foreground cursor-pointer"
            aria-label="Toggle theme mode"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4 text-sky-400" />
            )}
          </button>

          {/* Mobile hamburger button (if not showBackLink) */}
          {!showBackLink && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-badge text-subtext hover:text-foreground transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      {!showBackLink && isMobileMenuOpen && (
        <div className="md:hidden flex-1 bg-background backdrop-blur-2xl transition-colors duration-500 z-30 animate-fade-in flex flex-col items-center justify-center p-6 gap-8 w-full">
          <nav className="flex flex-col items-center gap-6 text-xl font-mono">
            {(["work", "about", "blogs", "contact"] as const).map((tab) => {
              const isActive = activeTab === tab;
              const classes = `px-6 py-2 rounded-xl transition-all text-center capitalize ${
                isActive ? "text-accent font-bold text-2xl" : "text-[#8f9cae] hover:text-foreground"
              }`;

              return setActiveTab ? (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`${classes} cursor-pointer`}
                >
                  {tab}
                </button>
              ) : (
                <Link
                  key={tab}
                  href={`/?tab=${tab}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={classes}
                >
                  {tab}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
