import aboutData from '../../data/sections/about.json';
import { Cpu, Bot, Workflow, Code2, Microscope, Compass, Sparkles, ArrowRight } from 'lucide-react';

const highlightIcons = [
  <Cpu key="cpu" size={20} className="text-terracotta" />,
  <Bot key="bot" size={20} className="text-terracotta" />,
  <Workflow key="workflow" size={20} className="text-terracotta" />,
  <Code2 key="code" size={20} className="text-terracotta" />,
  <Microscope key="microscope" size={20} className="text-terracotta" />,
];

export const About = () => {
  const { heading, summary, highlights, timeline, mission, values } = aboutData;

  return (
    <section id="about" className="py-24 px-6 border-t border-border-subtle transition-colors">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2">
            Background &amp; Philosophy
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-4">
            {heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-6" />
          <p className="text-text-sub text-base sm:text-lg leading-relaxed">
            {summary}
          </p>
        </div>

        {/* 5 Focus Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-20">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-card/70 border border-border-subtle hover:border-terracotta/40 rounded-xl p-3.5 text-center transition-all shadow-xs flex flex-col items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <div className="p-2 rounded-lg bg-surface border border-border-subtle">
                {highlightIcons[i] || <Sparkles size={18} className="text-terracotta" />}
              </div>
              <p className="text-xs font-medium text-text-main leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Editorial Timeline & Philosophy Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Editorial Timeline (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-text-main mb-6">
              Academic &amp; Research Milestones
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l border-border-default space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className="relative group">
                  {/* Timeline Terracotta Bullet */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-card border-2 border-terracotta group-hover:scale-125 transition-transform" />

                  {/* Date Tag */}
                  <div className="text-xs font-mono font-medium text-terracotta mb-1 flex items-center gap-1.5">
                    <span>{item.year}</span>
                    <ArrowRight size={12} className="opacity-60" />
                  </div>

                  {/* Title & Narrative */}
                  <h4 className="font-serif text-lg font-bold text-text-main mb-2">
                    {item.title}
                  </h4>
                  <p className="text-text-sub text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Guiding Principles (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-text-main mb-6">
              Core Tenets
            </h3>

            <div className="bg-card border border-border-subtle rounded-2xl p-6 sm:p-7 shadow-sm space-y-6">
              {/* Mission Statement */}
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-terracotta font-semibold mb-2.5">
                  <Compass size={14} />
                  <span>Engineering Mission</span>
                </div>
                <blockquote className="font-serif text-lg italic text-text-main leading-relaxed border-l-2 border-terracotta/40 pl-3.5 my-2">
                  "{mission}"
                </blockquote>
              </div>

              <div className="w-full h-px bg-border-subtle" />

              {/* Values / Principles */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-text-mute font-semibold mb-3">
                  Guiding Principles
                </div>
                <div className="flex flex-wrap gap-2">
                  {values.map((val, i) => {
                    const cleanVal = val.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '').trim();
                    return (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-surface border border-border-subtle text-text-main text-xs font-mono font-medium hover:border-terracotta/30 transition-colors"
                      >
                        {cleanVal}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
