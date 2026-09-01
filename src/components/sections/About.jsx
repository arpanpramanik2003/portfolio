import { motion } from "framer-motion";
import aboutData from "../../data/sections/about.json";
import { Cpu, Bot, Workflow, Code2, Microscope, GraduationCap, Compass, Sparkles } from "lucide-react";

const highlightIcons = [
  <Cpu size={22} className="text-terracotta" />,
  <Bot size={22} className="text-terracotta" />,
  <Workflow size={22} className="text-terracotta" />,
  <Code2 size={22} className="text-terracotta" />,
  <Microscope size={22} className="text-terracotta" />,
];

const timelineIcons = [
  <GraduationCap size={18} className="text-terracotta" />,
  <Microscope size={18} className="text-terracotta" />,
  <Sparkles size={18} className="text-terracotta" />,
];

const About = () => {
  const { heading, summary, highlights, timeline, mission, values } = aboutData;

  return (
    <section id="about" className="py-24 px-6 border-t border-border-subtle transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2">
            Background &amp; Philosophy
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-6">
            {heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-6" />
          <p className="text-text-sub text-base sm:text-lg leading-relaxed">
            {summary}
          </p>
        </div>

        {/* Highlights Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-16">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-xl p-4 text-center transition-all shadow-sm flex flex-col items-center justify-center gap-2.5"
            >
              <div className="p-2 rounded-lg bg-surface border border-border-subtle">
                {highlightIcons[i] || <Sparkles size={20} className="text-terracotta" />}
              </div>
              <p className="text-xs sm:text-sm font-medium text-text-main leading-snug">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline & Mission Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Timeline Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-text-main mb-6 flex items-center gap-2">
              <span>Academic &amp; Research Journey</span>
            </h3>

            <div className="relative pl-6 border-l-2 border-border-default space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative group">
                  {/* Node Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-card border-2 border-terracotta group-hover:bg-terracotta transition-colors" />

                  <div className="bg-card border border-border-subtle hover:border-border-default rounded-xl p-5 shadow-sm transition-all">
                    <div className="flex items-center gap-2 text-xs font-mono font-medium text-terracotta mb-1.5">
                      {timelineIcons[i] || <GraduationCap size={16} />}
                      <span>{item.year}</span>
                    </div>
                    <h4 className="font-serif text-lg font-bold text-text-main mb-2">
                      {item.title}
                    </h4>
                    <p className="text-text-sub text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Core Values Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-text-main mb-6 flex items-center gap-2">
              <span>Core Tenets</span>
            </h3>

            <div className="bg-card border border-border-subtle rounded-2xl p-6 sm:p-7 shadow-sm space-y-7">
              {/* Mission */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-terracotta font-semibold mb-2">
                  <Compass size={15} />
                  <span>Mission</span>
                </div>
                <p className="text-text-main font-serif text-lg italic leading-relaxed">
                  "{mission}"
                </p>
              </div>

              <div className="w-full h-px bg-border-subtle" />

              {/* Values */}
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
                        className="px-3 py-1.5 rounded-lg bg-surface border border-border-subtle text-text-main text-xs font-medium"
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
