import heroData from '../../data/sections/hero.json';
import researchData from '../../data/sections/research.json';
import certificatesData from '../../data/sections/certificates.json';
import projectsData from '../../data/sections/projects.json';
import TypingSubtitle from '../home/TypingSubtitle';
import { TextScramble } from '../common/TextScramble';
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
      className="relative min-h-[95vh] flex flex-col justify-center items-center px-6 pt-32 pb-20 transition-colors"
    >
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        
        {/* Top Eyebrow Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border-subtle text-xs font-mono font-medium text-text-sub shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for AI Research &amp; Engineering</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-border-subtle text-xs font-mono font-medium text-terracotta shadow-xs">
            <Sparkles size={13} />
            <span>B.Tech CSE (AI &amp; ML)</span>
          </div>
        </div>

        {/* Extra Large Centered Editorial Name */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-text-main leading-[0.95] mb-6 select-none">
          <TextScramble text={heroData.name} />
        </h1>

        {/* Dynamic Typing Subtitle */}
        <div className="mb-6 min-h-[30px] flex items-center justify-center">
          <div className="px-4 py-1.5 rounded-full bg-surface/80 border border-border-subtle shadow-xs">
            <TypingSubtitle />
          </div>
        </div>

        {/* Editorial Bio */}
        <p className="text-text-sub text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          {heroData.description}
        </p>

        {/* Main CTA Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-hover text-white font-medium px-6 py-3 rounded-lg shadow-sm transition-all duration-200 text-sm"
          >
            <span>{heroData.ctaPrimary}</span>
            <ArrowUpRight size={16} />
          </a>

          <a
            href={heroData.resumeUrl || '/resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 bg-surface hover:bg-card border border-border hover:border-terracotta/50 text-text-main hover:text-terracotta font-medium px-6 py-3 rounded-lg shadow-sm transition-all duration-200 text-sm cursor-pointer"
          >
            <FileDown size={16} className="text-terracotta" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-surface hover:bg-card border border-border hover:border-terracotta/40 text-text-sub hover:text-text-main font-medium px-5 py-3 rounded-lg shadow-sm transition-all duration-200 text-sm"
          >
            <Mail size={16} />
            <span>{heroData.ctaSecondary}</span>
          </a>
        </div>

        {/* Social Quick-Links Ribbon */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Diya Chanda GitHub Profile"
            className="p-2.5 rounded-lg bg-surface border border-border-subtle hover:border-terracotta/40 text-text-sub hover:text-terracotta hover:bg-card transition-all shadow-xs"
          >
            <GithubIcon size={18} />
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Diya Chanda LinkedIn Profile"
            className="p-2.5 rounded-lg bg-surface border border-border-subtle hover:border-terracotta/40 text-text-sub hover:text-terracotta hover:bg-card transition-all shadow-xs"
          >
            <LinkedinIcon size={18} />
          </a>

          <a
            href={socials.researchgate}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Diya Chanda ResearchGate Profile"
            className="p-2.5 rounded-lg bg-surface border border-border-subtle hover:border-terracotta/40 text-text-sub hover:text-terracotta hover:bg-card transition-all shadow-xs"
          >
            <ResearchGateIcon size={18} />
          </a>
        </div>

        {/* Dynamic Highlights Metric Ribbon */}
        <div className="w-full grid grid-cols-3 gap-3 sm:gap-6 pt-10 border-t border-border-subtle">
          <a
            href="#research"
            className="bg-card/60 hover:bg-card border border-border-subtle hover:border-terracotta/40 rounded-xl p-4 sm:p-5 text-center transition-all duration-200 group block shadow-xs"
          >
            <div className="flex items-center justify-center gap-2 text-terracotta mb-1.5">
              <BookOpen size={18} />
              <span className="font-serif text-2xl sm:text-3xl font-bold text-text-main group-hover:text-terracotta transition-colors">
                {papersCount}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-mono text-text-mute group-hover:text-text-sub transition-colors">
              Published Papers
            </p>
          </a>

          <a
            href="#certificates"
            className="bg-card/60 hover:bg-card border border-border-subtle hover:border-terracotta/40 rounded-xl p-4 sm:p-5 text-center transition-all duration-200 group block shadow-xs"
          >
            <div className="flex items-center justify-center gap-2 text-terracotta mb-1.5">
              <Award size={18} />
              <span className="font-serif text-2xl sm:text-3xl font-bold text-text-main group-hover:text-terracotta transition-colors">
                {certsCount}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-mono text-text-mute group-hover:text-text-sub transition-colors">
              Honors &amp; Certs
            </p>
          </a>

          <a
            href="#projects"
            className="bg-card/60 hover:bg-card border border-border-subtle hover:border-terracotta/40 rounded-xl p-4 sm:p-5 text-center transition-all duration-200 group block shadow-xs"
          >
            <div className="flex items-center justify-center gap-2 text-terracotta mb-1.5">
              <FolderGit2 size={18} />
              <span className="font-serif text-2xl sm:text-3xl font-bold text-text-main group-hover:text-terracotta transition-colors">
                {projectsCount}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-mono text-text-mute group-hover:text-text-sub transition-colors">
              Engineered Systems
            </p>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
