import { motion } from 'framer-motion';
import FadeUp from './FadeUp';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-28 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">02. Experience</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-16 leading-tight">
            Where I&apos;ve worked.
          </h2>
        </FadeUp>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-white/[0.07] hidden sm:block" />

          <div className="flex flex-col gap-12">
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  type: 'spring',
                  stiffness: 130,
                  damping: 13,
                  mass: 0.8,
                  delay: i * 0.07,
                }}
                className="sm:pl-10 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-accent hidden sm:block -translate-x-[3px] ring-4 ring-bg" />

                <div className="border border-white/[0.07] bg-surface/40 p-6 sm:p-7 hover:border-white/[0.14] transition-colors duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-white font-medium text-base">
                        {item.company}
                        {item.companyNote && (
                          <span className="text-[#555] font-normal text-sm ml-2">
                            — {item.companyNote}
                          </span>
                        )}
                      </h3>
                      <p className="text-[#777] text-sm mt-0.5">{item.role}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-accent text-xs tracking-wider">{item.period}</p>
                      {item.location && (
                        <p className="text-[#555] text-xs mt-0.5">{item.location}</p>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="text-[#777] text-sm leading-relaxed flex gap-3">
                        <span className="text-accent mt-1 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
