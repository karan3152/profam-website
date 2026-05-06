'use client'
import { useEffect, useRef, useState } from 'react'

const APP_SCREENS = [
  {
    title: 'Smart Home Dashboard',
    desc: 'Your personalized hub showing upcoming bookings, recommendations & savings.',
    tag: 'Home Screen',
    color: '#00c6ff',
    content: (
      <div style={{ padding: '16px', height: '100%', overflowY: 'auto' }}>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>Welcome back!</div>
        <div style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '16px' }}>Good Morning, Rahul <img src="https://img.icons8.com/3d-fluency/94/hand.png" alt="" style={{width: '20px', verticalAlign: 'middle'}} /></div>

        <div style={{ background: 'linear-gradient(135deg, #00c6ff22, #0072ff22)', border: '1px solid #00c6ff33', borderRadius: '16px', padding: '14px', marginBottom: '16px' }}>
          <div style={{ fontSize: '10px', color: '#00c6ff', marginBottom: '4px' }}>⚡ UPCOMING</div>
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'white' }}>Deep Cleaning - Today, 3 PM</div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>Priya S. is on the way • ⭐ 4.9</div>
          <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
            <div style={{ background: '#00c6ff', borderRadius: '8px', padding: '5px 10px', fontSize: '10px', color: 'white', fontWeight: '600' }}>Track Live <img src="https://img.icons8.com/3d-fluency/94/marker.png" alt="" style={{width: '12px', verticalAlign: 'middle'}} /></div>
            <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '5px 10px', fontSize: '10px', color: 'white' }}>Call Pro</div>
          </div>
        </div>

        <div style={{ fontSize: '12px', fontWeight: '600', color: 'white', marginBottom: '10px' }}>Popular Near You</div>
        {[
          { icon: 'https://img.icons8.com/3d-fluency/94/broom.png', text: 'Home Cleaning • ₹399' },
          { icon: 'https://img.icons8.com/3d-fluency/94/flash-on.png', text: 'Electrician • ₹249' },
          { icon: 'https://img.icons8.com/3d-fluency/94/air-conditioner.png', text: 'AC Service • ₹349' }
        ].map((s, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '10px 12px', marginBottom: '8px', fontSize: '11px', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <img src={s.icon} alt="" style={{ width: '14px', height: '14px' }} /> {s.text}
          </div>
        ))}
      </div>
    )
  },
  {
    title: 'Live Tracking',
    desc: 'Watch your professional travel to you in real-time with precise GPS tracking.',
    tag: 'Live Map',
    color: '#10b981',
    content: (
      <div style={{ padding: '16px', height: '100%' }}>
        <div style={{ fontSize: '12px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>Live Tracking <img src="https://img.icons8.com/3d-fluency/94/marker.png" alt="" style={{width: '14px', verticalAlign: 'middle'}} /></div>
        <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '14px', height: '160px', position: 'relative', overflow: 'hidden', marginBottom: '14px' }}>
          {/* Fake map */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div style={{ position: 'absolute', bottom: '30px', left: '40px', width: '14px', height: '14px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 12px rgba(16,185,129,0.8)' }} />
          <div style={{ position: 'absolute', top: '20px', right: '35px', width: '10px', height: '10px', background: '#00c6ff', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '32px', left: '55px', width: '60px', height: '2px', background: 'rgba(16,185,129,0.4)', transform: 'rotate(-20deg)', borderRadius: '2px' }} />
          <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>Your home</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>Priya S. is</div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: '#10b981' }}>8 min away</div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #10b981, #059669)', borderRadius: '10px', padding: '8px 12px', fontSize: '11px', color: 'white', fontWeight: '600' }}>
              Call Now
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Easy Payments',
    desc: 'Pay securely with UPI, cards, or Profam wallet. Split, save, and earn cashback.',
    tag: 'Payment',
    color: '#a855f7',
    content: (
      <div style={{ padding: '16px' }}>
        <div style={{ fontSize: '12px', fontWeight: '700', color: 'white', marginBottom: '16px' }}>Payment Summary <img src="https://img.icons8.com/3d-fluency/94/bank-cards.png" alt="" style={{width: '16px', verticalAlign: 'middle'}} /></div>
        <div style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.25)', borderRadius: '14px', padding: '14px', marginBottom: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Deep Cleaning (2BHK)</span>
            <span style={{ fontSize: '12px', color: 'white' }}>₹599</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>First Booking Discount</span>
            <span style={{ fontSize: '12px', color: '#10b981' }}>-₹100</span>
          </div>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '10px 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '13px', fontWeight: '700', color: 'white' }}>Total</span>
            <span style={{ fontSize: '16px', fontWeight: '700', color: '#a855f7' }}>₹499</span>
          </div>
        </div>
        {[
          { icon: 'https://img.icons8.com/3d-fluency/94/bank-building.png', text: 'Pay via UPI' },
          { icon: 'https://img.icons8.com/3d-fluency/94/bank-cards.png', text: 'Credit/Debit Card' },
          { icon: 'https://img.icons8.com/3d-fluency/94/wallet.png', text: 'Profam Wallet (₹200)' }
        ].map((m, i) => (
          <div key={i} style={{ background: i === 2 ? 'rgba(168,85,247,0.15)' : 'rgba(255,255,255,0.04)', border: `1px solid ${i === 2 ? 'rgba(168,85,247,0.4)' : 'rgba(255,255,255,0.06)'}`, borderRadius: '10px', padding: '10px 12px', marginBottom: '8px', fontSize: '11px', color: i === 2 ? '#a855f7' : 'rgba(255,255,255,0.7)', cursor: 'pointer', fontWeight: i === 2 ? '600' : '400', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <img src={m.icon} alt="" style={{ width: '14px', height: '14px' }} /> {m.text}
          </div>
        ))}
        <div style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)', borderRadius: '12px', padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '700', color: 'white', marginTop: '4px' }}>
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

  const activeColor = APP_SCREENS[activeScreen].color

  return (
    <section ref={sectionRef} className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-blue" style={{ width: '500px', height: '500px', top: '0px', right: '-100px', opacity: 0.07 }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          {/* Left — Phone */}
          <div style={{
            display: 'flex', justifyContent: 'center',
            opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-40px)',
            transition: 'all 1s ease'
          }}>
            <div style={{ position: 'relative' }}>
              {/* Glow */}
              <div style={{
                position: 'absolute', inset: '-40px',
                background: `radial-gradient(circle, ${activeColor}25, transparent 70%)`,
                borderRadius: '50%',
                transition: 'background 0.5s ease'
              }} />

              {/* Phone frame */}
              <div className="phone-frame" style={{ width: '280px', height: '560px', position: 'relative' }}>
                <div className="phone-notch" />
                <div style={{
                  background: 'var(--color-bg-2)',
                  borderRadius: '36px',
                  height: 'calc(100% - 36px)',
                  overflow: 'hidden',
                  border: `1px solid ${activeColor}22`,
                  transition: 'border-color 0.4s ease'
                }}>
                  {/* App header */}
                  <div style={{
                    padding: '12px 16px 0',
                    background: `linear-gradient(180deg, ${activeColor}15, transparent)`,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    marginBottom: '4px'
                  }}>
                    <div style={{ fontWeight: '700', fontSize: '13px', color: 'white', fontFamily: 'var(--font-display)', letterSpacing: '-0.3px' }}>Profam</div>
                    <div style={{ width: '28px', height: '28px', background: `${activeColor}22`, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}><img src="https://img.icons8.com/3d-fluency/94/bell.png" alt="" style={{width: '16px'}} /></div>
                  </div>

                  {/* Screen content */}
                  <div style={{ flex: 1, overflow: 'hidden', height: 'calc(100% - 60px)' }} key={activeScreen}>
                    {APP_SCREENS[activeScreen].content}
                  </div>

                  {/* Bottom Nav */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: 'rgba(5,10,20,0.9)', backdropFilter: 'blur(20px)',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    padding: '10px 20px',
                    display: 'flex', justifyContent: 'space-around'
                  }}>
                    {['https://img.icons8.com/3d-fluency/94/home.png', 'https://img.icons8.com/3d-fluency/94/search.png', 'https://img.icons8.com/3d-fluency/94/document.png', 'https://img.icons8.com/3d-fluency/94/user-male-circle.png'].map((icon, i) => (
                      <div key={i} style={{ textAlign: 'center', opacity: i === 0 ? 1 : 0.4 }}>
                        <img src={icon} alt="" style={{ width: i === 0 ? '22px' : '18px', height: i === 0 ? '22px' : '18px', objectFit: 'contain' }} />
                        {i === 0 && <div style={{ width: '4px', height: '4px', background: activeColor, borderRadius: '50%', margin: '2px auto 0' }} />}
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
            <div className="badge" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src="https://img.icons8.com/3d-fluency/94/smartphone.png" alt="" style={{width: '16px'}} /> The Profam App
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: '700', color: 'white',
              lineHeight: '1.1', marginBottom: '16px',
              letterSpacing: '-1px'
            }}>
              An App Built For{' '}
              <span className="gradient-text">Your Life</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '40px' }}>
              Every screen of the Profam app is crafted to make home services the simplest thing you do today.
            </p>

            {/* Screen tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {APP_SCREENS.map((screen, i) => (
                <div
                  key={screen.title}
                  onClick={() => setActiveScreen(i)}
                  style={{
                    padding: '20px 24px',
                    borderRadius: '16px',
                    cursor: 'pointer',
                    border: activeScreen === i ? `1px solid ${screen.color}44` : '1px solid rgba(255,255,255,0.06)',
                    background: activeScreen === i ? `${screen.color}0d` : 'rgba(255,255,255,0.02)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '10px', height: '10px', borderRadius: '50%',
                      background: activeScreen === i ? screen.color : 'rgba(255,255,255,0.2)',
                      boxShadow: activeScreen === i ? `0 0 10px ${screen.color}` : 'none',
                      flexShrink: 0,
                      transition: 'all 0.3s ease'
                    }} />
                    <div>
                      <div style={{ fontSize: '10px', color: screen.color, fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>
                        {screen.tag}
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>
                        {screen.title}
                      </div>
                      {activeScreen === i && (
                        <div style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
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
