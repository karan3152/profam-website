'use client'
import { useEffect, useRef, useState } from 'react'
import { EnvironmentOutlined, ToolOutlined, CalendarOutlined, StarOutlined, ClockCircleOutlined, RocketOutlined, HeartOutlined } from '@ant-design/icons'

const STEPS = [
  {
    num: '01',
    icon: <EnvironmentOutlined />,
    title: 'Enter Your Location',
    desc: 'Type your pincode or area. We\'ll show you all available services near you in real-time.',
    color: '#3B2EA3',
  },
  {
    num: '02',
    icon: <ToolOutlined />,
    title: 'Choose a Service',
    desc: 'Browse 50+ services with transparent pricing. No hidden charges, ever.',
    color: '#1E1B4B',
  },
  {
    num: '03',
    icon: <CalendarOutlined />,
    title: 'Pick a Time Slot',
    desc: 'Schedule at your convenience — same day, next day, or whenever suits you best.',
    color: '#3B2EA3',
  },
  {
    num: '04',
    icon: <StarOutlined />,
    title: 'Relax & Rate',
    desc: 'A verified professional arrives on time. After the job, rate your experience.',
    color: '#1E1B4B',
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
    <section id="how-it-works" ref={sectionRef} className="section" style={{
      background: 'linear-gradient(160deg, #F5F3FF 0%, #EEF2FF 100%)',
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Decorative */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59,46,163,0.06), transparent 70%)', borderRadius: '50%' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: '#EEF2FF', border: '1px solid #C7D2FE',
            padding: '5px 14px', borderRadius: '50px',
            fontSize: '13px', fontWeight: '600', color: '#3B2EA3',
            marginBottom: '16px'
          }}>
            ⚡ Simple Process
          </div>
          <h2 style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(30px, 4vw, 48px)',
            fontWeight: '800', color: '#111827',
            lineHeight: '1.1', letterSpacing: '-1.5px', marginBottom: '16px'
          }}>
            Booked in under <span style={{ color: '#3B2EA3' }}>60 seconds</span>
          </h2>
          <p style={{ fontSize: '17px', color: '#6B7280', maxWidth: '500px', margin: '0 auto', lineHeight: '1.6' }}>
            Our streamlined process means less hassle and faster service for your home.
          </p>
        </div>

        {/* Steps grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '32px 28px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(30px)',
                transition: `all 0.6s ease ${i * 0.12}s`,
                border: '1px solid #E5E7EB',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div style={{
                  position: 'absolute', top: '44px', right: '-24px',
                  width: '24px', height: '2px',
                  background: 'linear-gradient(90deg, #C7D2FE, transparent)',
                  zIndex: 10
                }} />
              )}

              {/* Step number */}
              <div style={{
                fontSize: '48px', fontWeight: '900', color: '#EEF2FF',
                lineHeight: '1', position: 'absolute', top: '16px', right: '20px',
                fontFamily: 'var(--font-body)'
              }}>{step.num}</div>

              {/* Icon circle */}
              <div style={{
                width: '56px', height: '56px', borderRadius: '14px',
                background: '#EEF2FF', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '26px', marginBottom: '20px'
              }}>
                {step.icon}
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111827', marginBottom: '10px', lineHeight: '1.3' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.7', margin: 0 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom stats bar */}
        <div style={{
          marginTop: '56px',
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '32px 40px',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px', border: '1px solid #E5E7EB',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
          opacity: visible ? 1 : 0,
          transition: 'all 0.8s ease 0.6s'
        }}>
          {[
            { val: '< 60s', label: 'Average booking time', icon: <ClockCircleOutlined /> },
            { val: '45 min', label: 'Pro arrives on average', icon: <RocketOutlined /> },
            { val: '98%', label: 'Customer satisfaction rate', icon: <HeartOutlined style={{ color: '#22c55e' }} /> },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{stat.icon}</div>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#3B2EA3', letterSpacing: '-1px', marginBottom: '6px' }}>{stat.val}</div>
              <div style={{ fontSize: '14px', color: '#6B7280' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
