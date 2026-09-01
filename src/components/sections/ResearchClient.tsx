'use client';

import { useState, useRef, useEffect } from 'react';
import {
  BookOpen,
  ExternalLink,
  Sparkles,
  MapPin,
  Calendar,
  CheckCircle2,
  FileText,
  X,
} from 'lucide-react';

interface Paper {
  id: number;
  title: string;
  authors: string[];
  publishedIn: string;
  conferenceLocation: string;
  date: string;
  publisher: string;
  doi?: string;
  doiLink: string;
  bookLink?: string;
  pages?: string;
  abstract: string;
  keyMetrics: string[];
}

interface ResearchClientProps {
  heading: string;
  papers: Paper[];
}

export const ResearchClient = ({ heading, papers }: ResearchClientProps) => {
  const [selectedPaper, setSelectedPaper] = useState<Paper | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trapping and scroll locking
  useEffect(() => {
    if (selectedPaper) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedPaper(null);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [selectedPaper]);

  return (
    <section id="research" className="py-20 sm:py-24 px-4 sm:px-6 border-t border-border-subtle transition-colors w-full overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2">
            Academic Publications
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-4">
            {heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-4" />
          <p className="text-text-sub text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Peer-reviewed research in explainable deep learning, computer vision, and precision agricultural AI.
          </p>
        </div>

        {/* Papers Compact Editorial List */}
        <div className="space-y-6 sm:space-y-8">
          {papers.map((paper) => (
            <article
              key={paper.id}
              className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-2xl p-5 sm:p-7 shadow-sm transition-all duration-300 group hover:-translate-y-1 hover:shadow-md"
            >
              <div className="space-y-4 sm:space-y-5">
                
                {/* Meta Header */}
                <div className="flex flex-wrap items-center gap-2 pb-2.5 sm:pb-3 border-b border-border-subtle/60">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-surface border border-border-subtle text-[10px] sm:text-[11px] font-mono font-semibold text-terracotta">
                    <BookOpen size={12} />
                    <span>{paper.publisher} · {paper.publishedIn.includes('LNNS') ? 'Springer LNNS' : 'Conference Proceedings'}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-text-mute">
                    <Calendar size={12} className="opacity-70" />
                    <span>{paper.date}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-text-mute">
                    <MapPin size={12} className="opacity-70" />
                    <span>{paper.conferenceLocation}</span>
                  </span>

                  {paper.doi && (
                    <span className="ml-auto text-[10px] sm:text-[11px] font-mono text-text-mute hidden md:inline-block">
                      DOI: {paper.doi}
                    </span>
                  )}
                </div>

                {/* Paper Title */}
                <h3 className="font-serif text-lg sm:text-2xl font-bold text-text-main group-hover:text-terracotta transition-colors leading-snug">
                  {paper.title}
                </h3>

                {/* Publication Venue */}
                <p className="text-xs sm:text-sm font-mono text-text-sub font-medium leading-relaxed">
                  <span className="text-text-mute">Published in: </span>
                  {paper.publishedIn}
                  {paper.pages ? ` (pp. ${paper.pages})` : ''}
                </p>

                {/* Authors */}
                <p className="text-xs sm:text-sm text-text-sub leading-relaxed">
                  <span className="font-semibold text-text-main font-mono text-[11px] sm:text-xs uppercase tracking-wider">Authors: </span>
                  {paper.authors.map((author, idx) => {
                    const isDiya = author.toLowerCase().includes('diya chanda');
                    return (
                      <span key={idx}>
                        {isDiya ? (
                          <span className="font-bold text-terracotta underline decoration-terracotta/40 underline-offset-2">
                            {author}
                          </span>
                        ) : (
                          <span>{author}</span>
                        )}
                        {idx < paper.authors.length - 1 ? ', ' : ''}
                      </span>
                    );
                  })}
                </p>

                {/* Key Metrics Chips */}
                {paper.keyMetrics && paper.keyMetrics.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
                    <span className="text-[11px] sm:text-xs font-mono text-text-mute font-medium mr-1">Key Results:</span>
                    {paper.keyMetrics.map((metric, mIdx) => (
                      <span
                        key={mIdx}
                        className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md bg-surface border border-border-subtle text-[10px] sm:text-[11px] font-mono font-medium text-text-main"
                      >
                        <CheckCircle2 size={12} className="text-emerald-500" />
                        <span>{metric}</span>
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Links Bar */}
                <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
                  {/* Clickable Read Abstract Button */}
                  <button
                    onClick={() => setSelectedPaper(paper)}
                    className="inline-flex items-center gap-1.5 py-2 sm:py-2.5 px-3.5 sm:px-4 rounded-lg bg-surface hover:bg-card border border-border hover:border-terracotta/40 text-text-main hover:text-terracotta text-xs font-medium shadow-xs transition-colors cursor-pointer"
                  >
                    <FileText size={14} className="text-terracotta" />
                    <span>Read Abstract &amp; Summary</span>
                  </button>

                  <a
                    href={paper.doiLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-2 sm:py-2.5 px-3.5 sm:px-4 rounded-lg bg-surface hover:bg-card border border-border hover:border-terracotta/40 text-text-sub hover:text-terracotta text-xs font-medium shadow-xs transition-colors"
                  >
                    <Sparkles size={13} className="text-terracotta" />
                    <span>{paper.publisher === 'Springer' ? 'SpringerLink' : 'IEEE Xplore'}</span>
                    <ExternalLink size={12} />
                  </a>

                  {paper.bookLink && (
                    <a
                      href={paper.bookLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 py-2 sm:py-2.5 px-3.5 sm:px-4 rounded-lg bg-surface hover:bg-card border border-border hover:border-terracotta/40 text-text-sub hover:text-terracotta text-xs font-medium shadow-xs transition-colors hidden sm:inline-flex"
                    >
                      <BookOpen size={13} className="text-terracotta" />
                      <span>Springer Book</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Abstract & Scholarly Summary Modal */}
      {selectedPaper && (
        <div
          onClick={() => setSelectedPaper(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="paper-modal-title"
          className="fixed inset-0 bg-black/80 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] bg-card border border-border rounded-2xl overflow-hidden shadow-2xl p-5 sm:p-7 flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-3 mb-4 border-b border-border-subtle gap-3">
              <div>
                <span className="text-[11px] font-mono text-terracotta font-semibold uppercase tracking-wider block mb-1">
                  Peer-Reviewed Research Abstract
                </span>
                <h3 id="paper-modal-title" className="font-serif text-lg sm:text-xl font-bold text-text-main leading-snug">
                  {selectedPaper.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedPaper(null)}
                autoFocus
                aria-label="Close abstract modal"
                className="p-1.5 rounded-lg border border-border hover:border-terracotta text-text-sub hover:text-terracotta bg-surface transition-colors cursor-pointer flex-shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto space-y-4 pr-1">
              <div className="bg-surface/50 rounded-xl p-4 border border-border-subtle/70">
                <span className="block text-[11px] font-mono uppercase tracking-widest text-text-mute font-semibold mb-2">
                  Complete Abstract
                </span>
                <p className="text-text-main text-sm sm:text-[15px] leading-relaxed text-justify">
                  {selectedPaper.abstract}
                </p>
              </div>

              {/* Citation & Venue Details */}
              <div className="text-xs font-mono text-text-sub space-y-1 bg-card rounded-xl p-3 border border-border-subtle">
                <p><span className="text-text-mute font-semibold">Venue:</span> {selectedPaper.publishedIn}</p>
                <p><span className="text-text-mute font-semibold">Date &amp; Location:</span> {selectedPaper.date} · {selectedPaper.conferenceLocation}</p>
                {selectedPaper.doi && <p><span className="text-text-mute font-semibold">DOI:</span> {selectedPaper.doi}</p>}
              </div>

              {/* Action Button inside Modal */}
              <div className="pt-2 flex justify-end gap-2">
                <a
                  href={selectedPaper.doiLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-hover text-white font-medium px-4 py-2.5 rounded-lg shadow-xs text-xs"
                >
                  <span>{selectedPaper.publisher === 'Springer' ? 'Open Chapter on SpringerLink' : 'Open on IEEE Xplore'}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResearchClient;
