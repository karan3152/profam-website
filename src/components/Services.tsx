'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Modal } from 'antd'

const SERVICES = [
  { slug: 'full-home-cleaning', image: '/services/full-home-cleaning.jpg', title: 'Full Home Cleaning', desc: 'Deep cleaning by trained professionals using eco-friendly products.', price: 'From ₹399', popular: true },
  { slug: 'bathroom-cleaning', image: '/services/bathroom-cleaning.jpg', title: 'Bathroom Cleaning', desc: 'Sparkling clean bathrooms with specialized disinfectants.', price: 'From ₹199', popular: false },
  { slug: 'fridge-cleaning', image: '/services/fridge-cleaning.jpg', title: 'Fridge Cleaning', desc: 'Hygienic cleaning for your refrigerator and freezer.', price: 'From ₹149', popular: false },
  { slug: 'appliance-repair', image: '/services/appliance-repair.jpg', title: 'Appliance Repair', desc: 'Expert repair for all your household appliances.', price: 'From ₹299', popular: false },
  { slug: 'ac-services', image: '/services/ac-services.jpg', title: 'AC Services', desc: 'Servicing, gas refill, and expert AC repairs.', price: 'From ₹349', popular: true },
  { slug: 'beauty-spa', image: '/services/beauty-spa.jpg', title: 'Beauty & Spa', desc: 'Salon-grade treatments in the comfort of your home.', price: 'From ₹499', popular: false },
  { slug: 'pest-control', image: '/services/pest-control.jpg', title: 'Pest Control', desc: 'Effective and safe pest elimination services.', price: 'From ₹599', popular: false },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .services-header {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .view-all-btn {
            width: 100% !important;
            justify-content: center !important;
          }
          .bottom-cta {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 24px !important;
          }
          .bottom-cta-buttons {
            width: 100% !important;
            flex-direction: column !important;
          }
          .bottom-cta-buttons a {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
            display: flex !important;
          }
        }
      `}</style>
      <section id="services" ref={sectionRef} className="section" style={{ background: '#FFFFFF', position: 'relative' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: '#EEF2FF', border: '1px solid #C7D2FE',
            padding: '5px 14px', borderRadius: '50px',
            fontSize: '13px', fontWeight: '600', color: '#3B2EA3',
            marginBottom: '16px'
          }}>
            🏡 Our Services
          </div>
          <div className="services-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h2 style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(30px, 4vw, 48px)',
                fontWeight: '800', color: '#111827',
                lineHeight: '1.1', letterSpacing: '-1.5px',
                marginBottom: '12px'
              }}>
                Everything your home needs,<br />
                <span style={{ color: '#3B2EA3' }}>in one app.</span>
              </h2>
              <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6', maxWidth: '500px' }}>
                From deep cleaning to AC repair — book any service in under 60 seconds with transparent, upfront pricing.
              </p>
            </div>
            <Link href="/all-services" className="view-all-btn" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#F5F3FF', color: '#3B2EA3',
              padding: '12px 24px', borderRadius: '10px',
              fontSize: '14px', fontWeight: '700', textDecoration: 'none',
              border: '1px solid #C7D2FE', cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease'
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#EEF2FF'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#F5F3FF'}
            >
              View All 50+ Services →
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '16px'
        }}>
          {SERVICES.slice(0, 5).map((service, i) => (
            <Link
              href={`/service/${service.slug}`}
              key={service.title}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '12px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(20px)',
                transition: `all 0.5s ease ${i * 0.05}s`,
                border: hoveredIdx === i ? '2px solid #3B2EA3' : '2px solid #F3F4F6',
                boxShadow: hoveredIdx === i ? '0 8px 32px rgba(59,46,163,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
                display: 'flex', flexDirection: 'column', gap: '12px'
              }}
            >
              {/* Popular badge */}
              {service.popular && (
                <div style={{
                  position: 'absolute', top: '12px', right: '12px',
                  background: '#3B2EA3', borderRadius: '6px',
                  padding: '2px 8px', fontSize: '10px', fontWeight: '700',
                  color: 'white', letterSpacing: '0.3px'
                }}>POPULAR</div>
              )}

              {/* Image area */}
              <div style={{
                background: hoveredIdx === i ? '#EEF2FF' : '#F9FAFB',
                borderRadius: '14px', aspectRatio: '1',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden', transition: 'background 0.3s ease'
              }}>
                <img src={service.image} alt={service.title} style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transform: hoveredIdx === i ? 'scale(1.08)' : 'scale(1)',
                  transition: 'transform 0.4s ease'
                }} />
              </div>

              {/* Text */}
              <div style={{ padding: '4px 6px 6px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#111827', marginBottom: '6px', lineHeight: '1.3' }}>
                  {service.title}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#3B2EA3', fontWeight: '700', fontSize: '13px' }}>{service.price}</span>
                  <span style={{
                    color: hoveredIdx === i ? '#3B2EA3' : '#9CA3AF',
                    fontSize: '16px', transition: 'all 0.2s ease',
                    transform: hoveredIdx === i ? 'translateX(3px)' : 'none',
                    display: 'inline-block'
                  }}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="bottom-cta" style={{
          marginTop: '48px',
          background: 'linear-gradient(135deg, #3B2EA3, #1E1B4B)',
          borderRadius: '20px',
          padding: '32px 40px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '20px'
        }}>
          <div>
            <div style={{ fontSize: '22px', fontWeight: '800', color: '#FFFFFF', marginBottom: '6px' }}>
              Can't find what you're looking for?
            </div>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
              We offer 50+ services. Our team will help you book the right one.
            </p>
          </div>
          <div className="bottom-cta-buttons" style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
            <a href="tel:+911800000000" style={{
              background: 'rgba(255,255,255,0.15)', color: 'white',
              padding: '12px 24px', borderRadius: '10px', fontSize: '15px',
              fontWeight: '700', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)'
            }}>📞 Call Us</a>
            <a href="#download" style={{
              background: '#FFFFFF', color: '#3B2EA3',
              padding: '12px 24px', borderRadius: '10px', fontSize: '15px',
              fontWeight: '700', textDecoration: 'none'
            }}>Explore All Services →</a>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}
