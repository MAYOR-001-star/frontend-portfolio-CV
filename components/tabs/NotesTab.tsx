"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";

const notes = [
  {
    id: "n1",
    title: "FUTO Night Class Delusion: Surviving 2 AM Engineering Sprints",
    excerpt: "A look at staying awake at the FUTO library, balancing academic math tests with client codebases, and building websites under fluctuating campus power grids.",
    date: "Feb 10, 2026",
    tags: ["Thoughts", "FUTO Life"],
  },
  {
    id: "n2",
    title: "Fintech Ledgers: The Double-Entry System for VTU Architectures",
    excerpt: "A technical walkthrough on establishing transactional safety for utility apps, mapping ledger logs, and writing SQL procedures for atomic balance reductions.",
    date: "Jan 28, 2026",
    tags: ["Developer", "Fintech"],
  },
  {
    id: "n3",
    title: "Scaling React Native: From Expo Go to Production Configs",
    excerpt: "How to transition mobile apps from development sandbox files into production releases. Optimizing assets, managing packages, and setting credentials.",
    date: "Dec 15, 2025",
    tags: ["Developer", "Mobile"],
  },
];

export default function NotesTab() {
  const [notesSearch, setNotesSearch] = useState("");

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(notesSearch.toLowerCase()) ||
    note.excerpt.toLowerCase().includes(notesSearch.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-8 animate-slide-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-card-border pb-8 gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">
            Dev Musings & Thoughts
          </span>
          <h1 className="text-3xl font-black tracking-tight font-display text-foreground">
            Notes
          </h1>
        </div>

        {/* Live Search Input */}
        <div className="relative max-w-xs w-full">
          <input
            type="text"
            value={notesSearch}
            onChange={(e) => setNotesSearch(e.target.value)}
            placeholder="Search notes..."
            className="w-full bg-card border border-card-border rounded-xl py-2 px-4 text-xs font-mono placeholder-subtext/60 outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      {/* Notes List */}
      <div className="flex flex-col gap-6">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <div
              key={note.id}
              className="p-6 border border-card-border bg-card hover:border-accent/20 rounded-2xl flex flex-col gap-4 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono bg-badge text-accent px-2 py-0.5 rounded border border-accent/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[9px] font-mono text-[#8f9cae] flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {note.date}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-bold text-foreground hover:text-accent transition-colors cursor-pointer font-display">
                  {note.title}
                </h3>
                <p className="text-xs text-subtext leading-relaxed">
                  {note.excerpt}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-xs text-subtext font-mono">
            No notes found matching "{notesSearch}"
          </div>
        )}
      </div>
    </div>
  );
}
