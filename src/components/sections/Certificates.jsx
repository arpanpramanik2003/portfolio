import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
  1: <FileText size={18} className="text-terracotta" />,
  2: <Trophy size={18} className="text-terracotta" />,
  3: <Award size={18} className="text-terracotta" />,
  4: <Award size={18} className="text-terracotta" />,
  5: <Cloud size={18} className="text-terracotta" />,
  6: <ShieldCheck size={18} className="text-terracotta" />,
  7: <Briefcase size={18} className="text-terracotta" />,
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

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCert]);

  return (
    <section id="certificates" className="py-24 px-6 border-t border-border-subtle bg-surface/30 transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2">
            Credentials &amp; Honors
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-6">
            {data.heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-4" />
          <p className="text-text-sub text-base sm:text-lg">
            Verified academic presentations, hackathon awards, certifications, and industry engineering internships.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {data.certificates.map((cert) => {
            const title = cleanTitle(cert.title);
            const description = cleanDesc(cert.description);

            return (
              <div
                key={cert.id}
                className="bg-card border border-border-subtle hover:border-terracotta/30 rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-all"
              >
                <div>
                  {/* Header Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-terracotta font-medium">
                      {certIconMap[cert.id] || <Award size={18} className="text-terracotta" />}
                      <span>Issued {cert.year}</span>
                    </div>
                    <span className="text-[11px] font-mono text-text-mute px-2 py-0.5 bg-surface rounded border border-border-subtle">
                      #{cert.id}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-text-main mb-2">
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
                          className="text-[11px] font-mono bg-surface border border-border-subtle text-text-sub px-2 py-0.5 rounded"
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
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-surface hover:bg-card border border-border hover:border-terracotta/40 text-text-main hover:text-terracotta text-xs font-medium shadow-xs transition-colors"
                  >
                    <Eye size={15} />
                    <span>View Document Scan</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-modal="true"
            aria-label={cleanTitle(selectedCert.title)}
            className="fixed inset-0 bg-black/75 backdrop-blur-xs z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] bg-card border border-border rounded-2xl overflow-hidden shadow-2xl p-2 sm:p-3"
            >
              <img
                src={certificateImages[selectedCert.id]}
                alt={cleanTitle(selectedCert.title)}
                className="w-full h-auto max-h-[75vh] object-contain rounded-xl"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                aria-label="Close document preview"
                className="absolute top-4 right-4 bg-card/90 hover:bg-card border border-border text-text-main hover:text-terracotta rounded-full w-9 h-9 flex items-center justify-center transition-colors shadow-md"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
