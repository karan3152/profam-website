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
    <section id="download" ref={sectionRef} className="section" style={{ background: '#FFFFFF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        
        {/* Main Download CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #3B2EA3 0%, #1E1B4B 100%)',
          borderRadius: '28px',
          padding: 'clamp(40px, 5vw, 72px)',
          textAlign: 'center',
          position: 'relative', overflow: 'hidden',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(30px)',
          transition: 'all 0.8s ease',
          marginBottom: '32px'
        }}>
          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', background: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '240px', height: '240px', background: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)',
              padding: '5px 14px', borderRadius: '50px',
              fontSize: '13px', fontWeight: '600', color: 'rgba(255,255,255,0.9)',
              marginBottom: '20px'
            }}>
              🚀 Get the App
            </div>

            <h2 style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(32px, 5vw, 60px)',
              fontWeight: '900', color: '#FFFFFF',
              lineHeight: '1.05', marginBottom: '16px',
              letterSpacing: '-2px'
            }}>
              Transform how you care<br />for your home.
            </h2>

            <p style={{
              fontSize: '18px', color: 'rgba(255,255,255,0.75)',
              maxWidth: '520px', margin: '0 auto 40px',
              lineHeight: '1.65'
            }}>
              Join 50,000+ homeowners who have discovered a smarter, easier way to keep their homes perfect.
            </p>

            {/* Ratings */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '8px' }}>
              {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#FCD34D', fontSize: '22px' }}>★</span>)}
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>
              <strong style={{ color: '#FFFFFF' }}>4.9/5</strong> · 74,712 ratings combined
            </p>

            {/* Store buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#" style={{
                background: '#000000', color: 'white',
                padding: '14px 28px', borderRadius: '14px',
                display: 'flex', alignItems: 'center', gap: '12px',
                textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)',
                transition: 'transform 0.2s ease'
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
              >
                <img src="https://img.icons8.com/color/48/google-play.png" alt="" style={{ width: '28px' }} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '10px', opacity: 0.7, textTransform: 'uppercase' }}>Get it on</div>
                  <div style={{ fontSize: '18px', fontWeight: '800' }}>Google Play</div>
                </div>
              </a>
              <a href="#" style={{
                background: '#000000', color: 'white',
                padding: '14px 28px', borderRadius: '14px',
                display: 'flex', alignItems: 'center', gap: '12px',
                textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)',
                transition: 'transform 0.2s ease'
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
              >
                <img src="https://img.icons8.com/ios-filled/50/ffffff/apple-app-store--v1.png" alt="" style={{ width: '28px' }} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '10px', opacity: 0.7, textTransform: 'uppercase' }}>Download on the</div>
                  <div style={{ fontSize: '18px', fontWeight: '800' }}>App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom 2 cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {/* Become a Pro */}
          <div style={{
            background: '#F9FAFB', borderRadius: '20px', padding: '36px',
            border: '1px solid #F3F4F6',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.3s'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>👷</div>
            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#111827', marginBottom: '10px' }}>
              Are you a service professional?
            </h3>
            <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.7', marginBottom: '20px' }}>
              Join 2,000+ pros earning more with ProFom. Set your own schedule, get paid on time, grow your client base.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
              {['Flexible hours', 'Guaranteed pay', 'Free training'].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#16a34a', fontWeight: '600' }}>
                  <span>✓</span> {f}
                </div>
              ))}
            </div>
            <a href="#" style={{
              display: 'inline-block', background: 'linear-gradient(135deg, #3B2EA3, #1E1B4B)',
              color: 'white', padding: '12px 28px', borderRadius: '10px',
              fontSize: '14px', fontWeight: '700', textDecoration: 'none'
            }}>
              Join as a Pro →
            </a>
          </div>

          {/* Corporate */}
          <div style={{
            background: '#F9FAFB', borderRadius: '20px', padding: '36px',
            border: '1px solid #F3F4F6',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.45s'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>🏢</div>
            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#111827', marginBottom: '10px' }}>
              Corporate & Society Plans
            </h3>
            <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.7', marginBottom: '20px' }}>
              Special plans for housing societies and corporates. Get a dedicated account manager and bulk booking discounts.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
              {['Custom pricing', 'Priority support', 'Bulk discounts'].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#d97706', fontWeight: '600' }}>
                  <span>✓</span> {f}
                </div>
              ))}
            </div>
            <a href="#" style={{
              display: 'inline-block', background: '#111827',
              color: 'white', padding: '12px 28px', borderRadius: '10px',
              fontSize: '14px', fontWeight: '700', textDecoration: 'none'
            }}>
              Get in Touch →
            </a>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section > div > div:last-child { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
