import data from '../../data/sections/contact.json';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon } from '../common/Icons';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border-subtle bg-surface/30 transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-6">
            {data.heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-4" />
          <p className="text-text-sub text-base sm:text-lg">
            {data.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-xl font-bold text-text-main mb-4">
              Direct Channels
            </h3>

            {/* Email Card */}
            <div className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-xl p-4 shadow-sm transition-all flex items-center gap-4">
              <div className="p-3 rounded-lg bg-surface border border-border-subtle text-terracotta">
                <Mail size={20} />
              </div>
              <div className="min-w-0">
                <span className="block text-xs font-mono text-text-mute uppercase">Email</span>
                <a
                  href={`mailto:${data.email}`}
                  className="text-sm font-medium text-text-main hover:text-terracotta transition-colors truncate block"
                >
                  {data.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-xl p-4 shadow-sm transition-all flex items-center gap-4">
              <div className="p-3 rounded-lg bg-surface border border-border-subtle text-terracotta">
                <Phone size={20} />
              </div>
              <div>
                <span className="block text-xs font-mono text-text-mute uppercase">Phone</span>
                <a
                  href={`tel:${data.phone}`}
                  className="text-sm font-medium text-text-main hover:text-terracotta transition-colors"
                >
                  {data.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-card border border-border-subtle rounded-xl p-4 shadow-sm flex items-center gap-4">
              <div className="p-3 rounded-lg bg-surface border border-border-subtle text-terracotta">
                <MapPin size={20} />
              </div>
              <div>
                <span className="block text-xs font-mono text-text-mute uppercase">Location</span>
                <p className="text-sm font-medium text-text-main">
                  {data.location}
                </p>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-xl p-4 shadow-sm transition-all flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="p-3 rounded-lg bg-surface border border-border-subtle text-terracotta">
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <span className="block text-xs font-mono text-text-mute uppercase">LinkedIn</span>
                  <span className="text-sm font-medium text-text-main">Diya Chanda</span>
                </div>
              </div>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-terracotta hover:underline"
              >
                <span>Profile</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
