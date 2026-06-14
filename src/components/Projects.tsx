import { motion } from 'framer-motion'
import { projects } from '../constants/data'
import { SectionHeader } from './SectionHeader'

export function Projects() {
  return (
    <section id="projects" aria-label="Projects" style={{ padding: '7rem 0', backgroundColor: 'var(--bg)' }}>      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <SectionHeader number="04" title="What I have built" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1.5px solid var(--border)',
                borderRadius: '16px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
              }}
              whileHover={{ y: -6, borderColor: 'var(--teal)', boxShadow: '0 8px 30px rgba(17,141,160,0.1)' } as never}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                  {project.name}
                </h3>
                {project.featured && (
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700,
                    backgroundColor: 'var(--red-light)', color: 'var(--red)',
                    border: '1px solid var(--red)', borderRadius: '4px',
                    padding: '3px 10px', whiteSpace: 'nowrap', flexShrink: 0,
                  }}>
                    featured
                  </span>
                )}
              </div>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.75, flex: 1 }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.stack.map((tech) => (
                  <span key={tech} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600,
                    color: 'var(--teal)', backgroundColor: 'var(--teal-light)',
                    border: '1px solid var(--border)', borderRadius: '4px', padding: '3px 10px',
                  }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '0.25rem' }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  GitHub ↗
                </a>
                <a href={project.url} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--teal)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal-dark)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--teal)')}
                >
                  Live demo ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}