import Image from 'next/image';
import data from '../../data/sections/projects.json';
import { FolderGit2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 border-t border-border-subtle transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2">
            Selected Works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-4">
            {data.heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-4" />
          <p className="text-text-sub text-base sm:text-lg">
            Practical AI/ML implementations, prediction systems, and web applications.
          </p>
        </div>

        {/* Asymmetric Bento-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map((project, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={project.id}
                className={`bg-card border border-border-subtle hover:border-terracotta/40 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-terracotta/10 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Project Image Preview */}
                  <div className={`relative overflow-hidden bg-surface border-b border-border-subtle ${
                    isFeatured ? 'h-56 sm:h-64' : 'h-44'
                  }`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes={isFeatured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Category Overlay Tag */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-md bg-card/90 backdrop-blur-md border border-border-subtle text-[11px] font-mono font-medium text-text-main shadow-xs">
                      {project.category}
                    </div>

                    {/* Featured Ribbon */}
                    {isFeatured && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-terracotta text-white text-[11px] font-mono font-medium shadow-xs flex items-center gap-1">
                        <span>Featured System</span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-terracotta font-semibold mb-2">
                      <FolderGit2 size={14} />
                      <span>Index 0{project.id}</span>
                    </div>

                    <h3 className={`font-serif font-bold text-text-main group-hover:text-terracotta transition-colors mb-3 ${
                      isFeatured ? 'text-2xl' : 'text-xl'
                    }`}>
                      {project.title}
                    </h3>

                    <p className="text-text-sub text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono bg-surface border border-border-subtle text-text-mute px-2.5 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Editorial Footer Links */}
                <div className="px-6 pb-6 pt-3 flex items-center gap-3 border-t border-border-subtle/50 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-border hover:border-terracotta/40 text-text-main hover:text-terracotta hover:bg-surface text-xs font-medium transition-colors"
                    >
                      <GithubIcon size={14} />
                      <span>Source Code</span>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-terracotta hover:bg-terracotta-hover text-white text-xs font-medium shadow-xs transition-colors"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
