"use client";

import { useState } from "react";
import { Calendar, ArrowUpRight, Search } from "lucide-react";

// Platform logo SVGs for premium branding
const LinkedInIcon = () => (
  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const MediumIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0a3.13 3.13 0 0 1-3.13 3.14 3.13 3.13 0 0 1-3.13-3.14 3.13 3.13 0 0 1 3.13-3.14 3.13 3.13 0 0 1 3.13 3.14zm3.04 0a1.07 1.07 0 0 1-1.07 1.08A1.07 1.07 0 0 1 21.86 12a1.07 1.07 0 0 1 1.07-1.08 1.07 1.07 0 0 1 1.07 1.08z" />
  </svg>
);

const blogs = [
  {
    id: "b1",
    title: "FUTO Night Class Delusion: Surviving 2 AM Engineering Sprints",
    excerpt: "A look at staying awake at the FUTO library, balancing academic math tests with client codebases, and building websites under fluctuating campus power grids.",
    date: "Feb 10, 2026",
    tags: ["Thoughts", "FUTO Life", "Engineering"],
    platform: "medium",
    link: "https://medium.com/@mayorazubike/futo-night-class-delusion-surviving-2-am-engineering-sprints-12345",
  },
  {
    id: "b2",
    title: "Fintech Ledgers: The Double-Entry System for VTU Architectures",
    excerpt: "A technical walkthrough on establishing transactional safety for utility apps, mapping ledger logs, and writing SQL procedures for atomic balance reductions.",
    date: "Jan 28, 2026",
    tags: ["Developer", "Fintech", "SQL"],
    platform: "linkedin",
    link: "https://www.linkedin.com/in/abdul-azeez-baruwa-505551316",
  },
  {
    id: "b3",
    title: "Scaling React Native: From Expo Go to Production Configs",
    excerpt: "How to transition mobile apps from development sandbox files into production releases. Optimizing assets, managing packages, and setting credentials.",
    date: "Dec 15, 2025",
    tags: ["Developer", "Mobile", "React Native"],
    platform: "medium",
    link: "https://medium.com/@mayorazubike/scaling-react-native-from-expo-go-to-production-configs-67890",
  },
  {
    id: "b4",
    title: "Building a Resilient Frontend Architecture in Next.js",
    excerpt: "Best practices for page layout persistence, handling hydration errors, and optimizing CSS modules in modern React meta-frameworks.",
    date: "Nov 02, 2025",
    tags: ["Web", "Next.js", "Architecture"],
    platform: "linkedin",
    link: "https://www.linkedin.com/in/abdul-azeez-baruwa-505551316",
  },
];

export default function BlogsTab() {
  const [searchQuery, setSearchQuery] = useState("");
  const [platformFilter, setPlatformFilter] = useState<"all" | "medium" | "linkedin">("all");

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesPlatform = platformFilter === "all" || blog.platform === platformFilter;

    return matchesSearch && matchesPlatform;
  });

  return (
    <div className="flex flex-col gap-8 animate-slide-up">
      {/* Header section with live search and filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-card-border pb-8 gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">
            Dev Writings & Publications
          </span>
          <h1 className="text-3xl font-black tracking-tight font-display text-foreground">
            Blogs<span className="text-accent">.</span>
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:max-w-xl justify-end">
          {/* Platform Filters */}
          <div className="flex items-center gap-1.5 bg-badge p-1 rounded-xl text-[10px] font-mono border border-card-border w-full sm:w-auto justify-center">
            {(["all", "medium", "linkedin"] as const).map((platform) => (
              <button
                key={platform}
                onClick={() => setPlatformFilter(platform)}
                className={`px-3 py-1.5 rounded-lg transition-all capitalize cursor-pointer font-bold ${
                  platformFilter === platform
                    ? "bg-card text-foreground border border-card-border"
                    : "text-subtext hover:text-foreground"
                }`}
              >
                {platform}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-subtext/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-card border border-card-border rounded-xl py-2 pl-9 pr-4 text-xs font-mono placeholder-subtext/60 outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Blogs List */}
      <div className="flex flex-col gap-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <a
              key={blog.id}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border border-card-border bg-card hover:border-accent/30 rounded-2xl flex flex-col gap-4 transition-all duration-300 relative overflow-hidden hover:shadow-md cursor-pointer"
            >
              {/* Top metadata row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* Platform Badge & Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* Platform Badge */}
                  {blog.platform === "linkedin" ? (
                    <span className="flex items-center gap-1.5 text-[9px] font-mono bg-sky-500/10 text-sky-500 px-2 py-0.5 rounded border border-sky-500/20 font-bold">
                      <LinkedInIcon />
                      LinkedIn
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-[9px] font-mono bg-neutral-900/10 text-neutral-800 dark:bg-neutral-100/15 dark:text-neutral-200 px-2 py-0.5 rounded border border-neutral-900/15 dark:border-neutral-100/15 font-bold">
                      <MediumIcon />
                      Medium
                    </span>
                  )}

                  {/* Tags */}
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono bg-badge text-subtext px-2 py-0.5 rounded border border-card-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Date */}
                <span className="text-[9px] font-mono text-subtext/80 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {blog.date}
                </span>
              </div>

              {/* Title & Excerpt */}
              <div className="flex flex-col gap-1.5 pr-8 relative">
                <h3 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors font-display flex items-center gap-1.5">
                  {blog.title}
                </h3>
                <p className="text-xs text-subtext leading-relaxed">
                  {blog.excerpt}
                </p>

                {/* Floating external link arrow */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-badge text-subtext flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-105">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className="text-center py-12 text-xs text-subtext font-mono border border-dashed border-card-border rounded-2xl">
            No articles found matching "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
}
