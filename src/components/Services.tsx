'use client'
import { useEffect, useRef, useState } from 'react'

const SERVICES = [
  { icon: 'https://img.icons8.com/3d-fluency/94/broom.png', title: 'Home Cleaning', desc: 'Thorough deep cleaning by trained professionals using eco-friendly products.', price: 'From ₹399', color: '#00c6ff', popular: true },
  { icon: 'https://img.icons8.com/3d-fluency/94/wrench.png', title: 'Appliance Repair', desc: 'Quick fixes for all household appliances — washing machines, refrigerators, microwaves.', price: 'From ₹299', color: '#7c3aed', popular: false },
  { icon: 'https://img.icons8.com/3d-fluency/94/flash-on.png', title: 'Electrical', desc: 'Certified electricians for wiring, switchboards, fans, lights & safety checks.', price: 'From ₹249', color: '#f59e0b', popular: false },
  { icon: 'https://img.icons8.com/3d-fluency/94/plumbing.png', title: 'Plumbing', desc: 'Expert plumbers for leaks, pipe fitting, bathroom installations & more.', price: 'From ₹199', color: '#10b981', popular: false },
  { icon: 'https://img.icons8.com/3d-fluency/94/air-conditioner.png', title: 'AC Services', desc: 'AC installation, servicing, gas refilling & repair by certified technicians.', price: 'From ₹349', color: '#06b6d4', popular: true },
  { icon: 'https://img.icons8.com/3d-fluency/94/lotus.png', title: 'Beauty & Spa', desc: 'Salon-grade beauty treatments at home — facials, haircuts, massages & more.', price: 'From ₹499', color: '#ec4899', popular: false },
  { icon: 'https://img.icons8.com/3d-fluency/94/hammer.png', title: 'Carpentry', desc: 'Furniture assembly, custom woodwork, door/window repair & installations.', price: 'From ₹299', color: '#f97316', popular: false },
  { icon: 'https://img.icons8.com/3d-fluency/94/bug.png', title: 'Pest Control', desc: 'Safe & effective pest elimination for cockroaches, mosquitoes, rats & more.', price: 'From ₹599', color: '#84cc16', popular: false },
  { icon: 'https://img.icons8.com/3d-fluency/94/paint-roller.png', title: 'Painting', desc: 'Interior & exterior painting with premium paints and expert finishers.', price: 'From ₹8/sqft', color: '#a855f7', popular: false },
]

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
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
    <section id="services" ref={sectionRef} className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background orb */}
      <div className="orb orb-blue" style={{ width: '500px', height: '500px', top: '-100px', right: '-150px', opacity: 0.08 }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="badge" style={{ marginBottom: '20px', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="https://img.icons8.com/3d-fluency/94/home.png" alt="" style={{width: '20px'}} /> Our Services
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: '700', color: 'white',
            lineHeight: '1.1', marginBottom: '20px',
            letterSpacing: '-1px'
          }}>
            Everything Your Home{' '}
            <span className="gradient-text">Needs</span>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--color-text-muted)', maxWidth: '560px', margin: '0 auto', lineHeight: '1.7' }}>
            From deep cleaning to electrical work, our verified professionals handle it all — so you don't have to worry.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="service-card glass"
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                padding: '28px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(30px)',
                transition: `all 0.6s ease ${i * 0.07}s`,
                border: hoveredIdx === i ? `1px solid ${service.color}44` : '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Popular badge */}
              {service.popular && (
                <div style={{
                  position: 'absolute', top: '16px', right: '16px',
                  background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
                  borderRadius: '20px', padding: '4px 12px',
                  fontSize: '10px', fontWeight: '700',
                  color: 'white', letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}>Popular</div>
              )}

              {/* Hover glow */}
              {hoveredIdx === i && (
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(circle at 30% 40%, ${service.color}08, transparent 70%)`,
                  pointerEvents: 'none'
                }} />
              )}

              {/* Icon */}
              <div style={{
                width: '56px', height: '56px',
                background: `${service.color}18`,
                border: `1px solid ${service.color}30`,
                borderRadius: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '26px', marginBottom: '20px',
                transition: 'all 0.3s ease',
                boxShadow: hoveredIdx === i ? `0 8px 20px ${service.color}30` : 'none',
                overflow: 'hidden'
              }}>
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  style={{ 
                    width: '36px', 
                    height: '36px', 
                    objectFit: 'contain',
                    filter: hoveredIdx === i ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' : 'none',
                    transition: 'transform 0.3s ease'
                  }} 
                />
              </div>

              <h3 style={{
                fontSize: '19px', fontWeight: '700',
                color: 'white', marginBottom: '10px',
                fontFamily: 'var(--font-body)'
              }}>{service.title}</h3>

              <p style={{
                fontSize: '14px', color: 'var(--color-text-muted)',
                lineHeight: '1.7', marginBottom: '20px'
              }}>{service.desc}</p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: service.color, fontWeight: '700', fontSize: '15px' }}>
                  {service.price}
                </span>
                <div style={{
                  width: '32px', height: '32px',
                  background: `${service.color}18`,
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: service.color, fontSize: '16px',
                  transition: 'all 0.3s ease',
                  transform: hoveredIdx === i ? 'translateX(4px)' : 'none'
                }}>→</div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="#download" className="btn-outline" style={{ textDecoration: 'none' }}>
            View All 50+ Services →
          </a>
        </div>
      </div>
    </section>
  )
}
