'use client'
import { useEffect, useRef, useState } from 'react'

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    city: 'Mumbai',
    role: 'Working Professional',
    avatar: 'PS',
    rating: 5,
    service: 'Home Cleaning',
    text: "Profam has literally changed my life. I work long hours and coming home to a clean apartment used to stress me out. Now I book a cleaning every Sunday night and it's ready Monday morning. The cleaner Meena is absolutely thorough and friendly.",
    color: '#00c6ff'
  },
  {
    name: 'Arjun Mehta',
    city: 'Delhi',
    role: 'Software Engineer',
    avatar: 'AM',
    rating: 5,
    service: 'Electrical Repair',
    text: "Called an electrician at 9 PM for a power socket that stopped working. The Profam electrician arrived within 40 minutes, diagnosed and fixed the issue in 20 minutes. Clean work, transparent billing. Absolutely recommended.",
    color: '#f59e0b'
  },
  {
    name: 'Kavitha Nair',
    city: 'Bangalore',
    role: 'Homemaker',
    avatar: 'KN',
    rating: 5,
    service: 'Beauty & Spa',
    text: "I booked the home salon service for my mother's birthday and the beautician was so professional and warm. Full facial, hair spa, and pedicure — all at home. My mother was thrilled! The quality was better than actual salons.",
    color: '#ec4899'
  },
  {
    name: 'Rohit Singhania',
    city: 'Pune',
    role: 'Business Owner',
    avatar: 'RS',
    rating: 5,
    service: 'AC Service',
    text: "My AC broke down in peak summer. Profam had a technician at my place within 2 hours. He serviced the unit, recharged the gas, and gave me a detailed report of the AC's health. Professional, on-time, and worth every rupee.",
    color: '#06b6d4'
  },
  {
    name: 'Sunita Gupta',
    city: 'Hyderabad',
    role: 'Teacher',
    avatar: 'SG',
    rating: 5,
    service: 'Pest Control',
    text: "We had a cockroach problem for months. Profam sent a certified pest control team who treated the entire house with pet-safe products. It's been 3 months and not a single cockroach. Worth every penny!",
    color: '#84cc16'
  },
  {
    name: 'Deepak Verma',
    city: 'Chennai',
    role: 'Doctor',
    avatar: 'DV',
    rating: 5,
    service: 'Plumbing',
    text: "The plumber fixed our kitchen pipe leak in under 30 minutes with zero mess. He even pointed out a potential issue with the bathroom pipes that could have become a problem later. Proactive and skilled — exactly what you want.",
    color: '#10b981'
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-gold" style={{ width: '400px', height: '400px', top: '-100px', left: '-100px', opacity: 0.06 }} />
      <div className="orb orb-purple" style={{ width: '300px', height: '300px', bottom: '-50px', right: '-50px', opacity: 0.07 }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="badge" style={{ marginBottom: '20px', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="https://img.icons8.com/3d-fluency/94/speech-bubble-with-dots.png" alt="" style={{width: '20px'}} /> Real Reviews
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: '700', color: 'white',
            lineHeight: '1.1', marginBottom: '20px',
            letterSpacing: '-1px'
          }}>
            50,000+ Happy{' '}
            <span className="gradient-text">Homes</span>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--color-text-muted)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7' }}>
            Don't just take our word for it. Here's what real Profam customers say.
          </p>
        </div>

        {/* Featured testimonial */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0,198,255,0.07), rgba(124,58,237,0.07))',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '28px',
          padding: '48px',
          marginBottom: '40px',
          position: 'relative', overflow: 'hidden',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(30px)',
          transition: 'all 0.8s ease'
        }}>
          <div style={{
            position: 'absolute', top: '20px', left: '40px',
            fontSize: '120px', lineHeight: '1', color: 'rgba(0,198,255,0.06)',
            fontFamily: 'var(--font-display)'
          }}>"</div>

          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'start' }}>
            <div>
              <div className="stars" style={{ fontSize: '20px', marginBottom: '16px' }}>★★★★★</div>
              <blockquote style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 2.5vw, 26px)',
                color: 'white',
                lineHeight: '1.6',
                fontStyle: 'italic',
                fontWeight: '300',
                marginBottom: '28px'
              }}>
                "{TESTIMONIALS[activeIdx].text}"
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '52px', height: '52px',
                  background: `linear-gradient(135deg, ${TESTIMONIALS[activeIdx].color}, ${TESTIMONIALS[activeIdx].color}88)`,
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '16px', fontWeight: '700', color: 'white'
                }}>
                  {TESTIMONIALS[activeIdx].avatar}
                </div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: 'white' }}>{TESTIMONIALS[activeIdx].name}</div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                    {TESTIMONIALS[activeIdx].role} • {TESTIMONIALS[activeIdx].city}
                  </div>
                </div>
                <div style={{
                  marginLeft: 'auto',
                  background: `${TESTIMONIALS[activeIdx].color}18`,
                  border: `1px solid ${TESTIMONIALS[activeIdx].color}33`,
                  borderRadius: '20px', padding: '4px 14px',
                  fontSize: '12px', color: TESTIMONIALS[activeIdx].color, fontWeight: '600'
                }}>
                  {TESTIMONIALS[activeIdx].service}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots + mini cards */}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '48px' }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              style={{
                width: activeIdx === i ? '32px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                background: activeIdx === i ? 'var(--color-accent)' : 'rgba(255,255,255,0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0
              }}
            />
          ))}
        </div>

        {/* All review cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              onClick={() => setActiveIdx(i)}
              className="testimonial-card"
              style={{
                cursor: 'pointer',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(30px)',
                transition: `all 0.6s ease ${i * 0.08}s`,
                borderColor: activeIdx === i ? `${t.color}44` : 'rgba(0,198,255,0.12)',
                background: activeIdx === i ? `${t.color}08` : undefined,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '40px', height: '40px',
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '13px', fontWeight: '700', color: 'white', flexShrink: 0
                  }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: 'white' }}>{t.name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>{t.city}</div>
                  </div>
                </div>
                <div className="stars" style={{ fontSize: '12px' }}>★★★★★</div>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.65', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                "{t.text}"
              </p>
              <div style={{ marginTop: '12px', fontSize: '11px', color: t.color, fontWeight: '600' }}>
                {t.service} ✓
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
