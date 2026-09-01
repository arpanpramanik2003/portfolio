const Footer = () => {
  return (
    <footer className="border-t border-border-subtle bg-surface/50 text-text-mute py-10 mt-20 transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs md:text-sm">
        <p className="font-serif text-text-sub font-medium">
          Diya Chanda <span className="text-terracotta">·</span> Portfolio
        </p>
        <p className="text-text-mute">
          © {new Date().getFullYear()} Diya Chanda. Designed with Warm Editorial aesthetics.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
