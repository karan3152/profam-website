'use client'
import { useEffect, useRef, useState } from 'react'

const REASONS = [
  { icon: '🔒', title: 'Background Verified Pros', desc: 'Every professional is police-verified, trained, and rated. Your safety is our top priority.' },
  { icon: '💰', title: 'Transparent Pricing', desc: 'See the full price before you book. Zero hidden charges, zero surprises.' },
  { icon: '⏰', title: 'On-Time, Every Time', desc: 'We guarantee punctuality. If your pro is late, you get a discount — automatically.' },
  { icon: '🔄', title: '100% Redo Guarantee', desc: 'Not satisfied? We\'ll send a pro back for free within 48 hours, no questions asked.' },
  { icon: '📱', title: 'Book in 60 Seconds', desc: 'Our app makes it ridiculously easy to book any service from anywhere, anytime.' },
  { icon: '🌱', title: 'Eco-Friendly Products', desc: 'We use green, safe, certified cleaning products that are good for your family and the planet.' },
]

const PARTNERS = [
  { name: 'Google', logo: 'https://img.icons8.com/color/96/google-logo.png' },
  { name: 'Amazon', logo: 'https://img.icons8.com/color/96/amazon.png' },
  { name: 'Swiggy', logo: 'https://img.icons8.com/color/96/swiggy-app.png' },
  { name: 'Razorpay', logo: 'https://img.icons8.com/color/96/razorpay.png' },
  { name: 'PhonePe', logo: 'https://img.icons8.com/color/96/phonepe.png' },
]

export default function WhyChooseUs() {
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
    <section id="why-choose-us" ref={sectionRef} className="section" style={{ background: '#FFFFFF' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: '#EEF2FF', border: '1px solid #C7D2FE',
            padding: '5px 14px', borderRadius: '50px',
            fontSize: '13px', fontWeight: '600', color: '#3B2EA3',
            marginBottom: '16px'
          }}>
            🏆 Why ProFom
          </div>
          <h2 style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(30px, 4vw, 48px)',
            fontWeight: '800', color: '#111827',
            lineHeight: '1.1', letterSpacing: '-1.5px', marginBottom: '16px'
          }}>
            The <span style={{ color: '#3B2EA3' }}>ProFom Promise</span>
          </h2>
          <p style={{ fontSize: '17px', color: '#6B7280', maxWidth: '520px', margin: '0 auto', lineHeight: '1.6' }}>
            We don't just send someone to your home. We send the right person, at the right time, with the right tools.
          </p>
        </div>

        {/* Reasons grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '72px' }}>
          {REASONS.map((reason, i) => (
            <div key={reason.title} style={{
              padding: '28px',
              borderRadius: '18px',
              border: '1px solid #F3F4F6',
              background: '#FAFAFA',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(20px)',
              transition: `all 0.5s ease ${i * 0.08}s`,
              cursor: 'default'
            }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#F5F3FF'
                el.style.borderColor = '#C7D2FE'
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 12px 32px rgba(59,46,163,0.08)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#FAFAFA'
                el.style.borderColor = '#F3F4F6'
                el.style.transform = 'none'
                el.style.boxShadow = 'none'
              }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: '#EEF2FF', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '24px', marginBottom: '16px'
              }}>
                {reason.icon}
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#111827', marginBottom: '8px' }}>{reason.title}</h3>
              <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.7', margin: 0 }}>{reason.desc}</p>
            </div>
          ))}
        </div>

        {/* Social proof big number strip */}
        <div style={{
          background: 'linear-gradient(135deg, #3B2EA3 0%, #1E1B4B 100%)',
          borderRadius: '24px',
          padding: '48px 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px',
          opacity: visible ? 1 : 0,
          transition: 'all 0.8s ease 0.5s'
        }}>
          {[
            { val: '50,000+', label: 'Satisfied Customers', icon: '😊' },
            { val: '2,000+', label: 'Verified Professionals', icon: '👷' },
            { val: '25+', label: 'Cities Covered', icon: '🏙️' },
            { val: '4.9 ★', label: 'Average App Rating', icon: '⭐' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{stat.icon}</div>
              <div style={{ fontSize: '36px', fontWeight: '900', color: '#FFFFFF', letterSpacing: '-1px', lineHeight: '1', marginBottom: '8px' }}>
                {stat.val}
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
