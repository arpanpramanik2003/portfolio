import Image from 'next/image';
import data from '../../data/sections/projects.json';
import { ArrowUpRight, CheckCircle2, Sparkles, Layers, ShieldCheck, Activity } from 'lucide-react';
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

export const Projects = () => {
  const projects = data.projects as Project[];

  return (
    <section id="projects" className="py-24 px-6 border-t border-border-subtle transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2 flex items-center justify-center gap-1.5">
            <Sparkles size={14} />
            <span>{data.eyebrow || 'Production Platforms & Deep Learning Systems'}</span>
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-4">
            {data.heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-4" />
          <p className="text-text-sub text-base sm:text-lg leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Featured Projects Showcase (Split Large Cards) */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <article
                key={project.id}
                className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-terracotta/10 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                  
                  {/* Image Column (5 cols on lg) */}
                  <div
                    className={`lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-full overflow-hidden bg-surface ${
                      isEven ? 'lg:order-2 border-l border-border-subtle' : 'border-r border-border-subtle'
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Tint Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />

                    {/* Status Pill Badge */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-border-subtle text-[11px] font-mono font-medium text-text-main shadow-sm">
                      <span className={`w-2 h-2 rounded-full ${project.demo ? 'bg-emerald-500 animate-pulse' : 'bg-terracotta'}`} />
                      <span>{project.status}</span>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute bottom-4 left-4 lg:bottom-4 lg:left-4 z-10 px-3 py-1 rounded-md bg-card/90 backdrop-blur-md border border-border-subtle text-[11px] font-mono font-medium text-terracotta shadow-xs">
                      {project.category}
                    </div>
                  </div>

                  {/* Content Column (7 cols on lg) */}
                  <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${isEven ? 'lg:order-1' : ''}`}>
                    <div>
                      {/* Sub-header Index */}
                      <div className="flex items-center justify-between gap-2 text-xs font-mono text-terracotta font-semibold mb-2">
                        <span className="flex items-center gap-1.5">
                          <Layers size={14} />
                          <span>Index 0{project.id}</span>
                        </span>
                        <span className="text-[11px] font-mono text-text-mute">
                          Production Case Study
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-main group-hover:text-terracotta transition-colors mb-1.5 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-text-mute font-medium mb-4">
                        {project.tagline}
                      </p>

                      {/* Narrative Description */}
                      <p className="text-text-sub text-sm sm:text-base leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Key Architectural Highlights */}
                      <div className="mb-6 space-y-2 bg-surface/50 rounded-2xl p-4 border border-border-subtle/70">
                        <span className="block text-[11px] font-mono uppercase tracking-widest text-text-mute font-semibold mb-1">
                          Key Capabilities &amp; Architecture
                        </span>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {project.highlights.map((highlight, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs text-text-main">
                              <CheckCircle2 size={14} className="text-terracotta flex-shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.tech.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono bg-surface border border-border-subtle text-text-sub px-2.5 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links Bar */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-subtle">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-hover text-white font-medium px-5 py-2.5 rounded-lg shadow-xs transition-colors text-xs sm:text-sm"
                        >
                          <span>Launch Live App</span>
                          <ArrowUpRight size={15} />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-surface hover:bg-card border border-border hover:border-terracotta/40 text-text-main hover:text-terracotta font-medium px-5 py-2.5 rounded-lg shadow-xs transition-colors text-xs sm:text-sm"
                        >
                          <GithubIcon size={16} />
                          <span>GitHub Repository</span>
                        </a>
                      )}

                      {!project.demo && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-text-mute py-2">
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

      </div>
    </section>
  );
};

export default Projects;
