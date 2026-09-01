import data from '../../data/sections/research.json';
import { BookOpen, ExternalLink, Sparkles } from 'lucide-react';

export const Research = () => {
  return (
    <section id="research" className="py-24 px-6 border-t border-border-subtle transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2">
            Academic Publications
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-6">
            {data.heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-4" />
          <p className="text-text-sub text-base sm:text-lg">
            Peer-reviewed research in explainable deep learning, computer vision, and agricultural intelligence.
          </p>
        </div>

        {/* Papers List */}
        <div className="space-y-8">
          {data.papers.map((paper) => (
            <div
              key={paper.id}
              className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-2xl p-6 sm:p-8 shadow-sm transition-all group"
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:items-start justify-between">
                
                {/* Paper Content */}
                <div className="space-y-4 flex-1">
                  
                  {/* Conference Badge & DOI Tag */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border-subtle text-[11px] font-mono font-medium text-terracotta">
                      <BookOpen size={13} />
                      <span>{paper.conference} · {paper.year}</span>
                    </span>
                    <span className="text-[11px] font-mono text-text-mute">
                      DOI: {paper.doi}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-text-main group-hover:text-terracotta transition-colors leading-snug">
                    {paper.title}
                  </h3>

                  {/* Authors with Diya Chanda Highlighted */}
                  <p className="text-xs sm:text-sm text-text-sub leading-relaxed">
                    <span className="font-semibold text-text-main">Authors: </span>
                    {paper.authors.split(',').map((author, i, arr) => {
                      const trimmed = author.trim();
                      const isDiya = trimmed.toLowerCase().includes('diya chanda');
                      return (
                        <span key={i}>
                          {isDiya ? (
                            <span className="font-bold text-terracotta underline decoration-terracotta/40 underline-offset-2">
                              {trimmed}
                            </span>
                          ) : (
                            <span>{trimmed}</span>
                          )}
                          {i < arr.length - 1 ? ', ' : ''}
                        </span>
                      );
                    })}
                  </p>

                  {/* Abstract */}
                  <p className="text-text-sub text-sm sm:text-base leading-relaxed">
                    {paper.description}
                  </p>

                  {/* Action Link */}
                  <div className="pt-2">
                    <a
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 py-2.5 px-4 rounded-lg bg-surface hover:bg-card border border-border hover:border-terracotta/40 text-text-main hover:text-terracotta text-xs font-medium shadow-xs transition-colors"
                    >
                      <Sparkles size={14} className="text-terracotta" />
                      <span>Read Publication via IEEE Xplore</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Research;
