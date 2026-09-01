'use client';

import { useState, useEffect, useRef, useMemo, ReactNode } from 'react';
import Image from 'next/image';
import {
  Award,
  FileText,
  Trophy,
  Cloud,
  Briefcase,
  Eye,
  X,
  Calendar,
  Building2,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface CertificateItem {
  id: number;
  title: string;
  category: string;
  issuer: string;
  year: string;
  article?: string;
  program?: string;
  event?: string;
  position?: string;
  description: string;
  skills: string[];
}

interface CertificatesClientProps {
  heading: string;
  eyebrow?: string;
  description?: string;
  certificates: CertificateItem[];
}

const certificateImages: Record<number, string> = {
  1: '/images/certificates/IEEE_certificate.webp',
  2: '/images/certificates/SIH_certificate.webp',
  3: '/images/certificates/Merit_certificate.webp',
  4: '/images/certificates/STTP_certificate.webp',
  5: '/images/certificates/AWS_certificate.webp',
  6: '/images/certificates/Internship_certificate.webp',
  7: '/images/certificates/Xeta_Labs_certificate.webp',
};

const certCategoryIconMap: Record<string, ReactNode> = {
  'Research & Presentation': <FileText size={16} className="text-terracotta" />,
  'Hackathons & Competitions': <Trophy size={16} className="text-terracotta" />,
  'Academic Honors': <Award size={16} className="text-terracotta" />,
  'Advanced Training': <Award size={16} className="text-terracotta" />,
  'Cloud & Infrastructure': <Cloud size={16} className="text-terracotta" />,
  'Industry Internships': <Briefcase size={16} className="text-terracotta" />,
};

type FilterCategory = 'all' | 'research-honors' | 'internships' | 'training';

export const CertificatesClient = ({
  heading,
  eyebrow,
  description,
  certificates,
}: CertificatesClientProps) => {
  const [activeTab, setActiveTab] = useState<FilterCategory>('all');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [showAllCerts, setShowAllCerts] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const allFilteredCertificates = useMemo(() => {
    if (activeTab === 'research-honors') {
      return certificates.filter(
        (c) =>
          c.category === 'Research & Presentation' ||
          c.category === 'Hackathons & Competitions' ||
          c.category === 'Academic Honors'
      );
    }
    if (activeTab === 'internships') {
      return certificates.filter((c) => c.category === 'Industry Internships');
    }
    if (activeTab === 'training') {
      return certificates.filter(
        (c) =>
          c.category === 'Cloud & Infrastructure' ||
          c.category === 'Advanced Training'
      );
    }
    return certificates;
  }, [activeTab, certificates]);

  const displayedCertificates = useMemo(() => {
    if (activeTab === 'all' && !showAllCerts) {
      return allFilteredCertificates.slice(0, 4);
    }
    return allFilteredCertificates;
  }, [activeTab, showAllCerts, allFilteredCertificates]);

  const tabs = [
    { id: 'all' as FilterCategory, label: 'All Credentials', count: certificates.length },
    {
      id: 'research-honors' as FilterCategory,
      label: 'Research & Honors',
      count: certificates.filter(
        (c) =>
          c.category === 'Research & Presentation' ||
          c.category === 'Hackathons & Competitions' ||
          c.category === 'Academic Honors'
      ).length,
    },
    {
      id: 'internships' as FilterCategory,
      label: 'Industry Internships',
      count: certificates.filter((c) => c.category === 'Industry Internships').length,
    },
    {
      id: 'training' as FilterCategory,
      label: 'Cloud & Training',
      count: certificates.filter(
        (c) =>
          c.category === 'Cloud & Infrastructure' ||
          c.category === 'Advanced Training'
      ).length,
    },
  ];

  useEffect(() => {
    if (selectedCert) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedCert(null);
          return;
        }

        if (e.key === 'Tab' && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [selectedCert]);

  return (
    <section
      id="certificates"
      className="py-20 sm:py-24 px-4 sm:px-6 border-t border-border-subtle bg-surface/30 transition-colors w-full overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2 flex items-center justify-center gap-1.5">
            <Sparkles size={14} />
            <span>{eyebrow || 'Credentials & Honors'}</span>
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-4">
            {heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-4" />
          <p className="text-text-sub text-sm sm:text-base md:text-lg leading-relaxed px-2">
            {description ||
              'Verified academic presentations, hackathon awards, cloud certifications, and industry engineering credentials.'}
          </p>
        </div>

        {/* Mobile Horizontal Scrollable Filter Tabs */}
        <div className="w-full flex justify-center mb-10 sm:mb-12">
          <div className="w-full max-w-full overflow-x-auto no-scrollbar py-1">
            <div className="inline-flex sm:flex sm:flex-wrap items-center justify-start sm:justify-center gap-1.5 p-1 rounded-xl bg-surface border border-border-subtle shadow-xs min-w-max mx-auto">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      if (tab.id !== 'all') setShowAllCerts(true);
                    }}
                    className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors duration-200 flex items-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap focus:outline-none select-none border ${
                      isActive
                        ? 'bg-card text-terracotta font-bold shadow-xs border-border-subtle'
                        : 'border-transparent text-text-mute hover:text-text-main hover:bg-card/50'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] ${
                        isActive
                          ? 'bg-terracotta/15 text-terracotta'
                          : 'bg-surface/80 text-text-mute'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-8">
          {displayedCertificates.map((cert) => {
            return (
              <article
                key={cert.id}
                className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-2xl p-5 sm:p-7 shadow-sm flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  
                  {/* Meta Header */}
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b border-border-subtle/70">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 sm:p-2 rounded-lg bg-surface border border-border-subtle">
                        {certCategoryIconMap[cert.category] || (
                          <Award size={15} className="text-terracotta" />
                        )}
                      </span>
                      <span className="text-[11px] sm:text-xs font-mono text-terracotta font-semibold">
                        {cert.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-text-mute">
                        <Calendar size={12} className="opacity-70" />
                        <span>{cert.year}</span>
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono text-text-mute px-2 py-0.5 bg-surface rounded border border-border-subtle">
                        0{cert.id}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-text-main mb-1.5 group-hover:text-terracotta transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  {/* Context Subtitle */}
                  {cert.article && (
                    <p className="text-terracotta font-serif italic text-xs sm:text-sm mb-2 leading-relaxed">
                      "{cert.article}"
                    </p>
                  )}
                  {cert.event && (
                    <p className="text-text-sub font-medium text-xs mb-2">
                      Event: {cert.event}
                    </p>
                  )}
                  {cert.program && (
                    <p className="text-text-sub font-medium text-xs mb-2">
                      Program: {cert.program}
                    </p>
                  )}

                  {/* Issuer details */}
                  <div className="flex items-center gap-1.5 text-xs text-text-mute mb-3 font-medium">
                    <Building2 size={13} className="text-terracotta flex-shrink-0" />
                    <span className="truncate">
                      {cert.issuer}
                      {cert.position ? ` · ${cert.position}` : ''}
                    </span>
                  </div>

                  {/* Constructive Description */}
                  <p className="text-text-sub text-xs sm:text-sm leading-relaxed mb-4 text-justify">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-5">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] sm:text-[11px] font-mono bg-surface border border-border-subtle text-text-sub px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* View Scan Button */}
                {certificateImages[cert.id] && (
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-surface hover:bg-card border border-border hover:border-terracotta/40 text-text-main hover:text-terracotta text-xs font-medium shadow-xs transition-colors cursor-pointer"
                  >
                    <Eye size={14} className="text-terracotta" />
                    <span>View Verified Document Scan</span>
                  </button>
                )}
              </article>
            );
          })}
        </div>

        {/* See More Certificates Toggle */}
        {activeTab === 'all' && allFilteredCertificates.length > 4 && (
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setShowAllCerts(!showAllCerts)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface hover:bg-card border border-border hover:border-terracotta/50 text-text-main hover:text-terracotta text-xs sm:text-sm font-mono font-medium shadow-xs transition-all duration-200 cursor-pointer"
            >
              <span>
                {showAllCerts
                  ? 'Collapse Credentials'
                  : `See All Credentials (${allFilteredCertificates.length - 4} more)`}
              </span>
              {showAllCerts ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}

      </div>

      {/* Accessible Lightbox Modal */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          className="fixed inset-0 bg-black/80 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[92vh] bg-card border border-border rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-subtle">
              <div className="min-w-0 pr-3">
                <h3 id="cert-modal-title" className="font-serif text-base sm:text-xl font-bold text-text-main truncate">
                  {selectedCert.title}
                </h3>
                <p className="text-[11px] sm:text-xs font-mono text-text-mute mt-0.5 truncate">
                  Issued by {selectedCert.issuer} · {selectedCert.year}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                autoFocus
                aria-label="Close document modal"
                className="p-1.5 rounded-lg border border-border hover:border-terracotta text-text-sub hover:text-terracotta bg-surface transition-colors cursor-pointer flex-shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            {/* Certificate Image Scan via next/image */}
            <div className="overflow-y-auto rounded-lg bg-surface/50 border border-border-subtle p-2 flex items-center justify-center">
              <div className="relative w-full h-[55vh] sm:h-[65vh]">
                <Image
                  src={certificateImages[selectedCert.id]}
                  alt={selectedCert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain rounded"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesClient;
