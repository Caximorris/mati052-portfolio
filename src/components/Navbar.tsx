import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../constants/data'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar({ dark, onToggleDark }: { dark: boolean; onToggleDark: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['hero', ...navLinks.map(l => l.href.slice(1))]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-64px 0px -40% 0px' }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: scrolled ? 'var(--nav-scrolled-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Main row — logo + desktop links + controls */}
      <div style={{
        maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px',
      }}>
        <a href="#hero" style={{ fontFamily: 'var(--font-mono)', color: 'var(--teal)', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', letterSpacing: '-0.5px', flexShrink: 0 }}>
          MT<span style={{ color: 'var(--red)' }}>.</span>
        </a>

        {/* Desktop links */}
        <ul role="list" className="hidden md:flex" style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center', margin: '0 2rem' }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <li key={link.href} style={{ position: 'relative', paddingBottom: '4px' }}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--teal)' : 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal)')}
                  onMouseLeave={e => (e.currentTarget.style.color = isActive ? 'var(--teal)' : 'var(--text-secondary)')}
                >
                  {link.label}
                </a>
                {isActive && (
                  <span style={{
                    position: 'absolute', bottom: 0, left: '50%',
                    transform: 'translateX(-50%)',
                    width: '4px', height: '4px', borderRadius: '50%',
                    backgroundColor: 'var(--teal)',
                  }} />
                )}
              </li>
            )
          })}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
            style={{
              background: 'none', border: '1.5px solid var(--border)',
              borderRadius: '8px', cursor: 'pointer', padding: '6px 10px',
              fontSize: '1rem', lineHeight: 1, transition: 'border-color 0.2s',
              color: 'var(--text-primary)',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--teal)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            {dark ? '☀️' : '🌙'}
          </button>

          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
            className="hidden md:block"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--teal)', border: '1.5px solid var(--teal)', borderRadius: '8px', padding: '6px 16px', textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--text-on-accent)' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--teal)' }}
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      {/* Mobile links strip — scrollable, hidden on desktop */}
      <div
        className="nav-mobile-strip md:hidden"
        style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '1.75rem',
          padding: '0.5rem 1.5rem 0.625rem',
          borderTop: '1px solid var(--border)',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        } as React.CSSProperties}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.slice(1)
          return (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'var(--teal)' : 'var(--text-secondary)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                paddingBottom: '2px',
                borderBottom: isActive ? '2px solid var(--teal)' : '2px solid transparent',
                transition: 'color 0.2s, border-color 0.2s',
              }}
            >
              {link.label}
            </a>
          )
        })}
      </div>
    </motion.nav>
  )
}
