import { motion } from 'framer-motion'

interface SectionHeaderProps {
  number: string
  title: string
}

export function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ marginBottom: '4rem' }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 700,
          color: 'transparent',
          lineHeight: 1,
          letterSpacing: '-2px',
          WebkitTextStroke: '2px var(--teal)',
          userSelect: 'none',
        }}>
          {number}
        </span>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-1.5px',
          lineHeight: 1,
        }}>
          {title}
        </h2>
      </div>
      <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--red)', borderRadius: '2px', marginTop: '1.25rem' }} />
    </motion.div>
  )
}