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
  ChevronDown,
  ChevronUp,
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
  const [showAllSkills, setShowAllSkills] = useState<boolean>(false);

  const totalSkillsCount = useMemo(
    () => categories.reduce((acc, cat) => acc + cat.skills.length, 0),
    [categories]
  );

  const allFilteredCategories = useMemo(() => {
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

  const displayedCategories = useMemo(() => {
    if (activeTab === 'all' && !showAllSkills) {
      return allFilteredCategories.slice(0, 3);
    }
    return allFilteredCategories;
  }, [activeTab, showAllSkills, allFilteredCategories]);

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
      className="py-20 sm:py-24 px-4 sm:px-6 border-t border-border-subtle bg-surface/20 transition-colors w-full overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2 flex items-center justify-center gap-1.5">
            <Layers size={14} />
            <span>{eyebrow || 'Architecture & Engineering Tooling'}</span>
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-4">
            {heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-4" />
          <p className="text-text-sub text-sm sm:text-base md:text-lg leading-relaxed px-2">
            {description}
          </p>
        </div>

        {/* Mobile Horizontal Scrollable Filter Tabs */}
        <div className="w-full flex justify-center mb-10 sm:mb-12">
          <div className="w-full max-w-full overflow-x-auto no-scrollbar py-1">
            <div className="inline-flex sm:flex sm:flex-wrap items-center justify-start sm:justify-center gap-1.5 p-1 rounded-xl bg-surface border border-border-subtle shadow-xs min-w-max mx-auto">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      if (tab.id !== 'all') setShowAllSkills(true);
                    }}
                    className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors duration-200 flex items-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap focus:outline-none select-none border ${
                      isActive
                        ? 'bg-card text-terracotta font-bold shadow-xs border-border-subtle'
                        : 'border-transparent text-text-mute hover:text-text-main hover:bg-card/50'
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
        </div>

        {/* Bespoke Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-2xl p-5 sm:p-7 shadow-sm transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                
                {/* Domain Card Header */}
                <div className="flex items-start justify-between gap-3 mb-4 pb-3 border-b border-border-subtle/60">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-surface border border-border-subtle group-hover:border-terracotta/40 transition-colors">
                      {iconMap[category.id] || <Layers size={20} className="text-terracotta" />}
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-text-main group-hover:text-terracotta transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-terracotta font-medium uppercase tracking-wider">
                        {category.tag}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-mono text-text-mute px-2 py-0.5 rounded bg-surface border border-border-subtle flex-shrink-0">
                    {category.skills.length} tools
                  </span>
                </div>

                {/* Scope Description */}
                <p className="text-xs text-text-sub leading-relaxed mb-5 sm:mb-6">
                  {category.scope}
                </p>

                {/* Interactive Skills Chip Matrix */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2">
                  {category.skills.map((skill, idx) => {
                    const isHovered = activeSkill === skill;
                    return (
                      <span
                        key={idx}
                        onMouseEnter={() => setActiveSkill(skill)}
                        onMouseLeave={() => setActiveSkill(null)}
                        className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-default ${
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

        {/* Expand / Collapse "See More Skills" Button (when in All view) */}
        {activeTab === 'all' && allFilteredCategories.length > 3 && (
          <div className="flex justify-center mb-14">
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface hover:bg-card border border-border hover:border-terracotta/50 text-text-main hover:text-terracotta text-xs sm:text-sm font-mono font-medium shadow-xs transition-all duration-200 cursor-pointer"
            >
              <span>
                {showAllSkills
                  ? 'Collapse Stack View'
                  : `See All Capabilities (${allFilteredCategories.length - 3} more domains)`}
              </span>
              {showAllSkills ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}

        {/* Architectural Highlights Banner */}
        <div className="bg-card border border-border-subtle rounded-2xl p-5 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-4">
            <Sparkles size={14} />
            <span>Core Engineering Synthesis</span>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pt-2">
            <div className="space-y-1.5 border-l-2 border-terracotta/40 pl-3.5 sm:pl-4">
              <h4 className="font-serif text-sm sm:text-base font-bold text-text-main">
                Deep Learning Research
              </h4>
              <p className="text-xs text-text-sub leading-relaxed">
                PyTorch &amp; TensorFlow workflows optimizing multi-task CNNs and ViTs with Grad-CAM visual interpretability.
              </p>
            </div>

            <div className="space-y-1.5 border-l-2 border-terracotta/40 pl-3.5 sm:pl-4">
              <h4 className="font-serif text-sm sm:text-base font-bold text-text-main">
                Grounded Retrieval (RAG)
              </h4>
              <p className="text-xs text-text-sub leading-relaxed">
                LangChain and vector similarity pipelines ensuring verified knowledge retrieval and hallucination mitigation.
              </p>
            </div>

            <div className="space-y-1.5 border-l-2 border-terracotta/40 pl-3.5 sm:pl-4 sm:col-span-2 md:col-span-1">
              <h4 className="font-serif text-sm sm:text-base font-bold text-text-main">
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
