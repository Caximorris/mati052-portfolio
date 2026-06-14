import { personalInfo } from '../constants/data'

export function Footer() {
  return (
    <footer style={{ borderTop: `1px solid var(--border)`, padding: '2rem', textAlign: 'center', backgroundColor: 'var(--bg)' }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
        Designed and built by{' '}
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
          style={{ color: 'var(--teal)', textDecoration: 'none' }}
        >
          {personalInfo.name}
        </a>
        {' '}— {new Date().getFullYear()}
      </p>
    </footer>
  )
}