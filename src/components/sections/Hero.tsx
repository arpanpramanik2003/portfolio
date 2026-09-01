import heroData from '../../data/sections/hero.json';
import ProfileImage from '../home/ProfileImage';
import TypingSubtitle from '../home/TypingSubtitle';
import { TextScramble } from '../common/TextScramble';
import { ArrowUpRight, Mail, Sparkles, BookOpen, Award, FolderGit2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center items-center px-6 pt-28 pb-16 transition-colors"
    >
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        
        {/* Main Hero Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-12 text-center md:text-left">
          
          {/* Portrait Column */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <ProfileImage />
            {/* Status Chip */}
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border-subtle text-[11px] font-mono text-text-sub shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open for Collaboration</span>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="flex-1">
            
            {/* Eyebrow Specialization */}
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-terracotta font-semibold mb-3">
              <Sparkles size={14} />
              <span>{heroData.title}</span>
            </div>

            {/* Name with subtle scramble-to-lock */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-main mb-3 leading-[1.1]">
              <TextScramble text={heroData.name} />
            </h1>

            {/* Dynamic Typing Title */}
            <div className="text-sm sm:text-base mb-5 min-h-[26px]">
              <TypingSubtitle />
            </div>

            {/* Editorial Bio */}
            <p className="text-text-sub text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              {heroData.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-hover text-white font-medium px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200 text-xs sm:text-sm"
              >
                <span>{heroData.ctaPrimary}</span>
                <ArrowUpRight size={15} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-surface hover:bg-card border border-border hover:border-terracotta/40 text-text-main font-medium px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200 text-xs sm:text-sm"
              >
                <Mail size={15} className="text-terracotta" />
                <span>{heroData.ctaSecondary}</span>
              </a>
            </div>

          </div>

        </div>

        {/* Quick Highlights Ribbon */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-8 border-t border-border-subtle">
          <div className="bg-card/50 border border-border-subtle rounded-xl p-3 sm:p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-terracotta mb-1">
              <BookOpen size={16} />
              <span className="font-serif text-lg sm:text-2xl font-bold text-text-main">2</span>
            </div>
            <p className="text-[11px] sm:text-xs font-mono text-text-mute">IEEE Publications</p>
          </div>

          <div className="bg-card/50 border border-border-subtle rounded-xl p-3 sm:p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-terracotta mb-1">
              <Award size={16} />
              <span className="font-serif text-lg sm:text-2xl font-bold text-text-main">7</span>
            </div>
            <p className="text-[11px] sm:text-xs font-mono text-text-mute">Honors &amp; Certs</p>
          </div>

          <div className="bg-card/50 border border-border-subtle rounded-xl p-3 sm:p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-terracotta mb-1">
              <FolderGit2 size={16} />
              <span className="font-serif text-lg sm:text-2xl font-bold text-text-main">5+</span>
            </div>
            <p className="text-[11px] sm:text-xs font-mono text-text-mute">AI / ML Projects</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
