"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/app/data/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface OtherProjectsSliderProps {
  excludeId?: string;
}

export default function OtherProjectsSlider({ excludeId }: OtherProjectsSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Filter projects to showcase
  const displayProjects = excludeId
    ? projects.filter((p) => p.id !== excludeId)
    : projects;

  useEffect(() => {
    // Register ScrollTrigger client-side
    gsap.registerPlugin(ScrollTrigger);

    const slider = sliderRef.current;
    const container = containerRef.current;
    if (!slider || !container) return;

    // Dynamically calculate how far the slider needs to slide to reveal all cards.
    const getScrollAmount = () => {
      const sliderWidth = slider.scrollWidth;
      const containerWidth = slider.parentElement
        ? slider.parentElement.clientWidth
        : container.clientWidth;
      return -(sliderWidth - containerWidth);
    };

    // Create GSAP ScrollTrigger timeline context for cleanup
    const ctx = gsap.context(() => {
      // We use a GSAP timeline linked to ScrollTrigger to introduce start and end scroll buffers
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 64px",     // Pins when the top of the container reaches the sticky header
          end: () => {
            const sliderWidth = slider.scrollWidth;
            const containerWidth = slider.parentElement
              ? slider.parentElement.clientWidth
              : container.clientWidth;
            // Add 600px of extra scroll space for the start/end buffers
            return "+=" + (sliderWidth - containerWidth + 600);
          },
          pin: true,             // Locks the section in place
          pinSpacing: true,      // Pushes subsequent page elements down
          scrub: 1,              // Smooth scroll-linked scrubbing
          invalidateOnRefresh: true, // Recalculate sizes on viewport resize
        },
      });

      // 1. Hold static at x: 0 for 15% of the scroll timeline (Start Buffer)
      tl.to(slider, { x: 0, duration: 0.3 })
        // 2. Animate horizontally over the next 70% of the timeline
        .to(slider, {
          x: () => getScrollAmount(),
          ease: "none",
          duration: 1.4,
        })
        // 3. Hold static at final scroll amount for the last 15% of the timeline (End Buffer)
        .to(slider, {
          x: () => getScrollAmount(),
          duration: 0.3,
        });
    });

    return () => ctx.revert(); // Reverts all GSAP animations and ScrollTriggers on component unmount
  }, [displayProjects]);

  return (
    <div
      ref={containerRef}
      className="border-t border-card-border/60 w-full bg-background flex flex-col justify-center py-12 md:py-16 min-h-[calc(100vh-64px)]"
    >
      {/* Title Header */}
      <div className="max-w-4xl mx-auto px-6 mb-6 w-full">
        <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold block mb-2">
          Explore More Work
        </span>
        <h2 className="text-2xl md:text-3xl font-black font-display tracking-tight text-foreground">
          Other Projects<span className="text-accent">.</span>
        </h2>
      </div>

      {/* Slider Viewport Container (Constrained to content columns) */}
      <div className="max-w-4xl mx-auto px-6 overflow-hidden select-none py-4 w-full">
        <div
          ref={sliderRef}
          className="flex gap-6 w-max py-2 will-change-transform"
        >
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="w-[280px] sm:w-[340px] shrink-0 aspect-[16/10] bg-card border border-card-border rounded-2xl overflow-hidden group/slide relative shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Project Image */}
              <div className="absolute inset-0 w-full h-full bg-slate-100 dark:bg-neutral-800">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover opacity-80 group-hover/slide:opacity-100 group-hover/slide:scale-[1.03] transition-all duration-500"
                  sizes="(max-width: 640px) 280px, 340px"
                />
              </div>

              {/* Gradient Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent flex flex-col justify-end p-5 z-10">
                <span className="text-[9px] font-mono text-accent font-bold uppercase tracking-wider mb-1">
                  {project.tag}
                </span>

                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-sm font-bold font-display text-foreground group-hover/slide:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <div className="w-7 h-7 rounded-full bg-foreground text-background dark:bg-neutral-900 dark:text-foreground flex items-center justify-center transition-transform duration-300 group-hover/slide:scale-110 group-hover/slide:rotate-45">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Detail Page Link */}
              <Link
                href={`/projects/${project.id}`}
                className="absolute inset-0 z-20 cursor-pointer"
                aria-label={`View ${project.title} details`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
