"use client";

export default function AboutTab() {
  return (
    <div className="flex flex-col gap-12 animate-slide-up">
      <div className="flex flex-col gap-3 border-b border-card-border pb-8">
        <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">
          Biography & Principles
        </span>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight font-display text-foreground leading-tight">
          I'm Mayor. I'm a Developer <br />
          working from <span className="text-[#8f9cae]">Rivers, Nigeria.</span>
        </h1>
      </div>

      {/* Bio summary columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-subtext leading-relaxed font-sans">
        <div className="flex flex-col gap-4">
          <p>
            I study Software Engineering at FUTO (Federal University of Technology, Owerri). Being a developer to me means combining structural backend logic with smooth user interactions on frontend and mobile frameworks.
          </p>
          <p>
            Before committing to code full-time, I worked as a technical virtual assistant, organizing digital projects, sorting servers, and fixing site layouts. This operational experience taught me the value of clean communication, client alignment, and documenting processes.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            I spend my nights researching scalable systems and building practical platforms (like the Sale double-entry VTU ledger app or e-commerce models). As a student in Owerri, I balance research studies with writing performance code, publishing builds, and sharing insights.
          </p>
          <p className="border-l-2 border-accent/40 pl-4 text-xs italic font-mono text-foreground/80">
            "I believe in shipping fast, testing thoroughly, and designing backend operations to fail gracefully under heavy load conditions."
          </p>
        </div>
      </div>

      {/* Styling block principles */}
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold font-display text-foreground">
          Core Working Principles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 border border-card-border bg-card rounded-2xl">
            <span className="text-[10px] font-mono text-accent font-bold">01 MAKE IT REAL</span>
            <h3 className="text-xs font-bold font-display text-foreground mt-1 mb-2">Build & Iterate</h3>
            <p className="text-[11px] text-subtext leading-relaxed">
              I believe in moving code from conceptual prototypes into functional staging pages as fast as possible to optimize client workflows.
            </p>
          </div>

          <div className="p-5 border border-card-border bg-card rounded-2xl">
            <span className="text-[10px] font-mono text-accent font-bold">02 COLLABORATIVE CODE</span>
            <h3 className="text-xs font-bold font-display text-foreground mt-1 mb-2">Document publicly</h3>
            <p className="text-[11px] text-subtext leading-relaxed">
              Writing code in public, explaining architectural plans, and setting up neat schemas ensures seamless updates and transparent work.
            </p>
          </div>

          <div className="p-5 border border-card-border bg-card rounded-2xl">
            <span className="text-[10px] font-mono text-accent font-bold">03 PERFORMANCE FOCUSED</span>
            <h3 className="text-xs font-bold font-display text-foreground mt-1 mb-2">Optimize latency</h3>
            <p className="text-[11px] text-subtext leading-relaxed">
              From database query indexes to mobile app bundles, I prioritize minimizing page load timings and system lags.
            </p>
          </div>

          <div className="p-5 border border-card-border bg-card rounded-2xl">
            <span className="text-[10px] font-mono text-accent font-bold">04 MODULAR SCALE</span>
            <h3 className="text-xs font-bold font-display text-foreground mt-1 mb-2">TypeScript & Components</h3>
            <p className="text-[11px] text-subtext leading-relaxed">
              Relying on clean typings, strict schemas, and decoupled component layouts makes portals easy to extend as systems scale.
            </p>
          </div>
        </div>
      </div>

      {/* Timelines of experience */}
      <div className="border-t border-card-border/60 pt-10 flex flex-col gap-6">
        <h2 className="text-lg font-bold font-display text-foreground">
          Timeline / Experience
        </h2>
        <div className="border-l-2 border-card-border pl-4 flex flex-col gap-8">
          <div className="relative">
            <div className="absolute -left-[22px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border border-background"></div>
            <span className="text-[10px] font-mono text-accent font-bold">2023 - PRESENT</span>
            <h4 className="text-xs font-bold text-foreground mt-1">Self-Employed Full-Stack Developer</h4>
            <p className="text-[11px] text-subtext mt-1.5 max-w-2xl leading-relaxed">
              Building client web and mobile solutions. Designing transactional databases with PostgreSQL, writing APIs in Node.js, and deploying high-speed mobile interfaces using React Native and Expo.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[22px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 border border-background"></div>
            <span className="text-[10px] font-mono text-[#8f9cae]">2022 - PRESENT</span>
            <h4 className="text-xs font-bold text-foreground mt-1">Student of Software Engineering • FUTO</h4>
            <p className="text-[11px] text-subtext mt-1.5 max-w-2xl leading-relaxed">
              Undergoing structured coursework at Federal University of Technology, Owerri, focusing on Algorithms, Data Structures, Relational Database Systems, and Object-Oriented Software Design.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[22px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 border border-background"></div>
            <span className="text-[10px] font-mono text-[#8f9cae]">2021 - 2022</span>
            <h4 className="text-xs font-bold text-foreground mt-1">Technical Virtual Assistant</h4>
            <p className="text-[11px] text-subtext mt-1.5 max-w-2xl leading-relaxed">
              Supported e-commerce platforms, managed email templates, sorted database records, and resolved basic styling/layout issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
