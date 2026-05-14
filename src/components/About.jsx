import { Github, Linkedin } from 'lucide-react';
import FadeUp from './FadeUp';

export default function About() {
  return (
    <section id="about" className="relative z-10 py-32 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto">
        <FadeUp>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">01. About</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
            A brief introduction.
          </h2>
        </FadeUp>

        <FadeUp delay={0.08}>
          <p className="text-[#888] text-lg leading-relaxed mb-5">
            I&apos;m a BSE candidate in Computer Science at the University of Pennsylvania, and I'm passionate about building reliable, scalable backend systems
            and full-stack applications.
          </p>
          <p className="text-[#888] text-lg leading-relaxed mb-10">
            From founding engineering roles at startups to ML research published
            in IEEE, I'm interested in the intersection of technical
            depth and real-world impact.
          </p>
        </FadeUp>

        <FadeUp delay={0.14}>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/j-chen005"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/10 text-[#555] hover:text-white hover:border-white/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={19} />
            </a>
            <a
              href="https://linkedin.com/in/justin-chen-bos/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/10 text-[#555] hover:text-white hover:border-white/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
