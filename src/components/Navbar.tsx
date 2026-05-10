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
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.97)' : '#FFFFFF',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: '1px solid #F3F4F6',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/logo.png" alt="ProFom Logo" style={{ height: '40px', borderRadius: '10px', objectFit: 'contain' }} />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '22px', fontWeight: '800',
            color: '#111827', letterSpacing: '-0.5px'
          }}>Pro<span style={{ color: '#3B2EA3' }}>Fom</span></span>
        </a>

        {/* Center Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="hidden-mobile">
          {[
            { label: 'Services', href: '/#services' },
            { label: 'How It Works', href: '/#how-it-works' },
            { label: 'About Us', href: '/#why-choose-us' },
            { label: 'Reviews', href: '/#testimonials' },
          ].map(link => (
            <a key={link.label} href={link.href} style={{
              color: '#4B5563', fontSize: '15px', fontWeight: '500',
              textDecoration: 'none', padding: '8px 16px', borderRadius: '8px',
              transition: 'all 0.2s ease',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#F5F3FF'
                ;(e.currentTarget as HTMLElement).style.color = '#3B2EA3'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent'
                ;(e.currentTarget as HTMLElement).style.color = '#4B5563'
              }}
            >{link.label}</a>
          ))}
        </div>

        {/* Right CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="tel:+911800000000" style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            color: '#111827', fontSize: '14px', fontWeight: '600',
            textDecoration: 'none'
          }} className="hidden-mobile">
            <span style={{ fontSize: '16px' }}>📞</span> 1800-000-0000
          </a>
          <a href="/#download" style={{
            background: 'linear-gradient(135deg, #3B2EA3, #1E1B4B)',
            color: 'white', padding: '10px 22px', borderRadius: '8px',
            fontSize: '14px', fontWeight: '700', textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(59,46,163,0.25)',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap'
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'none'}
          >
            Book a Service
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#111827', padding: '4px', display: 'none' }}
            className="mobile-menu-btn">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" /> : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: '#FFFFFF', borderTop: '1px solid #F3F4F6',
          padding: '16px 32px 24px', display: 'flex', flexDirection: 'column', gap: '4px'
        }}>
          {[
            { label: 'Services', href: '/#services' },
            { label: 'How It Works', href: '/#how-it-works' },
            { label: 'About Us', href: '/#why-choose-us' },
            { label: 'Reviews', href: '/#testimonials' },
          ].map(link => (
            <a key={link.label} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: '#374151', fontSize: '16px', fontWeight: '500', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid #F9FAFB' }}>
              {link.label}
            </a>
          ))}
          <a href="/#download" style={{ background: 'linear-gradient(135deg, #3B2EA3, #1E1B4B)', color: 'white', padding: '14px', borderRadius: '10px', fontSize: '15px', fontWeight: '700', textDecoration: 'none', textAlign: 'center', marginTop: '12px' }}>
            Book a Service
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
