import { motion } from "framer-motion";
import skillsData from "../../data/sections/skills.json";
import { Code, Globe, Brain, Database, Cloud, Layers } from "lucide-react";

const categoryIconMap = {
  "Programming Languages": <Code size={20} className="text-terracotta" />,
  "Web Development": <Globe size={20} className="text-terracotta" />,
  "AI / ML / Deep Learning": <Brain size={20} className="text-terracotta" />,
  "Databases": <Database size={20} className="text-terracotta" />,
  "DevOps & Deployment": <Cloud size={20} className="text-terracotta" />,
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 border-t border-border-subtle bg-surface/30 transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2">
            Technical Stack &amp; Tooling
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-6">
            {skillsData.heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-4" />
          <p className="text-text-sub text-base sm:text-lg">
            Core technologies and frameworks applied across research and full-stack implementations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-card border border-border-subtle hover:border-terracotta/30 rounded-2xl p-6 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border-subtle">
                  <div className="p-2 rounded-lg bg-surface border border-border-subtle">
                    {categoryIconMap[category.title] || <Layers size={20} className="text-terracotta" />}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-text-main">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-surface/80 border border-border-subtle text-text-main hover:border-terracotta/40 hover:text-terracotta text-xs font-mono font-medium transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
