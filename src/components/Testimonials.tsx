'use client'
import { useEffect, useRef, useState } from 'react'

const TESTIMONIALS = [
  { name: 'Priya Sharma', city: 'Mumbai', role: 'Working Professional', avatar: 'PS', rating: 5, service: 'Home Cleaning', text: 'Profam has literally changed my life. Coming home to a spotlessly clean apartment after a long day is amazing. The cleaner is so thorough and friendly.' },
  { name: 'Arjun Mehta', city: 'Delhi', role: 'Software Engineer', avatar: 'AM', rating: 5, service: 'Electrical Repair', text: 'Called at 9 PM for a broken power socket. The Profam electrician arrived in 40 minutes, fixed it in 20. Transparent billing. Absolutely recommended!' },
  { name: 'Kavitha Nair', city: 'Bangalore', role: 'Homemaker', avatar: 'KN', rating: 5, service: 'Beauty & Spa', text: 'Booked a home salon for my mother\'s birthday. The beautician was so professional. Full facial, hair spa, pedicure — better than actual salons!' },
  { name: 'Rohit Singhania', city: 'Pune', role: 'Business Owner', avatar: 'RS', rating: 5, service: 'AC Service', text: 'My AC broke in peak summer. Profam had a technician at my place within 2 hours. He serviced the unit and gave a detailed health report. Worth every rupee.' },
  { name: 'Sunita Gupta', city: 'Hyderabad', role: 'Teacher', avatar: 'SG', rating: 5, service: 'Pest Control', text: 'Had a cockroach problem for months. Profam\'s certified team treated the entire house with pet-safe products. 3 months later — not a single cockroach!' },
  { name: 'Deepak Verma', city: 'Chennai', role: 'Doctor', avatar: 'DV', rating: 5, service: 'Plumbing', text: 'Plumber fixed the kitchen pipe in 30 minutes with zero mess. Even spotted a potential issue in the bathroom. Proactive and skilled — exactly what you want.' },
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

  const active = TESTIMONIALS[activeIdx]

  return (
    <section id="testimonials" ref={sectionRef} className="section" style={{ background: '#F9FAFB' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: '#EEF2FF', border: '1px solid #C7D2FE',
            padding: '5px 14px', borderRadius: '50px',
            fontSize: '13px', fontWeight: '600', color: '#3B2EA3',
            marginBottom: '16px'
          }}>
            💬 Customer Reviews
          </div>
          <h2 style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(30px, 4vw, 48px)',
            fontWeight: '800', color: '#111827',
            letterSpacing: '-1.5px', marginBottom: '12px'
          }}>
            50,000+ happy <span style={{ color: '#3B2EA3' }}>homes.</span>
          </h2>
          <p style={{ fontSize: '17px', color: '#6B7280', maxWidth: '460px', margin: '0 auto' }}>
            Don't just take our word for it.
          </p>
        </div>

        {/* Featured big testimonial */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '48px',
          marginBottom: '32px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
          border: '1px solid #F3F4F6',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(20px)',
          transition: 'all 0.7s ease'
        }}>
          <div style={{ fontSize: '64px', lineHeight: '1', color: '#EEF2FF', fontFamily: 'Georgia, serif', marginBottom: '4px' }}>"</div>
          <blockquote style={{
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            color: '#111827', lineHeight: '1.65',
            fontStyle: 'italic', marginBottom: '28px',
            fontFamily: 'Georgia, serif', fontWeight: '400'
          }}>
            {active.text}
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{
              width: '52px', height: '52px',
              background: 'linear-gradient(135deg, #3B2EA3, #1E1B4B)',
              borderRadius: '50%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '16px', fontWeight: '800', color: 'white'
            }}>{active.avatar}</div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: '800', color: '#111827' }}>{active.name}</div>
              <div style={{ fontSize: '13px', color: '#9CA3AF' }}>{active.role} · {active.city}</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#F59E0B', fontSize: '18px' }}>★</span>)}
            </div>
            <div style={{
              background: '#EEF2FF', border: '1px solid #C7D2FE',
              borderRadius: '8px', padding: '4px 12px',
              fontSize: '12px', fontWeight: '700', color: '#3B2EA3'
            }}>{active.service}</div>
          </div>
        </div>

        {/* Dot navigation */}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '40px' }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setActiveIdx(i)} style={{
              width: activeIdx === i ? '28px' : '8px', height: '8px',
              borderRadius: '4px', border: 'none', cursor: 'pointer',
              background: activeIdx === i ? '#3B2EA3' : '#D1D5DB',
              transition: 'all 0.3s ease', padding: 0
            }} />
          ))}
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} onClick={() => setActiveIdx(i)} style={{
              background: '#FFFFFF', borderRadius: '18px', padding: '24px',
              cursor: 'pointer', border: activeIdx === i ? '2px solid #3B2EA3' : '2px solid #F3F4F6',
              boxShadow: activeIdx === i ? '0 8px 28px rgba(59,46,163,0.1)' : '0 2px 8px rgba(0,0,0,0.04)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(20px)',
              transition: `all 0.5s ease ${i * 0.07}s`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '40px', height: '40px',
                    background: 'linear-gradient(135deg, #3B2EA3, #1E1B4B)',
                    borderRadius: '50%', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '12px', fontWeight: '800', color: 'white', flexShrink: 0
                  }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#111827' }}>{t.name}</div>
                    <div style={{ fontSize: '11px', color: '#9CA3AF' }}>{t.city}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1px' }}>
                  {[...Array(5)].map((_, j) => <span key={j} style={{ color: '#F59E0B', fontSize: '12px' }}>★</span>)}
                </div>
              </div>
              <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: '1.6', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '12px' }}>
                "{t.text}"
              </p>
              <div style={{ fontSize: '11px', color: '#3B2EA3', fontWeight: '700' }}>✔ {t.service}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
