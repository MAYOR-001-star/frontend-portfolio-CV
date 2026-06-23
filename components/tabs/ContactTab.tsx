"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Github, Linkedin, Loader2, Send } from "lucide-react";

export default function ContactTab() {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMsg, setFormMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mayorkunabdulazeez01@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMsg) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
      setFormName("");
      setFormEmail("");
      setFormMsg("");
      setTimeout(() => setFormSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-10 animate-slide-up">
      <div className="flex flex-col gap-2 border-b border-card-border pb-8">
        <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">
          Connect & Build
        </span>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight font-display text-foreground leading-tight">
          Get in Touch
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Info & social links panel */}
        <div className="md:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-bold font-display text-foreground">
              Let's build something real together.
            </h2>
            <p className="text-xs text-subtext leading-relaxed">
              Have a freelance project, a technical requirement, or want to discuss full-stack developer opportunities? Copy my email or find me on socials.
            </p>
          </div>

          {/* Copy Email module */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono text-[#8f9cae] uppercase">
              Email Address
            </span>
            <button
              onClick={copyEmail}
              className="flex items-center justify-between bg-card hover:bg-badge border border-card-border rounded-xl p-3.5 text-xs font-mono text-foreground hover:text-accent transition-all group cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-subtext group-hover:text-accent transition-colors" />
                <span>mayorkunabdulazeez01@gmail.com</span>
              </span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 animate-scale-in" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-[#8f9cae] group-hover:text-accent transition-colors" />
              )}
            </button>
            {copied && (
              <span className="text-[9px] font-mono text-cyan-500 dark:text-cyan-400 animate-fade-in pl-1">
                Email copied to clipboard! 📋
              </span>
            )}
          </div>

          {/* Social Buttons Stack */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono text-[#8f9cae] uppercase">
              Social Handles
            </span>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/MAYOR-001-star"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-card-border bg-card text-subtext hover:text-foreground hover:border-accent transition-all hover:scale-105"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="www.linkedin.com/in/abdul-azeez-baruwa-505551316"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-card-border bg-card text-subtext hover:text-foreground hover:border-accent transition-all hover:scale-105"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              {/* <a
                href="https://x.com/faya_lordd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-card-border bg-card text-subtext hover:text-foreground hover:border-accent transition-all hover:scale-105"
                title="Twitter / X"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a> */}
              {/* 
              <a
                href="https://www.instagram.com/iam__mayor"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-card-border bg-card text-subtext hover:text-foreground hover:border-accent transition-all hover:scale-105"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              */}
            </div>
          </div>
        </div>

        {/* Dynamic Contact Form panel */}
        <div className="md:col-span-7 bg-card border border-card-border rounded-2xl p-6 md:p-8">
          {formSuccess ? (
            <div className="p-6 rounded-xl border border-cyan-500/20 dark:border-cyan-400/20 bg-cyan-500/5 dark:bg-cyan-400/5 text-cyan-600 dark:text-cyan-400 flex flex-col items-center gap-4 text-center">
              <Check className="w-8 h-8 text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-400/10 p-1.5 rounded-full" />
              <div className="flex flex-col gap-1.5">
                <span className="text-sm font-bold font-display">Message Sent!</span>
                <span className="text-xs text-[#8f9cae] leading-relaxed">
                  Thank you for writing. I've logged your query and will get back to you shortly.
                </span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleContact} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-[9px] font-mono text-[#8f9cae] uppercase">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Baruwa Abdul-azeez Mayowa"
                  className="w-full bg-badge border border-card-border focus:border-accent rounded-xl py-3 px-4 text-xs font-sans outline-none transition-colors text-foreground"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[9px] font-mono text-[#8f9cae] uppercase">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="mayorkunabdulazeez01@gmail.com"
                  className="w-full bg-badge border border-card-border focus:border-accent rounded-xl py-3 px-4 text-xs font-sans outline-none transition-colors text-foreground"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[9px] font-mono text-[#8f9cae] uppercase">
                  Project Details
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formMsg}
                  onChange={(e) => setFormMsg(e.target.value)}
                  placeholder="Hey Mayor, I would love to build a cross-platform mobile app for..."
                  className="w-full bg-badge border border-card-border focus:border-accent rounded-xl py-3 px-4 text-xs font-sans outline-none transition-colors resize-none text-foreground"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 py-3.5 px-6 rounded-xl bg-foreground text-background font-mono text-xs hover:opacity-90 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer font-bold disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
