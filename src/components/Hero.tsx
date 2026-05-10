'use client'
import { useEffect, useRef, useState } from 'react'
import { Rate } from 'antd'

const SERVICES_TICKER = ['Home Cleaning', 'Plumbing', 'Electrical', 'AC Repair', 'Beauty & Spa', 'Carpentry', 'Pest Control', 'Painting']

const POPULAR_SERVICES = [
  { icon: '/services/full-home-cleaning.jpg', name: 'Cleaning', price: '₹399' },
  { icon: '/services/bathroom-cleaning.jpg', name: 'Bathroom', price: '₹199' },
  { icon: '/services/appliance-repair.jpg', name: 'Repair', price: '₹249' },
  { icon: '/services/ac-services.jpg', name: 'AC Service', price: '₹349' },
  { icon: '/services/beauty-spa.jpg', name: 'Beauty', price: '₹499' },
  { icon: '/services/pest-control.jpg', name: 'Pest Control', price: '₹599' },
]

export default function Hero() {
  const [currentService, setCurrentService] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [pincode, setPincode] = useState('')

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentService(prev => (prev + 1) % SERVICES_TICKER.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '72px',
      background: 'linear-gradient(160deg, #FFFFFF 0%, #F5F3FF 40%, #EEF2FF 100%)',
    }}>
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: '-120px', right: '-120px',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(59,46,163,0.08), transparent 70%)',
        borderRadius: '50%', zIndex: 0
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(59,46,163,0.05), transparent 70%)',
        borderRadius: '50%', zIndex: 0
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 32px', width: '100%', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '60px', alignItems: 'center' }}>

          {/* Left — Text & Search */}
          <div style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : 'translateY(30px)', transition: 'all 0.9s ease' }}>

            {/* Trust pill */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#EEF2FF', border: '1px solid #C7D2FE',
              padding: '6px 14px', borderRadius: '50px',
              fontSize: '13px', fontWeight: '600', color: '#3B2EA3',
              marginBottom: '28px'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 8px #22c55e' }} />
              Trusted by 50,000+ families across India
            </div>

            <h1 style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(40px, 5vw, 68px)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '12px',
              letterSpacing: '-2px',
              color: '#111827'
            }}>
              Home Services,<br />
              <span style={{ color: '#3B2EA3' }}>Done Right.</span>
            </h1>

            {/* Rotating tag */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{ color: '#6B7280', fontSize: '18px', fontWeight: '400' }}>Expert</span>
              <div style={{
                background: '#3B2EA3', borderRadius: '8px',
                padding: '4px 16px', overflow: 'hidden', minWidth: '190px'
              }}>
                <span key={currentService} style={{
                  fontSize: '18px', fontWeight: '700',
                  color: '#FFFFFF', display: 'block',
                  animation: 'fadeInUp 0.4s ease'
                }}>
                  {SERVICES_TICKER[currentService]}
                </span>
              </div>
              <span style={{ color: '#6B7280', fontSize: '18px', fontWeight: '400' }}>at your door</span>
            </div>

            <p style={{
              fontSize: '17px', lineHeight: '1.75',
              color: '#6B7280', marginBottom: '36px', maxWidth: '500px'
            }}>
              Book verified professionals in 60 seconds. Transparent pricing, background-checked experts, and a 100% satisfaction guarantee.
            </p>

            {/* Search / Location bar */}
            <div style={{
              background: '#FFFFFF',
              border: '2px solid #E5E7EB',
              borderRadius: '14px',
              padding: '8px',
              display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              marginBottom: '32px',
              maxWidth: '500px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1 1 200px', paddingLeft: '12px' }}>
                <span style={{ fontSize: '20px' }}>📍</span>
                <input
                  value={pincode}
                  onChange={e => setPincode(e.target.value)}
                  placeholder="Enter your pincode or area..."
                  style={{
                    flex: 1, border: 'none', outline: 'none',
                    fontSize: '15px', color: '#111827',
                    background: 'transparent', fontFamily: 'var(--font-body)', width: '100%'
                  }}
                />
              </div>
              <button style={{
                background: 'linear-gradient(135deg, #3B2EA3, #1E1B4B)',
                color: 'white', padding: '12px 24px', borderRadius: '10px',
                border: 'none', fontSize: '15px', fontWeight: '700', cursor: 'pointer',
                whiteSpace: 'nowrap', flex: '1 1 auto',
                boxShadow: '0 4px 12px rgba(59,46,163,0.3)'
              }}>
                Book Now →
              </button>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
              {[
                { icon: '✅', val: '50K+', label: 'Happy Customers' },
                { icon: '⭐', val: '4.9/5', label: 'Avg Rating' },
                { icon: '🛡️', val: '100%', label: 'Background Checked' },
              ].map(stat => (
                <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '18px' }}>{stat.icon}</span>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: '800', color: '#111827', lineHeight: '1' }}>{stat.val}</div>
                    <div style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '2px' }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual Card Stack */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '16px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateX(40px)',
            transition: 'all 1s ease 0.2s'
          }}>

            {/* Active booking card */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '20px 24px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
              border: '1px solid #F3F4F6',
              display: 'flex', alignItems: 'center', gap: '16px'
            }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                overflow: 'hidden'
              }}>
                <img src="/services/full-home-cleaning.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '13px', color: '#9CA3AF', marginBottom: '2px' }}>Confirmed booking</div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#111827' }}>Deep Home Cleaning</div>
                <div style={{ fontSize: '13px', color: '#22c55e', fontWeight: '600', marginTop: '2px' }}>⚡ Pro arriving in 45 minutes</div>
              </div>
              <div style={{ background: '#F0FDF4', borderRadius: '8px', padding: '4px 10px', fontSize: '12px', fontWeight: '700', color: '#16a34a' }}>LIVE</div>
            </div>

            {/* Quick service grid */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '20px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
              border: '1px solid #F3F4F6',
            }}>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#6B7280', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Popular Services</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '10px' }}>
                {POPULAR_SERVICES.map(s => (
                  <div key={s.name} style={{
                    background: '#F9FAFB',
                    borderRadius: '12px', padding: '12px 8px',
                    textAlign: 'center', cursor: 'pointer',
                    border: '1px solid #F3F4F6',
                    transition: 'all 0.2s ease'
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = '#EEF2FF'
                      ;(e.currentTarget as HTMLElement).style.borderColor = '#C7D2FE'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = '#F9FAFB'
                      ;(e.currentTarget as HTMLElement).style.borderColor = '#F3F4F6'
                    }}
                  >
                    <div style={{ width: '100%', aspectRatio: '1', borderRadius: '8px', overflow: 'hidden', marginBottom: '8px' }}>
                      <img src={s.icon} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ fontSize: '11px', fontWeight: '700', color: '#374151' }}>{s.name}</div>
                    <div style={{ fontSize: '10px', color: '#3B2EA3', fontWeight: '600', marginTop: '2px' }}>{s.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rating card */}
            <div style={{
              background: 'linear-gradient(135deg, #3B2EA3, #1E1B4B)',
              borderRadius: '20px', padding: '18px 24px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: '16px',
              boxShadow: '0 8px 32px rgba(59,46,163,0.3)'
            }}>
              <div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>Customer Satisfaction</div>
                <div style={{ fontSize: '28px', fontWeight: '800', color: '#FFFFFF', lineHeight: '1', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  4.9 <Rate disabled allowHalf defaultValue={4.9} style={{ fontSize: '20px', color: '#FBBF24', margin: 0 }} />
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>74,712 ratings</div>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>This Month</div>
                <div style={{ fontSize: '28px', fontWeight: '800', color: '#FFFFFF', lineHeight: '1' }}>8,240</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>bookings done</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        animation: 'float 2s ease-in-out infinite'
      }}>
        <span style={{ fontSize: '11px', color: '#9CA3AF', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
        <svg width="20" height="20" fill="none" stroke="#9CA3AF" strokeWidth="2">
          <path d="M10 4v12M4 10l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
