import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { personalInfo, roles } from '../constants/data'

function TypewriterText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[index]
    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
      return () => clearTimeout(t)
    }
    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000)
      return () => clearTimeout(t)
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
      return () => clearTimeout(t)
    }
    if (deleting && displayed.length === 0) {
      const t = setTimeout(() => {
        setDeleting(false)
        setIndex((prev) => (prev + 1) % texts.length)
      }, 50)
      return () => clearTimeout(t)
    }
  }, [displayed, deleting, index, texts])

  return (
    <span style={{ color: 'var(--teal)' }}>
      {displayed}
      <span style={{ color: 'var(--red)', fontWeight: 300 }}>|</span>
    </span>
  )
}

export function Hero() {
  return (
    <section id="hero" aria-label="Introduction" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'var(--hero-pt) 1.5rem 6rem',
      maxWidth: '1100px',
      margin: '0 auto',
      position: 'relative',
    }}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '1rem',
          color: 'var(--teal)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
          fontWeight: 500,
        }}
      >
        Hi, I am
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(3.5rem, 9vw, 7rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          lineHeight: 1,
          marginBottom: '1rem',
          letterSpacing: '-3px',
        }}
      >
        {personalInfo.name}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
          fontWeight: 500,
          color: 'var(--text-secondary)',
          marginBottom: '2.5rem',
          minHeight: '3.5rem',
        }}
      >
        <TypewriterText texts={roles} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.9rem',
          backgroundColor: '#162330',
          borderRadius: '12px',
          padding: '1.5rem 2rem',
          marginBottom: '2.5rem',
          maxWidth: '500px',
          lineHeight: 2,
          border: '1px solid rgba(255,255,255,0.07)',
          borderLeft: '4px solid var(--red)',
          overflowX: 'auto',
        }}
      >
        <span style={{ color: '#6A8A9F' }}>{'// engineer.ts'}</span>
        <br />
        <span style={{ color: '#7C9AB5' }}>const </span>
        <span style={{ color: '#79C0FF' }}>dev</span>
        <span style={{ color: '#aaa' }}> = {'{'}</span>
        <br />
        <span style={{ color: '#7C9AB5', paddingLeft: '1.5rem' }}>name</span>
        <span style={{ color: '#aaa' }}>:{'      '}</span>
        <span style={{ color: '#7EE787' }}>"Matias Tamagni"</span>
        <span style={{ color: '#aaa' }}>,</span>
        <br />
        <span style={{ color: '#7C9AB5', paddingLeft: '1.5rem' }}>focus</span>
        <span style={{ color: '#aaa' }}>:{'     '}</span>
        <span style={{ color: '#7EE787' }}>"TypeScript/Node.js · C#/.NET"</span>
        <span style={{ color: '#aaa' }}>,</span>
        <br />
        <span style={{ color: '#7C9AB5', paddingLeft: '1.5rem' }}>location</span>
        <span style={{ color: '#aaa' }}>:{'  '}</span>
        <span style={{ color: '#7EE787' }}>"Mallorca, Spain"</span>
        <span style={{ color: '#aaa' }}>,</span>
        <br />
        <span style={{ color: '#7C9AB5', paddingLeft: '1.5rem' }}>available</span>
        <span style={{ color: '#aaa' }}>: </span>
        <span style={{ color: 'var(--teal)', fontWeight: 600 }}>true</span>
        <span style={{ color: '#aaa' }}>,</span>
        <br />
        <span style={{ color: '#aaa' }}>{'}'}</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
      >
        <a href="#projects" style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize: '0.95rem',
          backgroundColor: 'var(--teal)',
          color: 'var(--text-on-accent)',
          padding: '13px 32px',
          borderRadius: '8px',
          textDecoration: 'none',
          transition: 'background-color 0.2s',
          letterSpacing: '0.01em',
        }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--teal-dark)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--teal)')}
        >
          View my work
        </a>
        <a href="#contact" style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize: '0.95rem',
          backgroundColor: 'transparent',
          color: 'var(--text-primary)',
          padding: '13px 32px',
          borderRadius: '8px',
          border: '2px solid var(--border)',
          textDecoration: 'none',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-primary)' }}
        >
          Get in touch
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            fontSize: '0.95rem',
            backgroundColor: 'transparent',
            color: 'var(--text-secondary)',
            padding: '13px 32px',
            borderRadius: '8px',
            border: '2px solid var(--border)',
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text-secondary)'; e.currentTarget.style.color = 'var(--text-primary)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
        >
          GitHub ↗
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:flex"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: '2px', height: '40px', backgroundColor: 'var(--teal)' }}
        />
      </motion.div>
    </section>
  )
}