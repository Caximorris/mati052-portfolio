import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'

const skillGroups = [
  { category: 'Languages', skills: ['TypeScript', 'JavaScript', 'SQL', 'Visual Basic'] },
  { category: 'Backend', skills: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'Authentication', 'API Integration'] },
  { category: 'Frontend', skills: ['React', 'HTML', 'CSS', 'Responsive Design'] },
  { category: 'Databases', skills: ['PostgreSQL', 'MongoDB'] },
  { category: 'Cloud & Tools', skills: ['Docker', 'AWS', 'Git', 'GitHub', 'Render', 'AWS Amplify'] },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const item = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
}

export function Skills({ dark }: { dark: boolean }) {
  return (
    <section id="skills" style={{ padding: '7rem 0', backgroundColor: 'var(--bg)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <SectionHeader number="02" title="What I work with" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
            >
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--red)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 600 }}>
                {group.category}
              </p>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      backgroundColor: 'var(--surface)',
                      border: '1.5px solid var(--border)',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      cursor: 'default',
                      transition: 'all 0.2s',
                    }}
                    whileHover={{ borderColor: 'var(--teal)', color: 'var(--teal)', backgroundColor: 'var(--teal-light)' } as never}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}