'use client'
import { useEffect, useRef, useState } from 'react'

const SERVICES_TICKER = ['Home Cleaning', 'Plumbing', 'Electrical', 'AC Repair', 'Beauty & Spa', 'Carpentry', 'Pest Control', 'Painting']

export default function Hero() {
  const [currentService, setCurrentService] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentService(prev => (prev + 1) % SERVICES_TICKER.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30
      const y = (e.clientY / window.innerHeight - 0.5) * 30
      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${-x * 0.3}px, ${-y * 0.3}px)`
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100px',
    }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0 }} className="grid-pattern" />

      {/* Orbs */}
      <div ref={orb1Ref} className="orb orb-blue" style={{
        width: '600px', height: '600px',
        top: '-200px', right: '-100px',
        transition: 'transform 0.8s ease'
      }} />
      <div ref={orb2Ref} className="orb orb-purple" style={{
        width: '500px', height: '500px',
        bottom: '-100px', left: '-150px',
        transition: 'transform 0.8s ease'
      }} />
      <div className="orb orb-gold" style={{
        width: '300px', height: '300px',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        animation: 'float 10s ease-in-out infinite',
        opacity: 0.08
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', width: '100%', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          {/* Left — Text */}
          <div style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : 'translateY(40px)', transition: 'all 1s ease' }}>
            <div className="badge" style={{ marginBottom: '28px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00ff88', display: 'inline-block', boxShadow: '0 0 8px #00ff88' }} />
              Now Available in Your City
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(44px, 6vw, 78px)',
              fontWeight: '700',
              lineHeight: '1.08',
              marginBottom: '16px',
              letterSpacing: '-1px',
              color: 'white'
            }}>
              Your Home,{' '}
              <span className="gradient-text">Perfectly</span>
              <br />Cared For
            </h1>

            {/* Rotating service tag */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              marginBottom: '28px'
            }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '20px', fontFamily: 'var(--font-display)' }}>
                Expert
              </span>
              <div style={{
                background: 'linear-gradient(135deg, rgba(0,198,255,0.15), rgba(0,114,255,0.1))',
                border: '1px solid rgba(0,198,255,0.3)',
                borderRadius: '12px', padding: '6px 20px',
                overflow: 'hidden', minWidth: '200px',
                textAlign: 'center'
              }}>
                <span key={currentService} style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '20px', fontWeight: '600',
                  color: 'var(--color-accent)',
                  display: 'block',
                  animation: 'fadeInUp 0.5s ease'
                }}>
                  {SERVICES_TICKER[currentService]}
                </span>
              </div>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '20px', fontFamily: 'var(--font-display)' }}>
                at your door
              </span>
            </div>

            <p style={{
              fontSize: '17px', lineHeight: '1.8',
              color: 'var(--color-text-muted)',
              marginBottom: '40px',
              maxWidth: '480px'
            }}>
              Profam connects you with verified, background-checked professionals for every home service need. Book in seconds, get it done right — every time.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
              <a href="#download" className="btn-primary" style={{ textDecoration: 'none' }}>
                Book a Service
              </a>
              <a href="#how-it-works" className="btn-outline" style={{ textDecoration: 'none' }}>
                See How It Works ↓
              </a>
            </div>

            {/* Mini stats */}
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
              {[
                { val: '50K+', label: 'Happy Customers' },
                { val: '2K+', label: 'Verified Pros' },
                { val: '4.9★', label: 'Average Rating' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '28px', fontWeight: '700',
                    color: 'white', lineHeight: '1'
                  }}>{stat.val}</div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 3D Phone Mockup */}
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            position: 'relative',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateX(40px)',
            transition: 'all 1.2s ease'
          }}>
            {/* Glow behind phone */}
            <div style={{
              position: 'absolute',
              width: '400px', height: '400px',
              background: 'radial-gradient(circle, rgba(0,114,255,0.3), transparent 70%)',
              borderRadius: '50%',
              animation: 'float 6s ease-in-out infinite'
            }} />

            {/* Phone */}
            <div className="phone-frame" style={{
              width: '300px', height: '600px',
              position: 'relative',
              animation: 'float 7s ease-in-out infinite',
              perspective: '1000px',
              transform: 'rotateY(-8deg) rotateX(4deg)',
            }}>
              <div className="phone-notch" />

              {/* Phone screen */}
              <div style={{
                background: 'var(--color-bg-2)',
                borderRadius: '36px',
                height: 'calc(100% - 36px)',
                overflow: 'hidden',
                position: 'relative'
              }}>
                {/* Status bar */}
                <div style={{ padding: '12px 20px 0', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>
                  <span>9:41</span>
                  <span>●●● WiFi <img src="https://img.icons8.com/3d-fluency/94/battery.png" alt="" style={{width: '14px', verticalAlign: 'middle'}} /></span>
                </div>

                {/* App UI */}
                <div style={{ padding: '16px' }}>
                  <div style={{ marginBottom: '16px' }}>
                    <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginBottom: '2px' }}>Good morning,</p>
                    <p style={{ fontSize: '16px', fontWeight: '700', color: 'white' }}>What do you need? <img src="https://img.icons8.com/3d-fluency/94/hand.png" alt="" style={{width: '20px', verticalAlign: 'middle'}} /></p>
                  </div>

                  {/* Search bar */}
                  <div style={{
                    background: 'rgba(255,255,255,0.07)',
                    borderRadius: '12px', padding: '10px 14px',
                    display: 'flex', alignItems: 'center', gap: '8px',
                    marginBottom: '20px',
                    border: '1px solid rgba(255,255,255,0.08)'
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}><img src="https://img.icons8.com/3d-fluency/94/search.png" alt="" style={{width: '16px'}} /></span>
                    <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Search services...</span>
                  </div>

                  {/* Service icons grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '20px' }}>
                    {[
                      { icon: 'https://img.icons8.com/3d-fluency/94/broom.png', name: 'Clean' },
                      { icon: 'https://img.icons8.com/3d-fluency/94/wrench.png', name: 'Repair' },
                      { icon: 'https://img.icons8.com/3d-fluency/94/flash-on.png', name: 'Electr.' },
                      { icon: 'https://img.icons8.com/3d-fluency/94/plumbing.png', name: 'Plumb' },
                      { icon: 'https://img.icons8.com/3d-fluency/94/air-conditioner.png', name: 'AC' },
                      { icon: 'https://img.icons8.com/3d-fluency/94/lotus.png', name: 'Spa' },
                      { icon: 'https://img.icons8.com/3d-fluency/94/hammer.png', name: 'Carpntr' },
                      { icon: 'https://img.icons8.com/3d-fluency/94/bug.png', name: 'Pest' },
                    ].map(s => (
                      <div key={s.name} style={{
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '12px', padding: '10px 4px',
                        textAlign: 'center', cursor: 'pointer',
                        border: '1px solid rgba(255,255,255,0.06)'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4px' }}>
                          <img src={s.icon} alt="" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                        </div>
                        <div style={{ fontSize: '9px', color: 'var(--color-text-muted)' }}>{s.name}</div>
                      </div>
                    ))}
                  </div>

                  {/* Featured card */}
                  <div style={{
                    background: 'linear-gradient(135deg, #00c6ff22, #0072ff22)',
                    border: '1px solid rgba(0,198,255,0.25)',
                    borderRadius: '16px', padding: '14px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <p style={{ fontSize: '11px', color: 'var(--color-accent)', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}><img src="https://img.icons8.com/3d-fluency/94/star.png" alt="" style={{width: '12px'}} /> Top Pick</p>
                        <p style={{ fontSize: '14px', fontWeight: '700', color: 'white', marginBottom: '2px' }}>Deep Home Cleaning</p>
                        <p style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Starting ₹599</p>
                      </div>
                      <div style={{
                        background: 'linear-gradient(135deg, #00c6ff, #0072ff)',
                        borderRadius: '10px', padding: '8px 14px',
                        fontSize: '11px', fontWeight: '600', color: 'white'
                      }}>Book</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div style={{
              position: 'absolute', top: '60px', right: '-20px',
              background: 'rgba(5, 10, 20, 0.9)',
              border: '1px solid rgba(0,255,136,0.3)',
              borderRadius: '14px', padding: '12px 16px',
              backdropFilter: 'blur(20px)',
              animation: 'float 5s ease-in-out 1s infinite'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ display: 'flex' }}><img src="https://img.icons8.com/3d-fluency/94/ok.png" alt="" style={{width: '24px'}} /></span>
                <div>
                  <p style={{ fontSize: '11px', color: 'white', fontWeight: '600' }}>Booking Confirmed</p>
                  <p style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>Pro arriving in 45 min</p>
                </div>
              </div>
            </div>

            <div style={{
              position: 'absolute', bottom: '80px', left: '-30px',
              background: 'rgba(5, 10, 20, 0.9)',
              border: '1px solid rgba(245,158,11,0.3)',
              borderRadius: '14px', padding: '12px 16px',
              backdropFilter: 'blur(20px)',
              animation: 'float 6s ease-in-out 2s infinite'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ display: 'flex' }}><img src="https://img.icons8.com/3d-fluency/94/star.png" alt="" style={{width: '24px'}} /></span>
                <div>
                  <p style={{ fontSize: '11px', color: 'white', fontWeight: '600' }}>Rated 4.9/5</p>
                  <p style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>50,000+ Reviews</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        animation: 'float 2s ease-in-out infinite'
      }}>
        <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
        <svg width="24" height="24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div { grid-template-columns: 1fr !important; }
          section > div > div > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  )
}
