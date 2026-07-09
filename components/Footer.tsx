"use client";

interface FooterProps {
  setActiveTab: (tab: "work" | "about" | "blogs" | "contact") => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="border-t border-card-border py-12 px-6 mt-12 bg-card/40 transition-colors duration-500">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-8 items-start">

        <div className="flex flex-col gap-3 max-w-sm">
          <span className="text-lg font-black tracking-tight font-display">
            Mayor<span className="text-[#8f9cae] font-normal font-mono">.dev</span>
          </span>
          <p className="text-[11px] text-subtext leading-relaxed">
            Fullstack & mobile developer building high-quality web and native experiences — from React to React Native.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 md:gap-16 text-xs font-mono">
          <div className="flex flex-col gap-2">
            <span className="text-[9px] text-[#8f9cae] uppercase tracking-wider">Links</span>
            <button onClick={() => setActiveTab("work")} className="text-subtext hover:text-foreground text-left transition-colors">Work</button>
            <button onClick={() => setActiveTab("about")} className="text-subtext hover:text-foreground text-left transition-colors">About</button>
            <button onClick={() => setActiveTab("blogs")} className="text-subtext hover:text-foreground text-left transition-colors">Blogs</button>
            <button onClick={() => setActiveTab("contact")} className="text-subtext hover:text-foreground text-left transition-colors">Contact</button>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[9px] text-[#8f9cae] uppercase tracking-wider">Get in Touch</span>
            <a href="mailto:mayorkunabdulazeez01@gmail.com" className="text-subtext hover:text-foreground transition-colors">mayorkunabdulazeez01@gmail.com</a>
            {/* <span className="text-[#8f9cae] text-[10px]">Owerri, Rivers • Nigeria</span> */}
          </div>
        </div>

      </div>

      <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-card-border/60 text-[10px] font-mono text-[#8f9cae] text-center sm:text-left">
        © Mayor {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
}
