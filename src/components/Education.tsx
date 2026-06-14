import { motion } from 'framer-motion'
import { education } from '../constants/data'
import { SectionHeader } from './SectionHeader'

export function Education() {
  return (
    <section id="education" aria-label="Education" style={{ padding: '7rem 0', backgroundColor: 'var(--bg)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <SectionHeader number="04" title="Where I have studied" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {education.map((entry, index) => (
            <motion.div
              key={entry.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1.5px solid var(--border)',
                borderRadius: '14px',
                padding: '1.75rem',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(17,141,160,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {entry.degree}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', color: 'var(--teal)', fontWeight: 600 }}>
                    {entry.school} — {entry.location}
                  </p>
                </div>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--teal)',
                  backgroundColor: 'var(--teal-light)', border: '1px solid var(--border)',
                  borderRadius: '6px', padding: '4px 12px', whiteSpace: 'nowrap', fontWeight: 600,
                }}>
                  {entry.period}
                </span>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', listStyle: 'none' }}>
                {entry.highlights.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '0.75rem', fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    <span style={{ color: 'var(--red)', flexShrink: 0, marginTop: '3px', fontSize: '0.7rem' }}>▶</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
