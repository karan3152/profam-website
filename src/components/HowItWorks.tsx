'use client'
import { useEffect, useRef, useState } from 'react'

const STEPS = [
  {
    number: '01',
    title: 'Download & Sign Up',
    desc: 'Get the Profam app on iOS or Android. Create your account in under 60 seconds — just your name, phone, and location.',
    icon: 'https://img.icons8.com/3d-fluency/94/smartphone.png',
    detail: 'Available on App Store & Google Play'
  },
  {
    number: '02',
    title: 'Choose Your Service',
    desc: 'Browse 50+ home services. Filter by category, read detailed descriptions, and see transparent upfront pricing — no surprises.',
    icon: 'https://img.icons8.com/3d-fluency/94/star.png',
    detail: '50+ services available'
  },
  {
    number: '03',
    title: 'Pick a Time Slot',
    desc: 'Schedule at your convenience — same-day, next-day, or up to 30 days ahead. We work 7 days a week, 7am–10pm.',
    icon: 'https://img.icons8.com/3d-fluency/94/calendar.png',
    detail: 'Available 7 days a week'
  },
  {
    number: '04',
    title: 'Pro Arrives & Works',
    desc: 'Your verified professional arrives on time, equipped with all necessary tools. Track them live on the map as they approach.',
    icon: 'https://img.icons8.com/3d-fluency/94/rocket.png',
    detail: 'Live GPS tracking'
  },
  {
    number: '05',
    title: 'Pay & Rate',
    desc: 'Pay securely via UPI, card, or wallet after the job is done. Rate your experience to help our quality control.',
    icon: 'https://img.icons8.com/3d-fluency/94/star.png',
    detail: '100% secure payments'
  },
]

export default function HowItWorks() {
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
    <section id="how-it-works" ref={sectionRef} className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* BG */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, transparent, rgba(0, 114, 255, 0.04) 50%, transparent)',
      }} />
      <div className="orb orb-purple" style={{ width: '600px', height: '600px', bottom: '-200px', left: '-200px', opacity: 0.06 }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="badge" style={{ marginBottom: '20px', justifyContent: 'center' }}>
            ⚡ Simple Process
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: '700', color: 'white',
            lineHeight: '1.1', marginBottom: '20px',
            letterSpacing: '-1px'
          }}>
            Book in <span className="gradient-text">5 Easy Steps</span>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--color-text-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: '1.7' }}>
            We've made the experience beautifully simple. From tap to doorstep in minutes.
          </p>
        </div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute', left: '27px', top: '28px',
            width: '3px', height: 'calc(100% - 56px)',
            background: 'linear-gradient(180deg, #00c6ff, #0072ff, #7c3aed)',
            borderRadius: '2px',
            opacity: visible ? 0.4 : 0,
            transition: 'opacity 1s ease 0.5s'
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '56px 1fr',
                  gap: '32px',
                  alignItems: 'flex-start',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'none' : 'translateX(-30px)',
                  transition: `all 0.7s ease ${i * 0.15}s`
                }}
              >
                {/* Step number */}
                <div className="step-number">
                  {i + 1}
                </div>

                {/* Content */}
                <div className="glass" style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}>
                  {/* Background emoji large */}
                  <div style={{
                    position: 'absolute', right: '24px', top: '50%',
                    transform: 'translateY(-50%)',
                    opacity: 0.06,
                    filter: 'blur(2px)'
                  }}>
                    <img src={step.icon} alt="" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                  </div>

                  <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '48px', height: '48px',
                      background: 'rgba(0, 198, 255, 0.1)',
                      border: '1px solid rgba(0, 198, 255, 0.2)',
                      borderRadius: '14px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <img src={step.icon} alt="" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '11px', letterSpacing: '2px',
                        color: 'var(--color-accent)', fontWeight: '600',
                        marginBottom: '8px', textTransform: 'uppercase'
                      }}>Step {step.number}</div>
                      <h3 style={{
                        fontSize: '22px', fontWeight: '700', color: 'white',
                        marginBottom: '10px', fontFamily: 'var(--font-body)'
                      }}>{step.title}</h3>
                      <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '12px' }}>
                        {step.desc}
                      </p>
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        fontSize: '13px', color: 'var(--color-accent)',
                        background: 'rgba(0, 198, 255, 0.08)',
                        padding: '4px 12px', borderRadius: '20px',
                        border: '1px solid rgba(0, 198, 255, 0.2)'
                      }}>
                        <span style={{ fontSize: '10px' }}>●</span>
                        {step.detail}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: '64px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(0,198,255,0.08), rgba(124,58,237,0.08))',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '28px',
          padding: '48px',
        }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', color: 'white', marginBottom: '8px' }}>
            Ready to experience the{' '}
            <span className="gradient-text">Profam difference?</span>
          </p>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '28px' }}>
            Your first booking comes with a satisfaction guarantee.
          </p>
          <a href="#download" className="btn-primary" style={{ textDecoration: 'none' }}>
            Get Started Free →
          </a>
        </div>
      </div>
    </section>
  )
}
