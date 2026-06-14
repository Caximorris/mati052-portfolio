import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '../constants/data'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar({ dark, onToggleDark }: { dark: boolean; onToggleDark: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const bg = dark
    ? scrolled ? 'rgba(15,25,35,0.95)' : 'transparent'
    : scrolled ? 'rgba(255,255,255,0.95)' : 'transparent'

  const borderColor = dark ? '#1E3A47' : '#E5E7EB'
  const logoColor = 'var(--teal)'
  const linkColor = dark ? '#94A3B8' : 'var(--text-secondary)'
  const linkHover = 'var(--teal)'
  const mobileBg = dark ? '#0F1923' : '#ffffff'
  const mobileLink = dark ? '#E2E8F0' : 'var(--text-primary)'

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          backgroundColor: bg,
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? `1px solid ${borderColor}` : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{
          maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px',
        }}>
          <a href="#hero" style={{ fontFamily: 'var(--font-mono)', color: logoColor, fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', letterSpacing: '-0.5px', flexShrink: 0 }}>
            MT<span style={{ color: 'var(--red)' }}>.</span>
          </a>

          {/* Desktop links */}
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center', margin: '0 2rem' }}
            className="hidden md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 500, color: linkColor, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
                  onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Dark mode toggle */}
            <button
              onClick={onToggleDark}
              aria-label="Toggle dark mode"
              style={{
                background: 'none', border: `1.5px solid ${borderColor || 'var(--border)'}`,
                borderRadius: '8px', cursor: 'pointer', padding: '6px 10px',
                fontSize: '1rem', lineHeight: 1, transition: 'border-color 0.2s',
                color: dark ? '#E2E8F0' : 'var(--text-secondary)',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--teal)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = borderColor || 'var(--border)')}
            >
              {dark ? '☀️' : '🌙'}
            </button>

            {/* LinkedIn — hidden on small screens */}
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              className="hidden md:block"
              style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--teal)', border: '1.5px solid var(--teal)', borderRadius: '8px', padding: '6px 16px', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--teal)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--teal)' }}
            >
              LinkedIn ↗
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}
            >
              <span style={{ width: '22px', height: '2px', backgroundColor: dark ? '#E2E8F0' : 'var(--text-primary)', display: 'block', transition: 'all 0.25s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
              <span style={{ width: '22px', height: '2px', backgroundColor: dark ? '#E2E8F0' : 'var(--text-primary)', display: 'block', transition: 'all 0.25s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ width: '22px', height: '2px', backgroundColor: dark ? '#E2E8F0' : 'var(--text-primary)', display: 'block', transition: 'all 0.25s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', top: '64px', left: 0, right: 0, bottom: 0,
              backgroundColor: mobileBg, zIndex: 40,
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              alignItems: 'center', gap: '2rem',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: mobileLink, textDecoration: 'none', letterSpacing: '-1px' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal)')}
                onMouseLeave={e => (e.currentTarget.style.color = mobileLink)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 600, color: 'var(--teal)', border: '2px solid var(--teal)', borderRadius: '8px', padding: '10px 24px', textDecoration: 'none', marginTop: '1rem' }}
            >
              LinkedIn ↗
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}