import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = ['about', 'experience', 'projects', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollPos = window.scrollY + 120;
      let current = '';
      for (const id of LINKS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) current = id;
      }
      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-xl border-b border-white/[0.06]'
          : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-serif text-xl text-white hover:text-accent transition-colors duration-300"
        >
          JC
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`relative text-xs tracking-[0.2em] uppercase transition-colors duration-300 group ${
                active === link ? 'text-white' : 'text-[#666] hover:text-white'
              }`}
            >
              {link}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                  active === link ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-bg/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
          >
            <div className="flex flex-col px-6 py-5 gap-5">
              {LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left text-xs tracking-[0.2em] uppercase text-[#666] hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
