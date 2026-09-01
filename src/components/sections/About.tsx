import Image from 'next/image';
import aboutData from '../../data/sections/about.json';
import {
  GraduationCap,
  Award,
  Microscope,
  MapPin,
  Sparkles,
  Compass,
  Cpu,
  Eye,
  Zap,
  Layers,
  ArrowRight,
  Heart,
  Code2,
} from 'lucide-react';
import { ReactNode } from 'react';

const pillarIconMap: Record<string, ReactNode> = {
  'pillar-1': <Cpu size={20} className="text-terracotta" />,
  'pillar-2': <Eye size={20} className="text-terracotta" />,
  'pillar-3': <Zap size={20} className="text-terracotta" />,
  'pillar-4': <Layers size={20} className="text-terracotta" />,
};

export const About = () => {
  const {
    heading,
    eyebrow,
    summary,
    academicProfile,
    interests,
    corePillars,
    timeline,
    mission,
    values,
  } = aboutData;

  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 border-t border-border-subtle transition-colors w-full">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2">
            {eyebrow || 'Background & Philosophy'}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-4">
            {heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-6" />
          <p className="text-text-sub text-sm sm:text-base md:text-lg leading-relaxed text-justify px-2">
            {summary}
          </p>
        </div>

        {/* Split Grid: Left Profile Panel & Right Engineering Content */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          
          {/* =========================================================================
             LEFT PANEL (5 Cols): Portrait, Academic Credentials, Interests
             ========================================================================= */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28 lg:self-start">
            
            {/* Portrait & Core Identity Card */}
            <div className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-2xl p-5 sm:p-6 shadow-sm transition-all duration-300 group hover:-translate-y-1 hover:shadow-md">
              <div className="flex flex-col items-center text-center">
                
                {/* Photo Frame */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-border-subtle bg-surface mb-4 shadow-sm group-hover:border-terracotta/50 transition-colors">
                  <Image
                    src="/images/profile.webp"
                    alt="Diya Chanda — AI Researcher & Machine Learning Engineer"
                    fill
                    sizes="(max-width: 768px) 160px, 160px"
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-text-main mb-1">
                  Diya Chanda
                </h3>
                <p className="text-xs font-mono text-terracotta font-medium mb-3">
                  {academicProfile.specialization}
                </p>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border-subtle text-[11px] font-mono text-text-mute">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Batch {academicProfile.batch}</span>
                </div>
              </div>
            </div>

            {/* Academic Standings & Institutional Profile */}
            <div className="bg-card border border-border-subtle rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold pb-2 border-b border-border-subtle/60 flex items-center gap-2">
                <GraduationCap size={15} />
                <span>Academic Profile</span>
              </h4>

              <div className="space-y-3.5 text-xs sm:text-sm">
                
                {/* Institution */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface border border-border-subtle text-terracotta flex-shrink-0">
                    <GraduationCap size={16} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-text-mute uppercase">Institution</span>
                    <span className="font-medium text-text-main">{academicProfile.institution}</span>
                  </div>
                </div>

                {/* CGPA Badge */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface border border-border-subtle text-terracotta flex-shrink-0">
                    <Award size={16} />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <span className="block text-[11px] font-mono text-text-mute uppercase">Cumulative GPA</span>
                      <span className="font-serif text-base sm:text-lg font-bold text-text-main">{academicProfile.cgpa}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-terracotta/10 border border-terracotta/30 text-terracotta text-xs font-mono font-bold">
                      Top Decile
                    </span>
                  </div>
                </div>

                {/* Research Focus */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface border border-border-subtle text-terracotta flex-shrink-0">
                    <Microscope size={16} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-text-mute uppercase">Research Focus</span>
                    <span className="font-medium text-text-main">{academicProfile.researchFocus}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface border border-border-subtle text-terracotta flex-shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-text-mute uppercase">Location</span>
                    <span className="font-medium text-text-main">{academicProfile.location}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Interests & Explorations Card */}
            <div className="bg-card border border-border-subtle rounded-2xl p-5 sm:p-6 shadow-sm space-y-3.5">
              <h4 className="text-xs font-mono uppercase tracking-widest text-text-mute font-semibold flex items-center gap-1.5">
                <Sparkles size={14} className="text-terracotta" />
                <span>Interests &amp; Explorations</span>
              </h4>

              <div className="flex flex-wrap gap-1.5">
                {interests.map((interest: string, i: number) => {
                  const isSpecial = interest.includes('Badminton') || interest.includes('Exploration');
                  return (
                    <span
                      key={i}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-colors cursor-default ${
                        isSpecial
                          ? 'bg-terracotta/10 border border-terracotta/30 text-terracotta'
                          : 'bg-surface border border-border-subtle text-text-main hover:border-terracotta/40'
                      }`}
                    >
                      {interest}
                    </span>
                  );
                })}
              </div>
            </div>

          </div>

          {/* =========================================================================
             RIGHT PANEL (7 Cols): Narrative, Core Pillars, Milestones, Mission
             ========================================================================= */}
          <div className="lg:col-span-7 space-y-10 sm:space-y-12">
            
            {/* Core Engineering Pillars */}
            <div className="space-y-5 sm:space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold block mb-1">
                  Technical Pillars
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-main">
                  Core Engineering &amp; Research Focus
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {corePillars.map((pillar: any) => (
                  <div
                    key={pillar.id}
                    className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-2xl p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-border-subtle/60">
                        <div className="p-2 rounded-lg bg-surface border border-border-subtle group-hover:border-terracotta/30 transition-colors">
                          {pillarIconMap[pillar.id] || <Code2 size={20} className="text-terracotta" />}
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-text-mute px-2 py-0.5 rounded bg-surface border border-border-subtle">
                          {pillar.tag}
                        </span>
                      </div>

                      <h4 className="font-serif text-base sm:text-lg font-bold text-text-main mb-2 group-hover:text-terracotta transition-colors">
                        {pillar.title}
                      </h4>

                      <p className="text-text-sub text-xs sm:text-sm leading-relaxed text-justify">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic & Research Milestones Timeline */}
            <div className="space-y-5 sm:space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold block mb-1">
                  Trajectory
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-main">
                  Academic &amp; Research Milestones
                </h3>
              </div>

              <div className="relative pl-6 sm:pl-8 border-l border-border-default space-y-8 sm:space-y-10">
                {timeline.map((item: any, i: number) => (
                  <div key={i} className="relative group">
                    {/* Timeline Terracotta Bullet */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-card border-2 border-terracotta group-hover:scale-125 transition-transform" />

                    {/* Date Tag */}
                    <div className="text-xs font-mono font-medium text-terracotta mb-1 flex items-center gap-1.5">
                      <span>{item.year}</span>
                      <ArrowRight size={12} className="opacity-60" />
                    </div>

                    {/* Title & Narrative */}
                    <h4 className="font-serif text-base sm:text-lg font-bold text-text-main mb-1">
                      {item.title}
                    </h4>

                    {item.titleSecondary && (
                      <p className="text-xs font-mono text-terracotta/90 font-medium mb-1.5">
                        {item.titleSecondary}
                      </p>
                    )}

                    <p className="text-text-sub text-xs sm:text-sm leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Mission & Guiding Principles */}
            <div className="bg-card border border-border-subtle rounded-2xl p-5 sm:p-7 shadow-sm space-y-5 sm:space-y-6">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-terracotta font-semibold mb-2.5">
                  <Compass size={14} />
                  <span>Engineering Mission</span>
                </div>
                <blockquote className="font-serif text-base sm:text-lg italic text-text-main leading-relaxed border-l-2 border-terracotta/50 pl-3.5 sm:pl-4 my-2 text-justify">
                  "{mission}"
                </blockquote>
              </div>

              <div className="w-full h-px bg-border-subtle" />

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-text-mute font-semibold mb-3 flex items-center gap-1">
                  <Heart size={13} className="text-terracotta" />
                  <span>Guiding Principles</span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {values.map((val: string, i: number) => (
                    <span
                      key={i}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-surface border border-border-subtle text-text-main text-xs font-mono font-medium hover:border-terracotta/30 transition-colors"
                    >
                      {val}
                    </span>
                  ))}
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
