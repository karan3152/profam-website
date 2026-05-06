'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '16px 0',
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(5, 10, 20, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '40px', height: '40px',
            background: 'linear-gradient(135deg, #00c6ff, #0072ff)',
            borderRadius: '12px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '18px', fontWeight: '800', color: 'white',
            fontFamily: 'var(--font-display)',
            boxShadow: '0 6px 20px rgba(0, 114, 255, 0.4)'
          }}>P</div>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '26px', fontWeight: '700',
            background: 'linear-gradient(135deg, #ffffff, #94a3b8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px'
          }}>Profam</span>
        </div>

        {/* Desktop Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="hidden-mobile">
          {['Services', 'How It Works', 'Our Promise', 'Testimonials', 'Download'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="nav-link"
            >{link}</a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="#download" className="btn-primary" style={{ padding: '10px 24px', fontSize: '14px', textDecoration: 'none', display: 'inline-block' }}>
            Download App
          </a>
          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '4px', display: 'none' }}
            className="mobile-menu-btn"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(5, 10, 20, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '24px 32px',
          display: 'flex', flexDirection: 'column', gap: '20px'
        }}>
          {['Services', 'How It Works', 'Our Promise', 'Testimonials', 'Download'].map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setMenuOpen(false)}
              style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', textDecoration: 'none', fontWeight: '500' }}>
              {link}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
