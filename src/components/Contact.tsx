import { motion } from 'framer-motion'
import { personalInfo } from '../constants/data'
import { SectionHeader } from './SectionHeader'

export function Contact() {
  return (
  <section id="contact" aria-label="Contact" style={{ padding: '7rem 0', backgroundColor: 'var(--surface)' }}>      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <SectionHeader number="06" title="Get in touch" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ maxWidth: '580px' }}
        >
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            I am currently open to new opportunities. Whether you have a project in mind or just want to say hi, my inbox is always open.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href={`mailto:${personalInfo.email}`}
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', backgroundColor: 'var(--teal)', color: 'var(--text-on-accent)', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', transition: 'background-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--teal-dark)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--teal)')}
            >
              Send an email
            </a>
            
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', backgroundColor: 'transparent', color: 'var(--text-primary)', padding: '14px 32px', borderRadius: '8px', border: '2px solid var(--border)', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-primary)' }}
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}