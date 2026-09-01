import { motion } from "framer-motion";
import heroData from "../../data/sections/hero.json";
import ProfileImage from "../../pages/home/ProfileImage";
import TypingSubtitle from "../../pages/home/TypingSubtitle";
import { ArrowUpRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-28 pb-16 transition-colors"
    >
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center w-full">
        
        {/* Profile Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <ProfileImage />
        </motion.div>

        {/* Eyebrow / Focus */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border-subtle text-xs font-mono font-medium text-text-sub mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-terracotta" />
          <span>AI &amp; Machine Learning Specialization</span>
        </motion.div>

        {/* Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-main mb-4"
        >
          {heroData.name}
        </motion.h1>

        {/* Dynamic Typing Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-sm md:text-base mb-6 min-h-[28px]"
        >
          <TypingSubtitle />
        </motion.div>

        {/* Editorial Bio */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="text-text-sub text-base sm:text-lg leading-relaxed mb-10 max-w-2xl"
        >
          {heroData.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-hover text-white font-medium px-6 py-3 rounded-lg shadow-sm transition-all duration-200 text-sm"
          >
            <span>{heroData.ctaPrimary}</span>
            <ArrowUpRight size={16} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-surface hover:bg-card border border-border hover:border-terracotta/40 text-text-main font-medium px-6 py-3 rounded-lg shadow-sm transition-all duration-200 text-sm"
          >
            <Mail size={16} className="text-terracotta" />
            <span>{heroData.ctaSecondary}</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
