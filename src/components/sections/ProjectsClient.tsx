'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Activity,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { GithubIcon } from '../common/Icons';

interface Project {
  id: number;
  title: string;
  tagline: string;
  category: string;
  status: string;
  featured: boolean;
  image: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string | null;
}

interface ProjectsClientProps {
  heading: string;
  eyebrow?: string;
  description?: string;
  projects: Project[];
}

export const ProjectsClient = ({
  heading,
  eyebrow,
  description,
  projects,
}: ProjectsClientProps) => {
  const [expandedDetails, setExpandedDetails] = useState<Record<number, boolean>>({});
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false);

  const toggleDetails = (id: number) => {
    setExpandedDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6 border-t border-border-subtle transition-colors w-full overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2 flex items-center justify-center gap-1.5">
            <Sparkles size={14} />
            <span>{eyebrow || 'Production Platforms & Deep Learning Systems'}</span>
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-4">
            {heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-4" />
          <p className="text-text-sub text-sm sm:text-base md:text-lg leading-relaxed px-2">
            {description}
          </p>
        </div>

        {/* Featured Projects Showcase */}
        <div className="space-y-8 sm:space-y-12">
          {displayedProjects.map((project, index) => {
            const isEven = index % 2 === 1;
            const isDetailsOpen = Boolean(expandedDetails[project.id]);

            return (
              <article
                key={project.id}
                className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-terracotta/10 transition-all duration-300 group"
              >
                <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                  
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 relative h-48 sm:h-64 lg:h-auto min-h-[190px] sm:min-h-[280px] overflow-hidden bg-surface ${
                      isEven ? 'lg:order-2 border-t lg:border-t-0 lg:border-l border-border-subtle' : 'border-b lg:border-b-0 lg:border-r border-border-subtle'
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay on Mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />

                    {/* Status Pill Badge */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-border-subtle text-[10px] sm:text-[11px] font-mono font-medium text-text-main shadow-sm">
                      <span className={`w-2 h-2 rounded-full ${project.demo ? 'bg-emerald-500 animate-pulse' : 'bg-terracotta'}`} />
                      <span>{project.status}</span>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 px-2.5 py-1 rounded-md bg-card/90 backdrop-blur-md border border-border-subtle text-[10px] sm:text-[11px] font-mono font-medium text-terracotta shadow-xs">
                      {project.category}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 p-5 sm:p-8 lg:p-10 flex flex-col justify-between ${isEven ? 'lg:order-1' : ''}`}>
                    <div>
                      {/* Sub-header Index */}
                      <div className="flex items-center justify-between gap-2 text-xs font-mono text-terracotta font-semibold mb-2">
                        <span className="flex items-center gap-1.5">
                          <Layers size={13} />
                          <span>Index 0{project.id}</span>
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-mono text-text-mute">
                          Case Study
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-text-main group-hover:text-terracotta transition-colors mb-1 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-text-mute font-medium mb-3 sm:mb-4">
                        {project.tagline}
                      </p>

                      {/* Narrative Description */}
                      <p className="text-text-sub text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-6 text-justify">
                        {project.description}
                      </p>

                      {/* Key Architectural Highlights (Always visible on desktop, toggleable or compact on mobile) */}
                      <div className="mb-4 sm:mb-6">
                        {/* Mobile Toggle Button */}
                        <button
                          onClick={() => toggleDetails(project.id)}
                          className="lg:hidden w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-surface border border-border-subtle text-xs font-mono text-text-main font-medium mb-2 cursor-pointer"
                        >
                          <span>{isDetailsOpen ? 'Hide Capabilities & Specs' : 'View Key Capabilities & Specs'}</span>
                          {isDetailsOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                        </button>

                        {/* Collapsible content on mobile, visible on desktop */}
                        <div className={`space-y-2 bg-surface/50 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-border-subtle/70 ${isDetailsOpen ? 'block' : 'hidden lg:block'}`}>
                          <span className="block text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-text-mute font-semibold mb-1">
                            Key Capabilities &amp; Architecture
                          </span>
                          <div className="grid sm:grid-cols-2 gap-1.5 sm:gap-2">
                            {project.highlights.map((highlight, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-1.5 sm:gap-2 text-xs text-text-main">
                                <CheckCircle2 size={13} className="text-terracotta flex-shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6 sm:mb-8">
                        {project.tech.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] sm:text-[11px] font-mono bg-surface border border-border-subtle text-text-sub px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links Bar */}
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-border-subtle">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 bg-terracotta hover:bg-terracotta-hover text-white font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg shadow-xs transition-colors text-xs sm:text-sm flex-1 sm:flex-none"
                        >
                          <span>Launch Live App</span>
                          <ArrowUpRight size={14} />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 bg-surface hover:bg-card border border-border hover:border-terracotta/40 text-text-main hover:text-terracotta font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg shadow-xs transition-colors text-xs sm:text-sm flex-1 sm:flex-none"
                        >
                          <GithubIcon size={15} />
                          <span>GitHub Repo</span>
                        </a>
                      )}

                      {!project.demo && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-text-mute py-1.5">
                          <Activity size={13} className="text-terracotta" />
                          <span>Research &amp; Advisory Engine</span>
                        </span>
                      )}
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* View All Projects Button (for mobile users) */}
        {projects.length > 2 && (
          <div className="flex justify-center mt-8 sm:mt-12">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface hover:bg-card border border-border hover:border-terracotta/50 text-text-main hover:text-terracotta text-xs sm:text-sm font-mono font-medium shadow-xs transition-all duration-200 cursor-pointer"
            >
              <span>
                {showAllProjects
                  ? 'Collapse Projects'
                  : `See All Systems (${projects.length - 2} more projects)`}
              </span>
              {showAllProjects ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectsClient;
