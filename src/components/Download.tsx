'use client'
import { useEffect, useRef, useState } from 'react'

export default function Download() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="download" ref={sectionRef} className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Dramatic background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(0,114,255,0.12) 0%, rgba(124,58,237,0.12) 50%, rgba(0,198,255,0.08) 100%)',
      }} />
      <div className="orb orb-blue" style={{ width: '600px', height: '600px', top: '-200px', right: '-100px', opacity: 0.15 }} />
      <div className="orb orb-purple" style={{ width: '500px', height: '500px', bottom: '-200px', left: '-100px', opacity: 0.12 }} />

      {/* Grid lines */}
      <div style={{ position: 'absolute', inset: 0 }} className="grid-pattern" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 2 }}>
        {/* Main CTA card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '40px',
          padding: 'clamp(48px, 6vw, 80px)',
          textAlign: 'center',
          backdropFilter: 'blur(30px)',
          position: 'relative',
          overflow: 'hidden',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(40px)',
          transition: 'all 1s ease'
        }}>
          {/* Top shimmer line */}
          <div style={{
            position: 'absolute', top: 0, left: '20%', right: '20%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(0,198,255,0.8), transparent)',
            borderRadius: '2px'
          }} />

          <div className="badge" style={{ marginBottom: '24px', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="https://img.icons8.com/3d-fluency/94/rocket.png" alt="" style={{width: '20px'}} /> Download Now
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 6vw, 80px)',
            fontWeight: '700', color: 'white',
            lineHeight: '1.05', marginBottom: '20px',
            letterSpacing: '-2px'
          }}>
            Transform How You{' '}
            <span className="gradient-text">Care For</span>
            <br />Your Home
          </h2>

          <p style={{
            fontSize: '18px', color: 'var(--color-text-muted)',
            maxWidth: '560px', margin: '0 auto 48px',
            lineHeight: '1.7'
          }}>
            Join 50,000+ homeowners who have discovered a smarter, easier way to maintain their homes with Profam.
          </p>

          {/* Download buttons */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
            {/* App Store */}
            <a href="#" className="store-btn">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', lineHeight: '1' }}>Download on the</div>
                <div style={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.2' }}>App Store</div>
              </div>
            </a>

            {/* Google Play */}
            <a href="#" className="store-btn">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199 1.852a1 1 0 010 1.732l-2.302 1.329-2.549-2.549 2.549-2.549 2.302 1.037zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z"/>
              </svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', lineHeight: '1' }}>Get it on</div>
                <div style={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.2' }}>Google Play</div>
              </div>
            </a>
          </div>

          {/* Social proof strip */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            {[
              { icon: 'https://img.icons8.com/3d-fluency/94/star.png', val: '4.9/5', label: 'App Rating' },
              { icon: 'https://img.icons8.com/3d-fluency/94/group.png', val: '50K+', label: 'Downloads' },
              { icon: 'https://img.icons8.com/3d-fluency/94/medal.png', val: '#1', label: 'Home Services App' },
            ].map(item => (
              <div key={item.label} style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4px' }}><img src={item.icon} alt="" style={{width: '32px'}} /></div>
                <div style={{ fontSize: '20px', fontWeight: '700', color: 'white', fontFamily: 'var(--font-display)' }}>{item.val}</div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* For professionals */}
        <div style={{
          marginTop: '48px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px'
        }}>
          {/* Become a Pro */}
          <div className="glass" style={{
            padding: '40px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.3s'
          }}>
            <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}><img src="https://img.icons8.com/3d-fluency/94/worker-male.png" alt="" style={{width: '48px'}} /></div>
            <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>
              Are You a Service Professional?
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
              Join thousands of professionals earning more with Profam. Set your own schedule, get paid on time, and grow your client base.
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {['Flexible hours', 'Guaranteed pay', 'Free training'].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--color-accent)' }}>
                  <span>✓</span> {f}
                </div>
              ))}
            </div>
            <a href="#" className="btn-outline" style={{ textDecoration: 'none' }}>
              Join as a Pro →
            </a>
          </div>

          {/* Partner */}
          <div className="glass" style={{
            padding: '40px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.45s'
          }}>
            <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}><img src="https://img.icons8.com/3d-fluency/94/company.png" alt="" style={{width: '48px'}} /></div>
            <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>
              Corporate & Housing Society Plans
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
              Special plans for housing societies, apartment complexes, and corporates. Get dedicated account managers and bulk booking discounts.
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {['Custom pricing', 'Priority support', 'Bulk discounts'].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#f59e0b' }}>
                  <span>✓</span> {f}
                </div>
              ))}
            </div>
            <a href="#" className="btn-outline" style={{ textDecoration: 'none', borderColor: 'rgba(245,158,11,0.4)', color: '#f59e0b' }}>
              Get in Touch →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
