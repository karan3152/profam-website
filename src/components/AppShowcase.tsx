'use client'
import { useEffect, useRef, useState } from 'react'

const APP_SCREENS = [
  {
    title: 'Smart Home Dashboard',
    desc: 'Your personalized hub showing upcoming bookings, recommendations & savings.',
    tag: 'Home Screen',
    color: '#3B2EA3',
    content: (
      <div style={{ padding: '16px', height: '100%', overflowY: 'auto', background: '#FFFFFF' }}>
        <div style={{ fontSize: '11px', color: '#6B7280', marginBottom: '4px' }}>Welcome back!</div>
        <div style={{ fontSize: '16px', fontWeight: '800', color: '#111827', marginBottom: '16px' }}>Good Morning, Rahul <img src="https://img.icons8.com/3d-fluency/94/hand.png" alt="" style={{width: '20px', verticalAlign: 'middle'}} /></div>

        <div style={{ background: '#F9FAFB', border: '1px solid #F3F4F6', borderRadius: '16px', padding: '14px', marginBottom: '16px' }}>
          <div style={{ fontSize: '10px', color: '#3B2EA3', fontWeight: '800', marginBottom: '4px' }}>⚡ UPCOMING</div>
          <div style={{ fontSize: '13px', fontWeight: '800', color: '#111827' }}>Deep Cleaning - Today, 3 PM</div>
          <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px' }}>Priya S. is on the way • ⭐ 4.9</div>
          <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
            <div style={{ background: '#3B2EA3', borderRadius: '8px', padding: '6px 12px', fontSize: '10px', color: 'white', fontWeight: '700' }}>Track Live <img src="https://img.icons8.com/3d-fluency/94/marker.png" alt="" style={{width: '12px', verticalAlign: 'middle'}} /></div>
            <div style={{ background: '#E5E7EB', borderRadius: '8px', padding: '6px 12px', fontSize: '10px', color: '#374151', fontWeight: '600' }}>Call Pro</div>
          </div>
        </div>

        <div style={{ fontSize: '12px', fontWeight: '700', color: '#111827', marginBottom: '10px' }}>Popular Near You</div>
        {[
          { icon: 'https://img.icons8.com/3d-fluency/94/vacuum-cleaner.png', text: 'Home Cleaning • ₹399' },
          { icon: 'https://img.icons8.com/3d-fluency/94/flash-on.png', text: 'Electrician • ₹249' },
          { icon: 'https://img.icons8.com/3d-fluency/94/air-conditioner.png', text: 'AC Service • ₹349' }
        ].map((s, i) => (
          <div key={i} style={{ background: '#FFFFFF', border: '1px solid #F3F4F6', borderRadius: '10px', padding: '10px 12px', marginBottom: '8px', fontSize: '11px', color: '#4B5563', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
            <img src={s.icon} alt="" style={{ width: '16px', height: '16px' }} /> {s.text}
          </div>
        ))}
      </div>
    )
  },
  {
    title: 'Live Tracking',
    desc: 'Watch your professional travel to you in real-time with precise GPS tracking.',
    tag: 'Live Map',
    color: '#3B2EA3',
    content: (
      <div style={{ padding: '16px', height: '100%', background: '#FFFFFF' }}>
        <div style={{ fontSize: '13px', fontWeight: '800', color: '#111827', marginBottom: '12px' }}>Live Tracking <img src="https://img.icons8.com/3d-fluency/94/marker.png" alt="" style={{width: '14px', verticalAlign: 'middle'}} /></div>
        <div style={{ background: '#F3F4F6', border: '1px solid #E5E7EB', borderRadius: '14px', height: '160px', position: 'relative', overflow: 'hidden', marginBottom: '14px' }}>
          {/* Fake map */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div style={{ position: 'absolute', bottom: '30px', left: '40px', width: '14px', height: '14px', background: '#3B2EA3', borderRadius: '50%', boxShadow: '0 0 12px rgba(59,46,163,0.4)' }} />
          <div style={{ position: 'absolute', top: '20px', right: '35px', width: '10px', height: '10px', background: '#9CA3AF', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '32px', left: '55px', width: '60px', height: '3px', background: '#3B2EA3', transform: 'rotate(-20deg)', borderRadius: '2px', opacity: 0.5 }} />
          <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', fontSize: '10px', color: '#6B7280', fontWeight: '600', background: 'white', padding: '2px 6px', borderRadius: '4px' }}>Your home</div>
        </div>
        <div style={{ background: '#F9FAFB', border: '1px solid #F3F4F6', borderRadius: '12px', padding: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#6B7280' }}>Priya S. is</div>
              <div style={{ fontSize: '16px', fontWeight: '800', color: '#111827' }}>8 min away</div>
            </div>
            <div style={{ background: '#22c55e', borderRadius: '10px', padding: '8px 12px', fontSize: '11px', color: 'white', fontWeight: '700' }}>
              Call Now
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Easy Payments',
    desc: 'Pay securely with UPI, cards, or ProFom wallet. Split, save, and earn cashback.',
    tag: 'Payment',
    color: '#3B2EA3',
    content: (
      <div style={{ padding: '16px', height: '100%', background: '#FFFFFF' }}>
        <div style={{ fontSize: '13px', fontWeight: '800', color: '#111827', marginBottom: '16px' }}>Payment Summary <img src="https://img.icons8.com/3d-fluency/94/bank-cards.png" alt="" style={{width: '16px', verticalAlign: 'middle'}} /></div>
        <div style={{ background: '#F9FAFB', border: '1px solid #F3F4F6', borderRadius: '14px', padding: '14px', marginBottom: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: '500' }}>Deep Cleaning (2BHK)</span>
            <span style={{ fontSize: '12px', color: '#111827', fontWeight: '600' }}>₹599</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: '500' }}>First Booking Discount</span>
            <span style={{ fontSize: '12px', color: '#22c55e', fontWeight: '700' }}>-₹100</span>
          </div>
          <div style={{ height: '1px', background: '#E5E7EB', margin: '10px 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '13px', fontWeight: '800', color: '#111827' }}>Total</span>
            <span style={{ fontSize: '16px', fontWeight: '800', color: '#3B2EA3' }}>₹499</span>
          </div>
        </div>
        {[
          { icon: 'https://img.icons8.com/3d-fluency/94/bank-building.png', text: 'Pay via UPI' },
          { icon: 'https://img.icons8.com/3d-fluency/94/bank-cards.png', text: 'Credit/Debit Card' },
          { icon: 'https://img.icons8.com/3d-fluency/94/wallet.png', text: 'ProFom Wallet (₹200)' }
        ].map((m, i) => (
          <div key={i} style={{ background: i === 2 ? '#EEF2FF' : '#FFFFFF', border: `1px solid ${i === 2 ? '#C7D2FE' : '#F3F4F6'}`, borderRadius: '10px', padding: '10px 12px', marginBottom: '8px', fontSize: '11px', color: '#4B5563', cursor: 'pointer', fontWeight: i === 2 ? '700' : '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src={m.icon} alt="" style={{ width: '16px', height: '16px' }} /> {m.text}
          </div>
        ))}
        <div style={{ background: '#3B2EA3', borderRadius: '12px', padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '700', color: 'white', marginTop: '8px', boxShadow: '0 4px 12px rgba(59,46,163,0.3)' }}>
          Pay Securely <img src="https://img.icons8.com/3d-fluency/94/lock.png" alt="" style={{width: '16px', verticalAlign: 'middle'}} />
        </div>
      </div>
    )
  }
]

export default function AppShowcase() {
  const [activeScreen, setActiveScreen] = useState(0)
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
    <section ref={sectionRef} className="section" style={{ position: 'relative', overflow: 'hidden', background: '#FAFAFA' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          {/* Left — Phone Mockup */}
          <div style={{
            display: 'flex', justifyContent: 'center',
            opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-40px)',
            transition: 'all 1s ease'
          }}>
            <div style={{ position: 'relative' }}>
              {/* Soft Glow */}
              <div style={{
                position: 'absolute', inset: '-20px',
                background: 'radial-gradient(circle, rgba(59,46,163,0.1), transparent 70%)',
                borderRadius: '50%',
                zIndex: 0
              }} />

              {/* Phone frame */}
              <div style={{ 
                width: '280px', height: '580px', position: 'relative',
                background: '#FFFFFF', borderRadius: '40px', padding: '10px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)',
                zIndex: 1
              }}>
                <div style={{
                  position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)',
                  width: '120px', height: '24px', background: '#F3F4F6', borderRadius: '0 0 12px 12px', zIndex: 10
                }} />
                
                <div style={{
                  background: '#FFFFFF',
                  borderRadius: '30px',
                  height: '100%',
                  overflow: 'hidden',
                  border: '1px solid #F3F4F6',
                  position: 'relative'
                }}>
                  {/* App header */}
                  <div style={{
                    padding: '36px 16px 12px',
                    background: '#FFFFFF',
                    borderBottom: '1px solid #F3F4F6',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}>
                    <div style={{ fontWeight: '800', fontSize: '15px', color: '#111827', fontFamily: 'var(--font-body)', letterSpacing: '-0.3px' }}>ProFom</div>
                    <div style={{ width: '32px', height: '32px', background: '#F3F4F6', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src="https://img.icons8.com/3d-fluency/94/bell.png" alt="" style={{width: '18px'}} />
                    </div>
                  </div>

                  {/* Screen content */}
                  <div style={{ flex: 1, overflow: 'hidden', height: 'calc(100% - 140px)' }} key={activeScreen}>
                    {APP_SCREENS[activeScreen].content}
                  </div>

                  {/* Bottom Nav */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: '#FFFFFF',
                    borderTop: '1px solid #F3F4F6',
                    padding: '12px 20px',
                    display: 'flex', justifyContent: 'space-around'
                  }}>
                    {['https://img.icons8.com/3d-fluency/94/home.png', 'https://img.icons8.com/3d-fluency/94/search.png', 'https://img.icons8.com/3d-fluency/94/document.png', 'https://img.icons8.com/3d-fluency/94/user-male-circle.png'].map((icon, i) => (
                      <div key={i} style={{ textAlign: 'center', opacity: i === 0 ? 1 : 0.3 }}>
                        <img src={icon} alt="" style={{ width: i === 0 ? '24px' : '20px', height: i === 0 ? '24px' : '20px', objectFit: 'contain' }} />
                        {i === 0 && <div style={{ width: '4px', height: '4px', background: '#3B2EA3', borderRadius: '50%', margin: '4px auto 0' }} />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Info */}
          <div style={{
            opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(40px)',
            transition: 'all 1s ease'
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: '#EEF2FF', border: '1px solid #C7D2FE',
              padding: '5px 14px', borderRadius: '50px',
              fontSize: '13px', fontWeight: '600', color: '#3B2EA3',
              marginBottom: '16px'
            }}>
              📱 The ProFom App
            </div>
            <h2 style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: '800', color: '#111827',
              lineHeight: '1.1', marginBottom: '16px',
              letterSpacing: '-1.5px'
            }}>
              Everything you need,<br />
              <span style={{ color: '#3B2EA3' }}>in your pocket.</span>
            </h2>
            <p style={{ fontSize: '17px', color: '#6B7280', lineHeight: '1.6', marginBottom: '40px' }}>
              Our app is designed to make managing your home effortless. Book, track, and pay with just a few taps.
            </p>

            {/* Screen tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {APP_SCREENS.map((screen, i) => (
                <div
                  key={screen.title}
                  onClick={() => setActiveScreen(i)}
                  style={{
                    padding: '24px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    border: activeScreen === i ? '2px solid #3B2EA3' : '1px solid #E5E7EB',
                    background: activeScreen === i ? '#FFFFFF' : '#F9FAFB',
                    boxShadow: activeScreen === i ? '0 8px 32px rgba(59,46,163,0.1)' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '12px', height: '12px', borderRadius: '50%',
                      background: activeScreen === i ? '#3B2EA3' : '#D1D5DB',
                      flexShrink: 0,
                      transition: 'all 0.3s ease'
                    }} />
                    <div>
                      <div style={{ fontSize: '11px', color: activeScreen === i ? '#3B2EA3' : '#6B7280', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
                        {screen.tag}
                      </div>
                      <div style={{ fontSize: '18px', fontWeight: '800', color: '#111827', marginBottom: '6px' }}>
                        {screen.title}
                      </div>
                      {activeScreen === i && (
                        <div style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.6' }}>
                          {screen.desc}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div { grid-template-columns: 1fr !important; }
          section > div > div > div:first-child { order: 2; }
        }
      `}</style>
    </section>
  )
}
