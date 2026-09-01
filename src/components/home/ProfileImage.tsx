import Image from 'next/image';

export default function ProfileImage() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Editorial Ring */}
      <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-terracotta/40 via-border to-terracotta/20 shadow-md">
        {/* Inner Border */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-surface bg-surface shadow-inner">
          <Image
            src="/images/profile.webp"
            alt="Diya Chanda — AI Researcher & Full-Stack Developer"
            width={176}
            height={176}
            priority
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      {/* Subtle Warm Accent Dot */}
      <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 w-4 h-4 rounded-full bg-terracotta border-2 border-card shadow-sm" />
    </div>
  );
}
