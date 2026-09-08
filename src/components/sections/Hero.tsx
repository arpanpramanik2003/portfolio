import heroData from '../../data/sections/hero.json';
import researchData from '../../data/sections/research.json';
import certificatesData from '../../data/sections/certificates.json';
import projectsData from '../../data/sections/projects.json';
import TypingSubtitle from '../home/TypingSubtitle';
import { WaveTitle } from '../home/WaveTitle';
import { ArrowUpRight, Mail, FileDown, BookOpen, Award, FolderGit2, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, ResearchGateIcon } from '../common/Icons';

export const Hero = () => {
  const papersCount = researchData.papers.length;
  const certsCount = certificatesData.certificates.length;
  const projectsCount = projectsData.projects.length;

  const socials = heroData.socials || {
    github: 'https://github.com/chandadiya2004',
    linkedin: 'https://www.linkedin.com/in/diya-chanda2004/',
    researchgate: 'https://www.researchgate.net/profile/Diya-Chanda',
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-3.5 sm:px-6 pt-20 sm:pt-32 pb-12 sm:pb-20 transition-colors w-full max-w-full overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        
        {/* Top Eyebrow Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-5 sm:mb-8 max-w-full">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-surface border border-border-subtle text-[10px] sm:text-xs font-mono font-medium text-text-sub shadow-xs">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="truncate">Open for AI Research &amp; Engineering</span>
          </div>

          <div className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-surface border border-border-subtle text-[10px] sm:text-xs font-mono font-medium text-terracotta shadow-xs">
            <Sparkles size={11} className="flex-shrink-0" />
            <span>B.Tech CSE (AI &amp; ML)</span>
          </div>
        </div>

        {/* Extra Large Centered Editorial Name */}
        <h1 className="font-serif text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-text-main leading-[1.05] sm:leading-[0.95] mb-4 sm:mb-6 select-none max-w-full break-words">
          <WaveTitle text={heroData.name} />
        </h1>

        {/* Dynamic Typing Subtitle */}
        <div className="mb-5 sm:mb-6 min-h-[26px] sm:min-h-[28px] flex items-center justify-center max-w-full px-2">
          <div className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-surface/80 border border-border-subtle shadow-xs max-w-full">
            <TypingSubtitle />
          </div>
        </div>

        {/* Editorial Bio */}
        <p className="text-text-sub text-xs sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-10 font-normal px-2">
          {heroData.description}
        </p>

        {/* Main CTA Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-10 w-full max-w-xs sm:max-w-none">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-terracotta hover:bg-terracotta-hover text-white font-medium px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-sm transition-all duration-200 text-xs sm:text-sm"
          >
            <span>{heroData.ctaPrimary}</span>
            <ArrowUpRight size={14} className="sm:w-[15px] sm:h-[15px]" />
          </a>

          <a
            href={heroData.resumeUrl || '/resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            download="Diya_Chanda_Resume.pdf"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-surface hover:bg-card border border-border hover:border-terracotta/50 text-text-main hover:text-terracotta font-medium px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-sm transition-all duration-200 text-xs sm:text-sm cursor-pointer"
          >
            <FileDown size={14} className="text-terracotta sm:w-[15px] sm:h-[15px]" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-surface hover:bg-card border border-border hover:border-terracotta/40 text-text-sub hover:text-text-main font-medium px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg shadow-sm transition-all duration-200 text-xs sm:text-sm"
          >
            <Mail size={14} className="sm:w-[15px] sm:h-[15px]" />
            <span>{heroData.ctaSecondary}</span>
          </a>
        </div>

        {/* Social Quick-Links Ribbon */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-16">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Diya Chanda GitHub Profile"
            className="p-2 sm:p-2.5 rounded-lg bg-surface border border-border-subtle hover:border-terracotta/40 text-text-sub hover:text-terracotta hover:bg-card transition-all shadow-xs"
          >
            <GithubIcon size={16} />
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Diya Chanda LinkedIn Profile"
            className="p-2 sm:p-2.5 rounded-lg bg-surface border border-border-subtle hover:border-terracotta/40 text-text-sub hover:text-terracotta hover:bg-card transition-all shadow-xs"
          >
            <LinkedinIcon size={16} />
          </a>

          <a
            href={socials.researchgate}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Diya Chanda ResearchGate Profile"
            className="p-2 sm:p-2.5 rounded-lg bg-surface border border-border-subtle hover:border-terracotta/40 text-text-sub hover:text-terracotta hover:bg-card transition-all shadow-xs"
          >
            <ResearchGateIcon size={16} />
          </a>
        </div>

        {/* Dynamic Highlights Metric Ribbon */}
        <div className="w-full grid grid-cols-3 gap-1.5 sm:gap-4 md:gap-6 pt-6 sm:pt-10 border-t border-border-subtle">
          <a
            href="#research"
            className="bg-card/60 hover:bg-card border border-border-subtle hover:border-terracotta/40 rounded-xl p-2 sm:p-4 text-center transition-all duration-200 group block shadow-xs min-w-0"
          >
            <div className="flex items-center justify-center gap-1 text-terracotta mb-0.5 sm:mb-1">
              <BookOpen size={14} className="sm:w-[18px] sm:h-[18px]" />
              <span className="font-serif text-lg sm:text-2xl md:text-3xl font-bold text-text-main group-hover:text-terracotta transition-colors">
                {papersCount}
              </span>
            </div>
            <p className="text-[9px] sm:text-xs md:text-sm font-mono text-text-mute group-hover:text-text-sub transition-colors leading-tight truncate">
              Published Papers
            </p>
          </a>

          <a
            href="#certificates"
            className="bg-card/60 hover:bg-card border border-border-subtle hover:border-terracotta/40 rounded-xl p-2 sm:p-4 text-center transition-all duration-200 group block shadow-xs min-w-0"
          >
            <div className="flex items-center justify-center gap-1 text-terracotta mb-0.5 sm:mb-1">
              <Award size={14} className="sm:w-[18px] sm:h-[18px]" />
              <span className="font-serif text-lg sm:text-2xl md:text-3xl font-bold text-text-main group-hover:text-terracotta transition-colors">
                {certsCount}
              </span>
            </div>
            <p className="text-[9px] sm:text-xs md:text-sm font-mono text-text-mute group-hover:text-text-sub transition-colors leading-tight truncate">
              Honors &amp; Certs
            </p>
          </a>

          <a
            href="#projects"
            className="bg-card/60 hover:bg-card border border-border-subtle hover:border-terracotta/40 rounded-xl p-2 sm:p-4 text-center transition-all duration-200 group block shadow-xs min-w-0"
          >
            <div className="flex items-center justify-center gap-1 text-terracotta mb-0.5 sm:mb-1">
              <FolderGit2 size={14} className="sm:w-[18px] sm:h-[18px]" />
              <span className="font-serif text-lg sm:text-2xl md:text-3xl font-bold text-text-main group-hover:text-terracotta transition-colors">
                {projectsCount}
              </span>
            </div>
            <p className="text-[9px] sm:text-xs md:text-sm font-mono text-text-mute group-hover:text-text-sub transition-colors leading-tight truncate">
              Engineered Systems
            </p>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
