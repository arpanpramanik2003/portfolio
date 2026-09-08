'use client';

import { useState, useId, useMemo } from 'react';
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
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
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

const categoryIcon = (category?: string, size = 16) => {
  if (!category) return <Briefcase size={size} className="text-terracotta" />;
  if (category.toLowerCase().includes('ai') || category.toLowerCase().includes('deep')) {
    return <Brain size={size} className="text-terracotta" />;
  }
  if (category.toLowerCase().includes('backend')) {
    return <Server size={size} className="text-terracotta" />;
  }
  if (category.toLowerCase().includes('security') || category.toLowerCase().includes('cyber')) {
    return <ShieldCheck size={size} className="text-terracotta" />;
  }
  return <Briefcase size={size} className="text-terracotta" />;
};

export const ExperienceClient = ({
  heading,
  eyebrow,
  description,
  experiences,
}: ExperienceClientProps) => {
  const [activeId, setActiveId] = useState<number>(experiences[0]?.id ?? 1);

  const activeIndex = useMemo(
    () => experiences.findIndex((exp) => exp.id === activeId),
    [experiences, activeId]
  );

  const activeExperience = experiences[activeIndex] || experiences[0];

  const prevExperience = activeIndex > 0 ? experiences[activeIndex - 1] : null;
  const nextExperience =
    activeIndex < experiences.length - 1 ? experiences[activeIndex + 1] : null;

  const goToPrev = () => {
    if (prevExperience) setActiveId(prevExperience.id);
  };

  const goToNext = () => {
    if (nextExperience) setActiveId(nextExperience.id);
  };

  return (
    <section
      id="experience"
      className="py-12 sm:py-20 lg:py-24 px-3 sm:px-6 border-t border-border-subtle transition-colors w-full max-w-full overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full min-w-0">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-1">
          <p className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2 flex items-center justify-center gap-1.5">
            <Briefcase size={13} className="sm:w-[14px] sm:h-[14px]" />
            <span>{eyebrow || 'Professional Trajectory'}</span>
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-3 sm:mb-4 break-words">
            {heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-3 sm:mb-5" />
          {description && (
            <p className="text-text-sub text-xs sm:text-base leading-relaxed text-center sm:text-justify max-w-2xl mx-auto px-1">
              {description}
            </p>
          )}
        </div>

        {/* Quick Verified Appointments Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-surface/70 border border-border-subtle mb-5 sm:mb-6">
          <span className="text-[11px] sm:text-xs font-mono text-text-sub flex items-center gap-1.5">
            <Clock size={13} className="text-terracotta flex-shrink-0" />
            <span>{experiences.length} Verified Appointments</span>
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono font-medium text-terracotta bg-terracotta/10 px-2 py-0.5 rounded-md">
            2024 — 2026
          </span>
        </div>

        {/* =========================================================================
           MOBILE & TABLET APPOINTMENT SELECTOR (< lg)
           Horizontal scrollable pill rail for fast thumb navigation on mobile
           ========================================================================= */}
        <div className="block lg:hidden mb-4">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-text-mute font-semibold">
              Select Appointment ({activeIndex + 1} of {experiences.length}):
            </span>
            <div className="flex items-center gap-1 text-[11px] font-mono text-terracotta">
              <span>Swipe</span>
              <ArrowRight size={11} />
            </div>
          </div>

          {/* Horizontal Scrollable Tabs */}
          <div
            role="tablist"
            aria-label="Experience Appointments"
            className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 px-1 -mx-1 snap-x scroll-smooth"
          >
            {experiences.map((exp, idx) => {
              const isActive = exp.id === activeId;
              return (
                <button
                  key={exp.id}
                  role="tab"
                  id={`tab-${exp.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${exp.id}`}
                  onClick={() => setActiveId(exp.id)}
                  className={`flex-shrink-0 snap-start flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer min-h-[44px] ${
                    isActive
                      ? 'bg-card border-terracotta text-text-main shadow-sm ring-1 ring-terracotta/30 dark:ring-terracotta/40'
                      : 'bg-card/50 border-border-subtle text-text-sub hover:bg-card hover:border-border'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-mono font-bold flex-shrink-0 transition-colors ${
                      isActive
                        ? 'bg-terracotta text-white'
                        : 'bg-surface text-text-mute'
                    }`}
                  >
                    0{idx + 1}
                  </span>

                  <div className="min-w-0 pr-1">
                    <p
                      className={`text-xs font-serif font-bold leading-tight truncate max-w-[130px] sm:max-w-[180px] ${
                        isActive ? 'text-terracotta' : 'text-text-main'
                      }`}
                    >
                      {exp.company.split(' ')[0]} {exp.title.split(' ')[0]}
                    </p>
                    <p className="text-[10px] font-mono text-text-mute truncate max-w-[130px] sm:max-w-[180px]">
                      {exp.duration}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
           RESPONSIVE MASTER-DETAIL WORKSPACE
           Desktop: 5 cols Left Rail | 7 cols Right Dossier
           Mobile (<lg): Single column with immediate Dossier + Stepper
           ========================================================================= */}
        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-start w-full min-w-0">
          {/* =====================================================================
             DESKTOP LEFT COLUMN (5 Cols): Role Cards List
             Hidden on mobile/tablet because the horizontal stepper is active above
             ===================================================================== */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-3 w-full">
            {experiences.map((exp, idx) => {
              const isActive = exp.id === activeId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-200 cursor-pointer relative group ${
                    isActive
                      ? 'bg-card border-terracotta/60 dark:border-terracotta/70 shadow-md ring-1 ring-terracotta/20 dark:ring-terracotta/30'
                      : 'bg-card/60 dark:bg-card/40 border-border-subtle hover:border-border hover:bg-card hover:shadow-xs'
                  }`}
                >
                  {/* Active Edge Indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-3 bottom-3 w-1 bg-terracotta rounded-r-full" />
                  )}

                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-terracotta font-medium px-2 py-0.5 rounded-md bg-surface border border-border-subtle">
                      {categoryIcon(exp.category, 14)}
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

                  <p className="text-xs font-mono text-text-sub mt-1 flex items-center gap-1.5 truncate">
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

          {/* =====================================================================
             DOSSIER CARD (Mobile Full Width | Desktop 7 Cols)
             ===================================================================== */}
          <div className="col-span-12 lg:col-span-7 w-full min-w-0">
            <div
              id={`panel-${activeExperience.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeExperience.id}`}
              className="bg-card border border-border-subtle rounded-2xl p-4 sm:p-6 lg:p-7 shadow-sm transition-all duration-200 relative overflow-hidden w-full min-w-0"
            >
              {/* Top Banner Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 mb-4 sm:mb-5 border-b border-border-subtle">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="p-1.5 sm:p-2 rounded-xl bg-surface border border-border-subtle text-terracotta flex-shrink-0">
                    {categoryIcon(activeExperience.category, 15)}
                  </span>
                  <div className="min-w-0">
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-text-mute block font-semibold truncate">
                      {activeExperience.type}
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono text-terracotta font-medium truncate block">
                      {activeExperience.category}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-mono bg-surface border border-border-subtle text-text-sub px-2.5 sm:px-3 py-1 rounded-full flex-shrink-0">
                  <Calendar size={11} className="text-terracotta flex-shrink-0" />
                  <span>{activeExperience.duration}</span>
                  <span className="text-text-mute">·</span>
                  <span className="text-terracotta font-semibold">
                    {activeExperience.period}
                  </span>
                </div>
              </div>

              {/* Title & Organization Header */}
              <div className="mb-4 sm:mb-5">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-text-main dark:text-white leading-snug mb-1.5 break-words">
                  {activeExperience.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1 text-xs sm:text-sm font-mono text-text-sub">
                  <span className="flex items-center gap-1.5 text-text-main dark:text-stone-200 font-semibold break-words min-w-0">
                    <Building2 size={13} className="text-terracotta flex-shrink-0" />
                    <span className="break-words">{activeExperience.company}</span>
                  </span>
                  <span className="text-text-mute hidden sm:inline">·</span>
                  <span className="flex items-center gap-1 text-text-mute text-[11px] sm:text-xs">
                    <MapPin size={12} className="flex-shrink-0" />
                    <span>{activeExperience.location}</span>
                  </span>
                </div>
              </div>

              {/* Executive Summary Narrative */}
              <div className="mb-4 sm:mb-5 p-3.5 sm:p-4 rounded-xl bg-surface/60 border border-border-subtle">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-text-mute font-semibold block mb-1">
                  Tenure Scope &amp; Executive Summary
                </span>
                <p className="font-serif text-xs sm:text-sm md:text-base text-text-main dark:text-stone-100 leading-relaxed text-left sm:text-justify break-words">
                  "{activeExperience.description}"
                </p>
              </div>

              {/* Key Technical Contributions & Deliverables */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2.5 sm:mb-3 flex items-center gap-1.5">
                  <Sparkles size={12} className="sm:w-[13px] sm:h-[13px] flex-shrink-0" />
                  <span className="break-words">Key Technical Accomplishments &amp; Deliverables</span>
                </h4>

                <ul className="space-y-2 sm:space-y-2.5">
                  {activeExperience.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-xl bg-surface/30 border border-border-subtle/60 hover:border-terracotta/30 transition-colors"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-emerald-500 mt-0.5 flex-shrink-0 sm:w-[15px] sm:h-[15px]"
                      />
                      <span className="text-[11px] sm:text-xs md:text-sm text-text-sub dark:text-stone-200 leading-relaxed break-words">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Domain Competencies Applied */}
              <div className="mb-5 sm:mb-6">
                <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-text-mute font-semibold mb-2 sm:mb-2.5 flex items-center gap-1.5">
                  <Code2 size={12} className="text-terracotta sm:w-[13px] sm:h-[13px] flex-shrink-0" />
                  <span>Technologies &amp; Competencies</span>
                </h4>

                <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                  {activeExperience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-lg bg-surface border border-border-subtle text-text-main dark:text-stone-200 text-[10px] sm:text-xs font-mono font-medium hover:border-terracotta/40 hover:text-terracotta transition-colors shadow-xs break-words"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* ===================================================================
                 MOBILE BOTTOM THUMB NAVIGATION (< lg)
                 Allows users to swipe/tap between appointments seamlessly with thumb
                 =================================================================== */}
              <div className="flex lg:hidden items-center justify-between pt-3.5 border-t border-border-subtle gap-2">
                <button
                  onClick={goToPrev}
                  disabled={!prevExperience}
                  aria-label="Previous Appointment"
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium transition-all min-h-[40px] cursor-pointer ${
                    prevExperience
                      ? 'bg-surface hover:bg-card border border-border text-text-main active:scale-95'
                      : 'opacity-40 cursor-not-allowed bg-surface/50 border border-border-subtle text-text-mute'
                  }`}
                >
                  <ChevronLeft size={14} />
                  <span className="truncate max-w-[90px] sm:max-w-[120px]">
                    {prevExperience ? prevExperience.company.split(' ')[0] : 'Prev'}
                  </span>
                </button>

                <span className="text-[11px] font-mono text-text-mute font-medium px-2">
                  {activeIndex + 1} / {experiences.length}
                </span>

                <button
                  onClick={goToNext}
                  disabled={!nextExperience}
                  aria-label="Next Appointment"
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium transition-all min-h-[40px] cursor-pointer ${
                    nextExperience
                      ? 'bg-terracotta text-white shadow-xs hover:bg-terracotta-hover active:scale-95'
                      : 'opacity-40 cursor-not-allowed bg-surface/50 border border-border-subtle text-text-mute'
                  }`}
                >
                  <span className="truncate max-w-[90px] sm:max-w-[120px]">
                    {nextExperience ? nextExperience.company.split(' ')[0] : 'Next'}
                  </span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceClient;
