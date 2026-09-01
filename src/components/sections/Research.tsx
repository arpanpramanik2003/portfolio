import data from '../../data/sections/research.json';
import { BookOpen, ExternalLink, Sparkles, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

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

export const Research = () => {
  const papers = data.papers as Paper[];

  return (
    <section id="research" className="py-24 px-6 border-t border-border-subtle transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2">
            Academic Publications
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-4">
            {data.heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-4" />
          <p className="text-text-sub text-base sm:text-lg">
            Peer-reviewed research in explainable deep learning, computer vision, and agricultural intelligence systems.
          </p>
        </div>

        {/* Papers List */}
        <div className="space-y-8">
          {papers.map((paper) => (
            <article
              key={paper.id}
              className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-2xl p-6 sm:p-8 shadow-sm transition-all duration-300 group hover:-translate-y-0.5"
            >
              <div className="space-y-5">
                
                {/* Meta Header / Badges */}
                <div className="flex flex-wrap items-center gap-2.5 pb-2 border-b border-border-subtle/60">
                  {/* Publisher Tag */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border-subtle text-[11px] font-mono font-semibold text-terracotta">
                    <BookOpen size={13} />
                    <span>{paper.publisher} · {paper.publishedIn.includes('LNNS') ? 'Springer LNNS' : 'Conference Proceedings'}</span>
                  </span>

                  {/* Date & Location Badges */}
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-text-mute">
                    <Calendar size={12} className="opacity-70" />
                    <span>{paper.date}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-text-mute">
                    <MapPin size={12} className="opacity-70" />
                    <span>{paper.conferenceLocation}</span>
                  </span>

                  {paper.doi && (
                    <span className="ml-auto text-[11px] font-mono text-text-mute hidden sm:inline-block">
                      DOI: {paper.doi}
                    </span>
                  )}
                </div>

                {/* Paper Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-text-main group-hover:text-terracotta transition-colors leading-snug">
                  {paper.title}
                </h3>

                {/* Publication Venue */}
                <p className="text-xs sm:text-sm font-mono text-text-sub font-medium leading-relaxed">
                  <span className="text-text-mute">Published in: </span>
                  {paper.publishedIn}
                  {paper.pages ? ` (pp. ${paper.pages})` : ''}
                </p>

                {/* Authors with Diya Chanda Highlighted */}
                <p className="text-xs sm:text-sm text-text-sub leading-relaxed">
                  <span className="font-semibold text-text-main font-mono text-xs uppercase tracking-wider">Authors: </span>
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

                {/* Abstract */}
                <div className="bg-surface/50 rounded-xl p-4 sm:p-5 border border-border-subtle/60">
                  <span className="block text-[11px] font-mono uppercase tracking-widest text-text-mute font-semibold mb-2">
                    Abstract &amp; Summary
                  </span>
                  <p className="text-text-sub text-sm sm:text-[15px] leading-relaxed">
                    {paper.abstract}
                  </p>
                </div>

                {/* Key Metrics Chips */}
                {paper.keyMetrics && paper.keyMetrics.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-xs font-mono text-text-mute font-medium mr-1">Key Results:</span>
                    {paper.keyMetrics.map((metric, mIdx) => (
                      <span
                        key={mIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface border border-border-subtle text-[11px] font-mono font-medium text-text-main"
                      >
                        <CheckCircle2 size={12} className="text-emerald-500" />
                        <span>{metric}</span>
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Links */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={paper.doiLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2.5 px-4 rounded-lg bg-surface hover:bg-card border border-border hover:border-terracotta/40 text-text-main hover:text-terracotta text-xs font-medium shadow-xs transition-colors"
                  >
                    <Sparkles size={14} className="text-terracotta" />
                    <span>{paper.publisher === 'Springer' ? 'Read Chapter via SpringerLink' : 'Read Publication via IEEE Xplore'}</span>
                    <ExternalLink size={13} />
                  </a>

                  {paper.bookLink && (
                    <a
                      href={paper.bookLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 py-2.5 px-4 rounded-lg bg-surface hover:bg-card border border-border hover:border-terracotta/40 text-text-sub hover:text-terracotta text-xs font-medium shadow-xs transition-colors"
                    >
                      <BookOpen size={14} className="text-terracotta" />
                      <span>View Springer Book Series</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Research;
