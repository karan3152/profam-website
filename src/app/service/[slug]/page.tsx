'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// In a real app, this data would come from a database or CMS.
const SERVICES_DATA = {
  'full-home-cleaning': {
    title: 'Full Home Cleaning',
    image: 'https://img.icons8.com/3d-fluency/188/vacuum-cleaner.png',
    price: '₹399',
    benefits: [
      { icon: '✨', title: 'Spotless Guarantee', desc: 'We clean every nook and cranny. If you find a spot we missed, we redo it for free.' },
      { icon: '🌿', title: 'Eco-Friendly Products', desc: 'Safe for kids, pets, and the environment. No harsh chemicals used.' },
      { icon: '⏰', title: 'Saves You 4+ Hours', desc: 'Get your weekend back. We do the heavy lifting while you relax.' }
    ]
  },
  'ac-services': {
    title: 'AC Services & Repair',
    image: 'https://img.icons8.com/3d-fluency/188/air-conditioner.png',
    price: '₹349',
    benefits: [
      { icon: '❄️', title: 'Better Cooling', desc: 'Restore your AC to factory-level cooling efficiency immediately.' },
      { icon: '⚡', title: 'Lower Power Bills', desc: 'A clean, well-serviced AC consumes up to 25% less electricity.' },
      { icon: '🛡️', title: '30-Day Warranty', desc: 'All repairs come with a standard 30-day warranty on parts and labor.' }
    ]
  }
}

// Fallback for services not fully defined above
const DEFAULT_SERVICE = {
  title: 'Premium Home Service',
  image: 'https://img.icons8.com/3d-fluency/188/home.png',
  price: 'Varies',
  benefits: [
    { icon: '👷', title: 'Expert Professionals', desc: 'Highly trained, background-verified experts at your doorstep.' },
    { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden costs. You pay exactly what you see.' },
    { icon: '📅', title: 'Flexible Scheduling', desc: 'Book for right now, or schedule for later. We work around your time.' }
  ]
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  // Try to find the specific service, otherwise use the generic fallback
  const baseService = SERVICES_DATA[params.slug as keyof typeof SERVICES_DATA] || {
    ...DEFAULT_SERVICE,
    title: params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  const service = {
    ...baseService,
    image: `/services/${params.slug}.jpg`
  }

  return (
    <>
      <Navbar />
      <main style={{ background: '#FAFAFA', minHeight: '100vh', padding: '120px 32px 60px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Back Button & Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <Link href="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#FFFFFF', color: '#111827',
              padding: '8px 16px', borderRadius: '10px', fontSize: '14px',
              fontWeight: '600', textDecoration: 'none', border: '1px solid #E5E7EB',
              boxShadow: '0 2px 4px rgba(0,0,0,0.02)', transition: 'all 0.2s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#F9FAFB';
              e.currentTarget.style.borderColor = '#D1D5DB';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.borderColor = '#E5E7EB';
            }}
            >
              <span style={{ fontSize: '18px', lineHeight: 1 }}>←</span> Back
            </Link>
            <div style={{ width: '1px', height: '24px', background: '#E5E7EB' }} />
            <div style={{ fontSize: '14px', color: '#6B7280' }}>
              <Link href="/" style={{ color: '#6B7280', textDecoration: 'none' }}>Home</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: '#111827', fontWeight: '600' }}>{service.title}</span>
            </div>
          </div>

          {/* Hero Section */}
          <div style={{ 
            background: '#FFFFFF', borderRadius: '24px', padding: '48px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid #F3F4F6',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center',
            marginBottom: '40px'
          }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: '#EEF2FF', border: '1px solid #C7D2FE',
                padding: '5px 14px', borderRadius: '50px',
                fontSize: '13px', fontWeight: '700', color: '#3B2EA3',
                marginBottom: '16px'
              }}>
                ⭐ Top Rated Service
              </div>
              <h1 style={{ fontSize: '48px', fontWeight: '800', color: '#111827', marginBottom: '16px', lineHeight: '1.1', letterSpacing: '-1px' }}>
                {service.title}
              </h1>
              <p style={{ fontSize: '18px', color: '#6B7280', marginBottom: '32px', lineHeight: '1.6' }}>
                Experience the ultimate convenience with our professional {service.title.toLowerCase()} service. Book now and let our experts handle the rest.
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <div>
                  <div style={{ fontSize: '13px', color: '#6B7280', fontWeight: '600', marginBottom: '4px' }}>Starting from</div>
                  <div style={{ fontSize: '28px', fontWeight: '800', color: '#3B2EA3' }}>{service.price}</div>
                </div>
                <button style={{
                  background: '#111827', color: 'white', border: 'none',
                  padding: '16px 32px', borderRadius: '12px', fontSize: '16px', fontWeight: '700',
                  cursor: 'pointer', transition: 'transform 0.2s ease',
                  boxShadow: '0 8px 20px rgba(17,24,39,0.2)'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                >
                  Book Now
                </button>
              </div>
            </div>

            <div style={{ borderRadius: '20px', overflow: 'hidden', display: 'flex', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
              <img src={service.image} alt={service.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>

          {/* Benefits Section */}
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#111827', marginBottom: '24px', letterSpacing: '-0.5px' }}>
              Why choose this service?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {service.benefits.map((benefit, i) => (
                <div key={i} style={{ 
                  background: '#FFFFFF', borderRadius: '16px', padding: '32px',
                  border: '1px solid #F3F4F6', boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                }}>
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>{benefit.icon}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>{benefit.title}</h3>
                  <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.6', margin: 0 }}>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
