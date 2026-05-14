import { Mail, Github, Linkedin } from 'lucide-react';
import FadeUp from './FadeUp';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-32 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <FadeUp>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">05. Contact</p>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight">
            Get in touch.
          </h2>
        </FadeUp>

        <FadeUp delay={0.08}>
          <p className="text-[#666] text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            I&apos;m always open to interesting conversations, collaborations, or
            just a good chat. Drop me a message.
          </p>
        </FadeUp>

        <FadeUp delay={0.14}>
          <a
            href="mailto:justic@seas.upenn.edu"
            className="inline-block px-10 py-4 border border-accent text-accent text-sm tracking-[0.2em] uppercase hover:bg-accent hover:text-bg transition-all duration-300 mb-12"
          >
            Say Hello
          </a>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex items-center justify-center gap-6">
            <a
              href="mailto:justic@seas.upenn.edu"
              className="flex items-center gap-2 text-[#555] hover:text-white text-sm transition-colors duration-300"
            >
              <Mail size={16} />
              <span>justic@seas.upenn.edu</span>
            </a>

            <span className="text-white/10">|</span>

            <a
              href="https://github.com/j-chen005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={19} />
            </a>

            <a
              href="https://linkedin.com/in/justin-chen-bos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-white transition-colors duration-300"
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
