'use client';

import { useState, useMemo, ReactNode } from 'react';
import {
  Brain,
  Bot,
  Code2,
  Globe,
  Database,
  Terminal,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2,
  Filter,
} from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  tag: string;
  scope: string;
  skills: string[];
}

interface SkillsClientProps {
  heading: string;
  eyebrow?: string;
  description?: string;
  categories: SkillCategory[];
}

const iconMap: Record<string, ReactNode> = {
  'ai-ml': <Brain size={22} className="text-terracotta" />,
  'gen-ai': <Bot size={22} className="text-terracotta" />,
  languages: <Code2 size={22} className="text-terracotta" />,
  'web-backend': <Globe size={22} className="text-terracotta" />,
  'databases-cloud': <Database size={22} className="text-terracotta" />,
  'devops-tools': <Terminal size={22} className="text-terracotta" />,
};

type FilterTab = 'all' | 'ai' | 'backend' | 'infra';

export const SkillsClient = ({
  heading,
  eyebrow,
  description,
  categories,
}: SkillsClientProps) => {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const totalSkillsCount = useMemo(
    () => categories.reduce((acc, cat) => acc + cat.skills.length, 0),
    [categories]
  );

  const filteredCategories = useMemo(() => {
    if (activeTab === 'ai') {
      return categories.filter((c) => c.id === 'ai-ml' || c.id === 'gen-ai');
    }
    if (activeTab === 'backend') {
      return categories.filter((c) => c.id === 'languages' || c.id === 'web-backend');
    }
    if (activeTab === 'infra') {
      return categories.filter((c) => c.id === 'databases-cloud' || c.id === 'devops-tools');
    }
    return categories;
  }, [activeTab, categories]);

  const tabs: { id: FilterTab; label: string; count: number }[] = [
    { id: 'all', label: 'All Capabilities', count: totalSkillsCount },
    {
      id: 'ai',
      label: 'AI & Generative Systems',
      count: categories
        .filter((c) => c.id === 'ai-ml' || c.id === 'gen-ai')
        .reduce((acc, c) => acc + c.skills.length, 0),
    },
    {
      id: 'backend',
      label: 'Languages & Backend',
      count: categories
        .filter((c) => c.id === 'languages' || c.id === 'web-backend')
        .reduce((acc, c) => acc + c.skills.length, 0),
    },
    {
      id: 'infra',
      label: 'Databases & DevOps',
      count: categories
        .filter((c) => c.id === 'databases-cloud' || c.id === 'devops-tools')
        .reduce((acc, c) => acc + c.skills.length, 0),
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 border-t border-border-subtle bg-surface/20 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2 flex items-center justify-center gap-1.5">
            <Layers size={14} />
            <span>{eyebrow || 'Architecture & Engineering Tooling'}</span>
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-4">
            {heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-4" />
          <p className="text-text-sub text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Interactive Filter Pill Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-surface border border-border-subtle shadow-xs">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-card text-terracotta font-bold shadow-xs border border-border-subtle'
                      : 'text-text-mute hover:text-text-main hover:bg-card/50'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] ${
                      isActive
                        ? 'bg-terracotta/15 text-terracotta'
                        : 'bg-surface/80 text-text-mute'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bespoke Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-2xl p-6 sm:p-7 shadow-sm transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                
                {/* Domain Card Header */}
                <div className="flex items-start justify-between gap-3 mb-4 pb-3 border-b border-border-subtle/60">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-surface border border-border-subtle group-hover:border-terracotta/40 transition-colors">
                      {iconMap[category.id] || <Layers size={22} className="text-terracotta" />}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-text-main group-hover:text-terracotta transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-terracotta font-medium uppercase tracking-wider">
                        {category.tag}
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-text-mute px-2 py-0.5 rounded bg-surface border border-border-subtle flex-shrink-0">
                    {category.skills.length} tools
                  </span>
                </div>

                {/* Scope Description */}
                <p className="text-xs text-text-sub leading-relaxed mb-6">
                  {category.scope}
                </p>

                {/* Interactive Skills Chip Matrix */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {category.skills.map((skill, idx) => {
                    const isHovered = activeSkill === skill;
                    return (
                      <span
                        key={idx}
                        onMouseEnter={() => setActiveSkill(skill)}
                        onMouseLeave={() => setActiveSkill(null)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-default ${
                          isHovered
                            ? 'bg-terracotta text-white shadow-xs scale-105'
                            : 'bg-surface hover:bg-surface/90 border border-border-subtle hover:border-terracotta/50 text-text-main'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isHovered ? 'bg-white' : 'bg-terracotta'
                          }`}
                        />
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Architectural Highlights Banner */}
        <div className="bg-card border border-border-subtle rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-4">
            <Sparkles size={14} />
            <span>Core Engineering Synthesis</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-2">
            <div className="space-y-1.5 border-l-2 border-terracotta/40 pl-4">
              <h4 className="font-serif text-base font-bold text-text-main">
                Deep Learning Research
              </h4>
              <p className="text-xs text-text-sub leading-relaxed">
                PyTorch &amp; TensorFlow workflows optimizing multi-task CNNs and ViTs with Grad-CAM visual interpretability.
              </p>
            </div>

            <div className="space-y-1.5 border-l-2 border-terracotta/40 pl-4">
              <h4 className="font-serif text-base font-bold text-text-main">
                Grounded Retrieval (RAG)
              </h4>
              <p className="text-xs text-text-sub leading-relaxed">
                LangChain and vector similarity pipelines ensuring verified knowledge retrieval and hallucination mitigation.
              </p>
            </div>

            <div className="space-y-1.5 border-l-2 border-terracotta/40 pl-4">
              <h4 className="font-serif text-base font-bold text-text-main">
                Full-Stack Systems
              </h4>
              <p className="text-xs text-text-sub leading-relaxed">
                FastAPI, React.js, PostgreSQL, and Dockerized microservices architected for low-latency asynchronous throughput.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsClient;
