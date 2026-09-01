import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import data from "../../data/sections/certificates.json";
import { Award, FileText, Trophy, ShieldCheck, Cloud, Briefcase, Eye, X } from "lucide-react";

// Import certificate images
import IEEECert from "../../assets/certificates/IEEE_certificate.png";
import SIHCert from "../../assets/certificates/SIH_certificate.png";
import MeritCert from "../../assets/certificates/Merit_certificate.png";
import SttpCert from "../../assets/certificates/STTP_certificate.png";
import AWSCert from "../../assets/certificates/AWS_certificate.png";
import InternshipCert from "../../assets/certificates/Internship_certificate.png";
import XetaCert from "../../assets/certificates/Xeta_Labs_certificate.png";

const certificateImages = {
  1: IEEECert,
  2: SIHCert,
  3: MeritCert,
  4: SttpCert,
  5: AWSCert,
  6: InternshipCert,
  7: XetaCert,
};

const certIconMap = {
  1: <FileText size={17} className="text-terracotta" />,
  2: <Trophy size={17} className="text-terracotta" />,
  3: <Award size={17} className="text-terracotta" />,
  4: <Award size={17} className="text-terracotta" />,
  5: <Cloud size={17} className="text-terracotta" />,
  6: <ShieldCheck size={17} className="text-terracotta" />,
  7: <Briefcase size={17} className="text-terracotta" />,
};

const cleanTitle = (raw) => {
  return raw.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '').trim();
};

const cleanDesc = (raw) => {
  if (!raw) return "";
  return raw.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '').trim();
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  // Focus trapping and scroll locking
  useEffect(() => {
    if (selectedCert) {
      previousFocusRef.current = document.activeElement;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setSelectedCert(null);
          return;
        }

        // Trap focus inside modal
        if (e.key === "Tab" && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll(
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

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [selectedCert]);

  return (
    <section id="certificates" className="py-24 px-6 border-t border-border-subtle bg-surface/30 transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2">
            Credentials &amp; Honors
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-4">
            {data.heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-4" />
          <p className="text-text-sub text-base sm:text-lg">
            Verified academic presentations, hackathon awards, cloud certifications, and industry engineering credentials.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {data.certificates.map((cert) => {
            const title = cleanTitle(cert.title);
            const description = cleanDesc(cert.description);

            return (
              <div
                key={cert.id}
                className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-all group"
              >
                <div>
                  {/* Header Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3 pb-3 border-b border-border-subtle">
                    <div className="flex items-center gap-2 text-xs font-mono text-terracotta font-medium">
                      {certIconMap[cert.id] || <Award size={17} className="text-terracotta" />}
                      <span>Issued {cert.year}</span>
                    </div>
                    <span className="text-[11px] font-mono text-text-mute px-2 py-0.5 bg-surface rounded border border-border-subtle">
                      0{cert.id}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-text-main mb-2 group-hover:text-terracotta transition-colors">
                    {title}
                  </h3>

                  {cert.article && (
                    <p className="text-text-main font-serif italic text-sm mb-2 text-terracotta">
                      "{cert.article}"
                    </p>
                  )}

                  {cert.program && (
                    <p className="text-text-sub font-medium text-xs mb-2">
                      {cert.program}
                    </p>
                  )}

                  {cert.event && (
                    <p className="text-text-sub font-medium text-xs mb-2">
                      {cert.event}
                    </p>
                  )}

                  <p className="text-xs font-medium text-text-mute mb-3">
                    {cert.issuer} {cert.position ? `• ${cert.position}` : ""}
                  </p>

                  {description && (
                    <p className="text-text-sub text-sm leading-relaxed mb-4">
                      {description}
                    </p>
                  )}

                  {cert.skills && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono bg-surface border border-border-subtle text-text-sub px-2.5 py-0.5 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* View Document Button */}
                {certificateImages[cert.id] && (
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full mt-3 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-surface hover:bg-card border border-border hover:border-terracotta/40 text-text-main hover:text-terracotta text-xs font-medium shadow-xs transition-colors cursor-pointer"
                  >
                    <Eye size={14} />
                    <span>View Document Scan</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Accessible Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
            className="fixed inset-0 bg-black/80 backdrop-blur-xs z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[88vh] bg-card border border-border rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-5 flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-subtle">
                <div>
                  <h3 id="cert-modal-title" className="font-serif text-lg font-bold text-text-main">
                    {cleanTitle(selectedCert.title)}
                  </h3>
                  <p className="text-xs font-mono text-text-mute">
                    Issued by {selectedCert.issuer} · {selectedCert.year}
                  </p>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  autoFocus
                  aria-label="Close document modal"
                  className="p-1.5 rounded-lg border border-border hover:border-terracotta text-text-sub hover:text-terracotta bg-surface transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Certificate Image Scan */}
              <div className="overflow-y-auto rounded-lg bg-surface/50 border border-border-subtle p-2 flex items-center justify-center">
                <img
                  src={certificateImages[selectedCert.id]}
                  alt={cleanTitle(selectedCert.title)}
                  className="w-full h-auto max-h-[68vh] object-contain rounded"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
