import { personalInfo } from '../constants/data'

export function Footer({ dark }: { dark: boolean }) {
  return (
    <footer style={{ borderTop: `1px solid var(--border)`, padding: '2rem', textAlign: 'center', backgroundColor: 'var(--bg)' }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
        Designed and built by{' '}
        <a href="https://github.com/Caximorris" target="_blank" rel="noopener noreferrer"
          style={{ color: 'var(--teal)', textDecoration: 'none' }}
        >
          Matias Tamagni
        </a>
        {' '}— {new Date().getFullYear()}
      </p>
    </footer>
  )
}