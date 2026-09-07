import { GithubIcon, LinkedinIcon, ResearchGateIcon } from './Icons';

export const Footer = () => {
  return (
    <footer className="border-t border-border-subtle bg-surface/50 text-text-mute py-8 sm:py-10 mt-16 sm:mt-20 transition-colors w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-xs md:text-sm text-center sm:text-left">
        <div>
          <p className="font-serif text-text-sub font-medium">
            Diya Chanda <span className="text-terracotta">·</span> Portfolio
          </p>
          <p className="text-text-mute text-[11px] sm:text-xs mt-0.5">
            © {new Date().getFullYear()} Diya Chanda. Built with Next.js &amp; Warm Editorial aesthetics.
          </p>
        </div>

        {/* Footer Socials */}
        <div className="flex items-center gap-3.5 sm:gap-4">
          <a
            href="https://github.com/chandadiya2004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 rounded-lg bg-surface border border-border-subtle hover:border-terracotta/40 text-text-sub hover:text-terracotta transition-colors shadow-xs"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/diya-chanda2004/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-1.5 rounded-lg bg-surface border border-border-subtle hover:border-terracotta/40 text-text-sub hover:text-terracotta transition-colors shadow-xs"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href="https://www.researchgate.net/profile/Diya-Chanda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ResearchGate Profile"
            className="p-1.5 rounded-lg bg-surface border border-border-subtle hover:border-terracotta/40 text-text-sub hover:text-terracotta transition-colors shadow-xs"
          >
            <ResearchGateIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
