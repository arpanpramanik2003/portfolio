import skillsData from '../../data/sections/skills.json';
import { Code, Globe, Brain, Database, Cloud, Layers } from 'lucide-react';
import { ReactNode } from 'react';

const categoryIconMap: Record<string, ReactNode> = {
  'Programming Languages': <Code size={19} className="text-terracotta" />,
  'Web Development': <Globe size={19} className="text-terracotta" />,
  'AI / ML / Deep Learning': <Brain size={19} className="text-terracotta" />,
  'Databases': <Database size={19} className="text-terracotta" />,
  'DevOps & Deployment': <Cloud size={19} className="text-terracotta" />,
};

const categoryDescriptions: Record<string, string> = {
  'Programming Languages': 'Core algorithmic problem solving and low-level development',
  'Web Development': 'Modern frontend interfaces, reactive frameworks, and backend API routing',
  'AI / ML / Deep Learning': 'Neural architectures, computer vision, LLM orchestration, and scientific analysis',
  'Databases': 'Structured relational models, key-value stores, and document databases',
  'DevOps & Deployment': 'Cloud infrastructure, containerization, and automated CI/CD pipelines',
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 border-t border-border-subtle bg-surface/30 transition-colors">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2">
            Technical Repertoire
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-4">
            {skillsData.heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-4" />
          <p className="text-text-sub text-base sm:text-lg">
            A comprehensive taxonomy of programming languages, machine learning frameworks, and infrastructure tools.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.categories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-2xl p-6 shadow-sm transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon and Count */}
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-border-subtle">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-surface border border-border-subtle group-hover:border-terracotta/30 transition-colors">
                      {categoryIconMap[category.title] || <Layers size={19} className="text-terracotta" />}
                    </div>
                    <h3 className="font-serif text-base font-bold text-text-main">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-text-mute px-2 py-0.5 rounded bg-surface border border-border-subtle">
                    {category.skills.length}
                  </span>
                </div>

                {/* Subtitle / Description */}
                <p className="text-xs text-text-mute mb-4 leading-relaxed">
                  {categoryDescriptions[category.title] || 'Core technologies and libraries'}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-surface border border-border-subtle text-text-main hover:border-terracotta hover:text-terracotta text-xs font-mono font-medium transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
