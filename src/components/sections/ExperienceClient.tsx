'use client';

import { useState, useId } from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  Building2,
  Brain,
  Server,
  ShieldCheck,
  Clock,
  ArrowRight,
  Code2,
} from 'lucide-react';

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  type: string;
  category?: string;
  description: string;
  highlights: string[];
  skills: string[];
}

interface ExperienceClientProps {
  heading: string;
  eyebrow?: string;
  description?: string;
  experiences: ExperienceItem[];
}

const categoryIcon = (category?: string) => {
  if (!category) return <Briefcase size={16} className="text-terracotta" />;
  if (category.toLowerCase().includes('ai') || category.toLowerCase().includes('deep')) {
    return <Brain size={16} className="text-terracotta" />;
  }
  if (category.toLowerCase().includes('backend')) {
    return <Server size={16} className="text-terracotta" />;
  }
  if (category.toLowerCase().includes('security') || category.toLowerCase().includes('cyber')) {
    return <ShieldCheck size={16} className="text-terracotta" />;
  }
  return <Briefcase size={16} className="text-terracotta" />;
};

export const ExperienceClient = ({
  heading,
  eyebrow,
  description,
  experiences,
}: ExperienceClientProps) => {
  const [activeId, setActiveId] = useState<number>(experiences[0]?.id ?? 1);
  const activeExperience =
    experiences.find((exp) => exp.id === activeId) || experiences[0];

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 px-3.5 sm:px-6 border-t border-border-subtle transition-colors w-full max-w-full overflow-hidden lg:overflow-visible"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2 flex items-center justify-center gap-1.5">
            <Briefcase size={14} />
            <span>{eyebrow || 'Professional Trajectory'}</span>
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-4">
            {heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-4 sm:mb-6" />
          {description && (
            <p className="text-text-sub text-xs sm:text-base md:text-lg leading-relaxed text-justify px-1 sm:px-2">
              {description}
            </p>
          )}
        </div>

        {/* =========================================================================
           EXPERIENCE WORKSPACE: Responsive Master-Detail Architecture
           ========================================================================= */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start w-full">
          {/* =====================================================================
             LEFT COLUMN (5 Cols): Interactive Role Selector & Timeline Rail
             ===================================================================== */}
          <div className="lg:col-span-5 w-full">
            {/* Quick Metrics Badge */}
            <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-surface/70 border border-border-subtle mb-4">
              <span className="text-xs font-mono text-text-sub flex items-center gap-1.5">
                <Clock size={13} className="text-terracotta" />
                <span>4 Verified Appointments</span>
              </span>
              <span className="text-[11px] font-mono font-medium text-terracotta bg-terracotta/10 px-2 py-0.5 rounded-md">
                2024 — 2026
              </span>
            </div>

            {/* Role Cards List */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              {experiences.map((exp) => {
                const isActive = exp.id === activeId;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setActiveId(exp.id)}
                    className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all duration-200 cursor-pointer relative group ${
                      isActive
                        ? 'bg-card border-terracotta/60 dark:border-terracotta/70 shadow-md ring-1 ring-terracotta/20 dark:ring-terracotta/30'
                        : 'bg-card/60 dark:bg-card/40 border-border-subtle hover:border-border hover:bg-card hover:shadow-xs'
                    }`}
                  >
                    {/* Active Edge Indicator */}
                    {isActive && (
                      <div className="absolute left-0 top-3 bottom-3 w-1 bg-terracotta rounded-r-full" />
                    )}

                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-terracotta font-medium px-2 py-0.5 rounded-md bg-surface border border-border-subtle">
                        {categoryIcon(exp.category)}
                        <span>{exp.duration}</span>
                      </span>

                      <span className="text-[10px] font-mono text-text-mute px-2 py-0.5 rounded bg-surface/80 border border-border-subtle">
                        {exp.period}
                      </span>
                    </div>

                    <h3
                      className={`font-serif text-base sm:text-lg font-bold leading-snug transition-colors ${
                        isActive
                          ? 'text-text-main dark:text-white'
                          : 'text-text-main group-hover:text-terracotta'
                      }`}
                    >
                      {exp.title}
                    </h3>

                    <p className="text-xs font-mono text-text-sub mt-0.5 flex items-center gap-1.5 truncate">
                      <Building2 size={12} className="text-text-mute flex-shrink-0" />
                      <span className="truncate">{exp.company}</span>
                    </p>

                    <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-text-mute pt-2 border-t border-border-subtle/50">
                      <span className="flex items-center gap-1">
                        <MapPin size={11} className="flex-shrink-0" />
                        <span className="truncate">{exp.location}</span>
                      </span>

                      <span
                        className={`text-xs font-sans transition-transform ${
                          isActive
                            ? 'text-terracotta translate-x-0.5 font-bold'
                            : 'text-text-mute group-hover:translate-x-0.5'
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* =====================================================================
             RIGHT COLUMN (7 Cols): Deep Role Dossier & Technical Breakdown
             ===================================================================== */}
          <div className="lg:col-span-7 w-full min-w-0">
            <div className="bg-card border border-border-subtle rounded-2xl p-5 sm:p-7 shadow-sm transition-all relative overflow-hidden">
              {/* Header Banner Accent */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-border-subtle">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-surface border border-border-subtle text-terracotta">
                    {categoryIcon(activeExperience.category)}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-mute block font-semibold">
                      {activeExperience.type}
                    </span>
                    <span className="text-xs font-mono text-terracotta font-medium">
                      {activeExperience.category}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono bg-surface border border-border-subtle text-text-sub px-3 py-1 rounded-full">
                  <Calendar size={12} className="text-terracotta" />
                  <span>{activeExperience.duration}</span>
                  <span className="text-text-mute">·</span>
                  <span className="text-terracotta font-semibold">
                    {activeExperience.period}
                  </span>
                </div>
              </div>

              {/* Title & Organization Header */}
              <div className="mb-5">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-main dark:text-white leading-snug mb-1">
                  {activeExperience.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-mono text-text-sub">
                  <span className="flex items-center gap-1.5 text-text-main dark:text-stone-200 font-semibold">
                    <Building2 size={14} className="text-terracotta flex-shrink-0" />
                    <span>{activeExperience.company}</span>
                  </span>
                  <span className="text-text-mute">·</span>
                  <span className="flex items-center gap-1 text-text-mute">
                    <MapPin size={13} className="flex-shrink-0" />
                    <span>{activeExperience.location}</span>
                  </span>
                </div>
              </div>

              {/* Executive Summary Narrative */}
              <div className="mb-6 p-4 rounded-xl bg-surface/60 border border-border-subtle">
                <span className="text-[10px] font-mono uppercase tracking-widest text-text-mute font-semibold block mb-1">
                  Tenure Scope &amp; Executive Summary
                </span>
                <p className="font-serif text-sm sm:text-base text-text-main dark:text-stone-100 leading-relaxed text-justify">
                  "{activeExperience.description}"
                </p>
              </div>

              {/* Key Technical Contributions & Deliverables */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-3 flex items-center gap-1.5">
                  <Sparkles size={13} />
                  <span>Key Technical Accomplishments &amp; Deliverables</span>
                </h4>

                <ul className="space-y-2.5">
                  {activeExperience.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl bg-surface/30 border border-border-subtle/60 hover:border-terracotta/30 transition-colors"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-emerald-500 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-xs sm:text-sm text-text-sub dark:text-stone-200 leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Domain Competencies Applied */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-text-mute font-semibold mb-2.5 flex items-center gap-1.5">
                  <Code2 size={13} className="text-terracotta" />
                  <span>Technologies &amp; Domain Competencies</span>
                </h4>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {activeExperience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2.5 sm:px-3 py-1 rounded-lg bg-surface border border-border-subtle text-text-main dark:text-stone-200 text-xs font-mono font-medium hover:border-terracotta/40 hover:text-terracotta transition-colors shadow-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceClient;
