import { motion } from "framer-motion";
import profile from "../../assets/profile.jpeg";

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex items-center justify-center"
    >
      {/* Outer Editorial Ring */}
      <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-terracotta/40 via-border to-terracotta/20 shadow-md">
        {/* Inner Border */}
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-surface bg-surface shadow-inner">
          <img
            src={profile}
            alt="Diya Chanda — AI Researcher & Full-Stack Developer"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      {/* Subtle Warm Accent Dot */}
      <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 w-4 h-4 rounded-full bg-terracotta border-2 border-card shadow-sm" />
    </motion.div>
  );
}
