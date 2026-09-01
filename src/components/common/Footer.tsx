import { GithubIcon, LinkedinIcon, ResearchGateIcon } from './Icons';

export const Footer = () => {
  return (
    <footer className="border-t border-border-subtle bg-surface/50 text-text-mute py-10 mt-20 transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs md:text-sm">
        <div>
          <p className="font-serif text-text-sub font-medium">
            Diya Chanda <span className="text-terracotta">·</span> Portfolio
          </p>
          <p className="text-text-mute text-xs mt-0.5">
            © {new Date().getFullYear()} Diya Chanda. Built with Next.js &amp; Warm Editorial aesthetics.
          </p>
        </div>

        {/* Footer Socials */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/chandadiya2004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-text-sub hover:text-terracotta transition-colors"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/diya-chanda2004/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-text-sub hover:text-terracotta transition-colors"
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href="https://www.researchgate.net/profile/Diya-Chanda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ResearchGate Profile"
            className="text-text-sub hover:text-terracotta transition-colors"
          >
            <ResearchGateIcon size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
