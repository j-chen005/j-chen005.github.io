import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText } from 'lucide-react';
import FadeUp from './FadeUp';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-28 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">03. Projects</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-16 leading-tight">
            Things I&apos;ve built.
          </h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                type: 'spring',
                stiffness: 130,
                damping: 13,
                mass: 0.8,
                delay: i * 0.08,
              }}
              className="group relative border border-white/[0.07] bg-surface/30 p-7 flex flex-col hover:border-accent/40 transition-all duration-400"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {project.isPaper ? (
                    <FileText size={18} className="text-accent" />
                  ) : (
                    <div className="w-1 h-6 bg-accent" />
                  )}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#555] hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={17} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#555] hover:text-white transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-white font-medium text-lg mb-3 group-hover:text-accent transition-colors duration-300">
                {project.name}
              </h3>

              <p className="text-[#666] text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] tracking-wider uppercase text-[#555] border border-white/[0.08] px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/j-chen005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#555] hover:text-white border-b border-transparent hover:border-white/30 transition-all duration-300 pb-0.5"
            >
              View more on GitHub
              <ExternalLink size={13} />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
