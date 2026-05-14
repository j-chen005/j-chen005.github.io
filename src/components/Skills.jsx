import FadeUp from './FadeUp';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">04. Skills</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-16 leading-tight">
            What I work with.
          </h2>
        </FadeUp>

        <div className="flex flex-col gap-10">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                type: 'spring',
                stiffness: 130,
                damping: 13,
                mass: 0.8,
                delay: gi * 0.1,
              }}
            >
              <p className="text-[#555] text-xs tracking-[0.25em] uppercase mb-5">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                      delay: gi * 0.1 + si * 0.04,
                    }}
                    className="px-4 py-2 border border-white/[0.1] text-sm text-[#888] hover:text-white hover:border-accent/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
