import data from '../../data/sections/contact.json';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, ResearchGateIcon } from '../common/Icons';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 px-3.5 sm:px-6 border-t border-border-subtle bg-surface/30 transition-colors w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-4">
            {data.heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-4" />
          <p className="text-text-sub text-xs sm:text-base md:text-lg leading-relaxed text-justify px-1 sm:px-2">
            {data.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 items-start w-full">
          
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-3.5 w-full min-w-0">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-text-main mb-3 sm:mb-4">
              Direct Channels &amp; Profiles
            </h3>

            {/* Email Card */}
            <div className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-xl p-3 sm:p-3.5 shadow-sm transition-all flex items-center gap-3 sm:gap-4 w-full min-w-0">
              <div className="p-2 sm:p-2.5 rounded-lg bg-surface border border-border-subtle text-terracotta flex-shrink-0">
                <Mail size={17} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] sm:text-[11px] font-mono text-text-mute uppercase">Email</span>
                <a
                  href={`mailto:${data.email}`}
                  className="text-xs sm:text-sm font-medium text-text-main hover:text-terracotta transition-colors truncate block"
                >
                  {data.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-xl p-3 sm:p-3.5 shadow-sm transition-all flex items-center gap-3 sm:gap-4 w-full min-w-0">
              <div className="p-2 sm:p-2.5 rounded-lg bg-surface border border-border-subtle text-terracotta flex-shrink-0">
                <Phone size={17} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] sm:text-[11px] font-mono text-text-mute uppercase">Phone</span>
                <a
                  href={`tel:${data.phone}`}
                  className="text-xs sm:text-sm font-medium text-text-main hover:text-terracotta transition-colors truncate block"
                >
                  {data.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-card border border-border-subtle rounded-xl p-3 sm:p-3.5 shadow-sm flex items-center gap-3 sm:gap-4 w-full min-w-0">
              <div className="p-2 sm:p-2.5 rounded-lg bg-surface border border-border-subtle text-terracotta flex-shrink-0">
                <MapPin size={17} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] sm:text-[11px] font-mono text-text-mute uppercase">Location</span>
                <p className="text-xs sm:text-sm font-medium text-text-main">
                  {data.location}
                </p>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-xl p-3 sm:p-3.5 shadow-sm transition-all flex items-center justify-between gap-3 w-full min-w-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 sm:p-2.5 rounded-lg bg-surface border border-border-subtle text-terracotta flex-shrink-0">
                  <LinkedinIcon size={17} />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] sm:text-[11px] font-mono text-text-mute uppercase">LinkedIn</span>
                  <span className="text-xs sm:text-sm font-medium text-text-main truncate block">diya-chanda2004</span>
                </div>
              </div>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-terracotta hover:underline flex-shrink-0"
              >
                <span>Connect</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* GitHub Card */}
            {data.github && (
              <div className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-xl p-3 sm:p-3.5 shadow-sm transition-all flex items-center justify-between gap-3 w-full min-w-0">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-surface border border-border-subtle text-terracotta flex-shrink-0">
                    <GithubIcon size={17} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] sm:text-[11px] font-mono text-text-mute uppercase">GitHub</span>
                    <span className="text-xs sm:text-sm font-medium text-text-main truncate block">chandadiya2004</span>
                  </div>
                </div>
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-terracotta hover:underline flex-shrink-0"
                >
                  <span>Repositories</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            )}

            {/* ResearchGate Card */}
            {data.researchgate && (
              <div className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-xl p-3 sm:p-3.5 shadow-sm transition-all flex items-center justify-between gap-3 w-full min-w-0">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-surface border border-border-subtle text-terracotta flex-shrink-0">
                    <ResearchGateIcon size={17} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] sm:text-[11px] font-mono text-text-mute uppercase">ResearchGate</span>
                    <span className="text-xs sm:text-sm font-medium text-text-main truncate block">Diya Chanda</span>
                  </div>
                </div>
                <a
                  href={data.researchgate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-terracotta hover:underline flex-shrink-0"
                >
                  <span>Citations</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            )}
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 w-full min-w-0">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
