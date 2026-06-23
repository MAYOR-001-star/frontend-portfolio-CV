"use client";

import { useState, useEffect } from "react";

interface StartupLoaderProps {
  onComplete: () => void;
}

export default function StartupLoader({ onComplete }: StartupLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [loaderText, setLoaderText] = useState("0% — INITIALIZING");

  // Loading Screen Timer
  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        const increment = Math.floor(Math.random() * 10) + 3;
        const nextProgress = Math.min(progress + increment, 100);
        setProgress(nextProgress);

        if (nextProgress < 25) {
          setLoaderText(`${nextProgress}% — INITIALIZING SYSTEM`);
        } else if (nextProgress < 50) {
          setLoaderText(`${nextProgress}% — LOADING CORE ASSETS`);
        } else if (nextProgress < 75) {
          setLoaderText(`${nextProgress}% — INJECTING UTILITIES`);
        } else if (nextProgress < 100) {
          setLoaderText(`${nextProgress}% — COMPILING SYSTEM CODE`);
        } else {
          setLoaderText("100% — READY");
        }
      }, 70);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => {
        onComplete();
      }, 550);
      return () => clearTimeout(finishTimer);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#ffffff] dark:bg-[#0b0f19] flex flex-col items-center justify-center transition-opacity duration-500 select-none">
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="text-3xl md:text-5xl font-black tracking-tight text-[#111827] dark:text-[#f9fafb] font-display">
          Mayor<span className="text-[#8f9cae] font-normal font-mono">.dev</span>
        </div>

        {/* Progress bar container */}
        <div className="w-56 h-[3px] bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-slate-900 dark:bg-sky-500 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loader Text Ticker */}
        <span className="text-[10px] font-mono tracking-widest text-[#8f9cae] uppercase">
          {loaderText}
        </span>
      </div>
    </div>
  );
}
