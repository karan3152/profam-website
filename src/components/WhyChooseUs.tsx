'use client'
import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 50000, suffix: '+', label: 'Happy Customers', icon: 'https://img.icons8.com/3d-fluency/94/thumb-up.png' },
  { value: 2000, suffix: '+', label: 'Verified Professionals', icon: 'https://img.icons8.com/3d-fluency/94/worker-male.png' },
  { value: 50, suffix: '+', label: 'Service Categories', icon: 'https://img.icons8.com/3d-fluency/94/toolbox.png' },
  { value: 4.9, suffix: '★', label: 'Average App Rating', icon: 'https://img.icons8.com/3d-fluency/94/star.png', isFloat: true },
]

const PROMISES = [
  { icon: 'https://img.icons8.com/3d-fluency/94/shield.png', title: 'Background Verified', desc: 'Every Profam professional undergoes thorough background checks, identity verification, and skill assessments before being onboarded.' },
  { icon: 'https://img.icons8.com/3d-fluency/94/money-bag.png', title: 'Transparent Pricing', desc: 'See the exact price before booking. No hidden charges, no last-minute surprises. What you see is what you pay.' },
  { icon: 'https://img.icons8.com/3d-fluency/94/ok.png', title: 'Satisfaction Guarantee', desc: 'Not happy with the service? We\'ll send another professional for free or give you a full refund. Your satisfaction is our commitment.' },
  { icon: 'https://img.icons8.com/3d-fluency/94/flash-on.png', title: 'On-Time, Every Time', desc: 'Our professionals are trained to arrive within the scheduled window. Real-time tracking ensures you\'re always in the know.' },
  { icon: 'https://img.icons8.com/3d-fluency/94/lock.png', title: 'Secure Payments', desc: 'Pay only after the job is done, using our encrypted payment gateway. Your financial data is always protected.' },
  { icon: 'https://img.icons8.com/3d-fluency/94/phone.png', title: '24/7 Support', desc: 'Our customer support team is available round the clock via chat, call, or email to resolve any concern immediately.' },
]

function useCountUp(target: number, isFloat: boolean, started: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [started, target, isFloat])
  return count
}

function StatItem({ stat, started }: { stat: typeof STATS[0], started: boolean }) {
  const count = useCountUp(stat.value, stat.isFloat || false, started)
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>
        <img src={stat.icon} alt={stat.label} style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
      </div>
      <div className="stat-number gradient-text">
        {count}{stat.suffix}
      </div>
      <div style={{ fontSize: '14px', color: 'var(--color-text-muted)', marginTop: '8px', letterSpacing: '0.5px' }}>
        {stat.label}
      </div>
    </div>
  )
}

export default function WhyChooseUs() {
  const [hoveredPromise, setHoveredPromise] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.15 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="our-promise" ref={sectionRef} className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* BG gradient stripe */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, transparent, rgba(124, 58, 237, 0.05) 50%, transparent)'
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px',
          padding: '56px 48px',
          marginBottom: '80px',
          background: 'linear-gradient(135deg, rgba(0,198,255,0.06), rgba(124,58,237,0.06))',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '28px',
          position: 'relative', overflow: 'hidden'
        }} className="stats-grid">
          {/* BG orb */}
          <div style={{
            position: 'absolute', width: '300px', height: '300px',
            background: 'radial-gradient(circle, rgba(0,114,255,0.15), transparent)',
            borderRadius: '50%', top: '-100px', right: '-50px', pointerEvents: 'none'
          }} />
          {STATS.map((stat, i) => (
            <div key={stat.label} style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(20px)',
              transition: `all 0.6s ease ${i * 0.15}s`
            }}>
              <StatItem stat={stat} started={visible} />
            </div>
          ))}
        </div>

        {/* Why Choose Us Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="badge" style={{ marginBottom: '20px', justifyContent: 'center' }}>
            🤝 Our Promise
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: '700', color: 'white',
            lineHeight: '1.1', marginBottom: '20px',
            letterSpacing: '-1px'
          }}>
            Why Thousands Choose{' '}
            <span className="gradient-text">Profam</span>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--color-text-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: '1.7' }}>
            We've built our entire platform around trust, quality, and your peace of mind.
          </p>
        </div>

        {/* Promise Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {PROMISES.map((promise, i) => (
            <div
              key={promise.title}
              className="glass service-card"
              onMouseEnter={() => setHoveredPromise(i)}
              onMouseLeave={() => setHoveredPromise(null)}
              style={{
                padding: '32px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(30px)',
                transition: `all 0.7s ease ${i * 0.1}s`,
                border: hoveredPromise === i ? '1px solid rgba(0, 198, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{
                width: '56px', height: '56px',
                background: 'rgba(0, 198, 255, 0.1)',
                border: '1px solid rgba(0, 198, 255, 0.2)',
                borderRadius: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px',
                overflow: 'hidden'
              }}>
                <img src={promise.icon} alt={promise.title} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>
                {promise.title}
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                {promise.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          :global(.stats-grid) { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          :global(.stats-grid) { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
