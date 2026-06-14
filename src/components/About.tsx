import { motion } from 'framer-motion'
import { personalInfo } from '../constants/data'
import { SectionHeader } from './SectionHeader'

const stats = [
  { value: '4+', label: 'Years in tech' },
  { value: '2', label: 'Live projects' },
  { value: 'AWS', label: 'Cloud deploy' },
  { value: 'UOC', label: 'CS degree' },
]

export function About() {
  return (
    <section id="about" aria-label="About me" style={{ backgroundColor: 'var(--surface)', padding: '7rem 0' }}>      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <SectionHeader number="01" title="About me" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {personalInfo.summary}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Currently working as Application Support & Software Technician at Cuiner while
              studying Computer Engineering at UOC. Based in Mallorca, Spain. Open to remote.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '0.5rem' }}>
              {[
                { label: 'GitHub ↗', href: personalInfo.github, external: true },
                { label: 'LinkedIn ↗', href: personalInfo.linkedin, external: true },
                { label: 'Email ↗', href: `mailto:${personalInfo.email}`, external: false },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--teal)', border: '2px solid var(--teal)', borderRadius: '6px', padding: '7px 16px', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--teal)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-on-accent)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--teal)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '1.75rem',
                borderTop: '4px solid var(--teal)',
                }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 700, color: 'var(--teal)', marginBottom: '0.25rem' }}>
                  {stat.value}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}