import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import HexGrid from './HexGrid';
import { useTypewriter } from '../hooks/useTypewriter';

const ROLES = [
  'Software Engineer',
  'Forward Deployed Engineer',
  'Full-Stack Developer',
  'ML Researcher',
  'Co-Founder',
];

export default function Hero() {
  const role = useTypewriter(ROLES, 75, 40, 1600);

  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HexGrid />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 py-28">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          {/* ── Left: Text ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-accent text-xs tracking-[0.35em] uppercase mb-5 font-light"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[clamp(3rem,8vw,6.5rem)] text-white leading-none tracking-tight mb-6"
            >
              Justin Chen.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="h-9 flex items-center gap-1 mb-10"
            >
              <span className="text-lg md:text-xl text-[#777]">{role}</span>
              <span
                className="text-accent text-xl"
                style={{ animation: 'blink 1s step-end infinite' }}
              >
                |
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 border border-accent text-accent text-xs tracking-[0.2em] uppercase hover:bg-accent hover:text-bg transition-all duration-300 font-medium"
              >
                View Work
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-white/15 text-white/50 text-xs tracking-[0.2em] uppercase hover:border-white/50 hover:text-white/90 transition-all duration-300"
              >
                Resume ↓
              </a>
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block"
          >
            <div className="relative w-64 lg:w-80">
              <div className="overflow-hidden">
                <img
                  src="/headshot.png"
                  alt="Justin Chen"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Offset accent border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/25 pointer-events-none -z-10" />
            </div>
          </motion.div>

        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/25 hover:text-white/60 transition-colors z-10 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={26} />
      </motion.button>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
