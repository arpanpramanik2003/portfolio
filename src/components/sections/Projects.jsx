import { motion } from "framer-motion";
import data from "../../data/sections/projects.json";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { GithubIcon } from "../common/Icons";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 border-t border-border-subtle transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2">
            Selected Works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-6">
            {data.heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-4" />
          <p className="text-text-sub text-base sm:text-lg">
            Practical AI/ML implementations and full-stack web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {data.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-all group"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-44 overflow-hidden bg-surface border-b border-border-subtle">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-card/90 backdrop-blur-sm border border-border-subtle text-[11px] font-mono font-medium text-text-main shadow-xs">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-terracotta font-semibold mb-2">
                    <FolderGit2 size={15} />
                    <span>Project {project.id}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-text-main group-hover:text-terracotta transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-text-sub text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono bg-surface border border-border-subtle text-text-mute px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-2 flex items-center gap-3 border-t border-border-subtle/50 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-border hover:border-terracotta/40 text-text-main hover:text-terracotta hover:bg-surface text-xs font-medium transition-colors"
                  >
                    <GithubIcon size={14} />
                    <span>Source</span>
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-terracotta hover:bg-terracotta-hover text-white text-xs font-medium shadow-xs transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Live App</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
