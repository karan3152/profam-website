'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const ALL_SERVICES = [
  { slug: 'full-home-cleaning', image: '/services/full-home-cleaning.jpg', title: 'Full Home Cleaning', desc: 'Complete deep cleaning of your home including floors, windows, and hard-to-reach areas. Perfect for move-in/move-out or festive preparations.', price: '₹399' },
  { slug: 'bathroom-cleaning', image: '/services/bathroom-cleaning.jpg', title: 'Bathroom Cleaning', desc: 'Thorough sanitization and deep cleaning of bathroom tiles, sinks, and fixtures. Removes tough stains, hard water marks, and 99.9% of germs.', price: '₹199' },
  { slug: 'fridge-cleaning', image: '/services/fridge-cleaning.jpg', title: 'Fridge Cleaning', desc: 'Hygienic deep cleaning of refrigerator interiors and exteriors. Removes odors, spills, and ensures your food stays fresh and safe.', price: '₹149' },
  { slug: 'appliance-repair', image: '/services/appliance-repair.jpg', title: 'Appliance Repair', desc: 'Expert diagnosis and repair for washing machines, microwaves, and other household appliances. Quick resolution by certified professionals.', price: '₹299' },
  { slug: 'ac-services', image: '/services/ac-services.jpg', title: 'AC Services & Repair', desc: 'Comprehensive AC servicing, gas refilling, and cooling issue repairs. Improves air quality and reduces your electricity bills instantly.', price: '₹349' },
  { slug: 'beauty-spa', image: '/services/beauty-spa.jpg', title: 'Beauty & Spa at Home', desc: 'Premium salon treatments delivered right to your doorstep. Relaxing facials, massages, and professional grooming by top-rated beauticians.', price: '₹499' },
  { slug: 'pest-control', image: '/services/pest-control.jpg', title: 'Pest Control Services', desc: 'Safe and effective elimination of cockroaches, termites, and other pests. Odorless, pet-friendly chemicals with long-lasting guarantees.', price: '₹599' },
]

export default function AllServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#FAFAFA', minHeight: '100vh', padding: '120px 32px 60px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Header */}
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#111827', letterSpacing: '-1px', marginBottom: '16px' }}>
              All <span style={{ color: '#3B2EA3' }}>Services</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}>
              Browse our complete catalog of premium home services. Click on any service to view detailed benefits and book instantly.
            </p>
          </div>

          {/* List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {ALL_SERVICES.map((service, i) => (
              <Link 
                href={`/service/${service.slug}`} 
                key={service.slug}
                style={{
                  display: 'flex', gap: '24px', alignItems: 'center',
                  background: '#FFFFFF', borderRadius: '20px', padding: '24px',
                  border: '1px solid #F3F4F6', textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)', transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(59,46,163,0.08)';
                  e.currentTarget.style.borderColor = '#C7D2FE';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)';
                  e.currentTarget.style.borderColor = '#F3F4F6';
                }}
              >
                {/* Left Side - Image */}
                <div style={{ width: '180px', flexShrink: 0, aspectRatio: '1', borderRadius: '16px', overflow: 'hidden', background: '#F9FAFB' }}>
                  <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* Right Side - Info */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#111827', margin: 0 }}>{service.title}</h2>
                    <div style={{ fontSize: '18px', fontWeight: '800', color: '#3B2EA3', background: '#EEF2FF', padding: '6px 16px', borderRadius: '50px' }}>
                      Starts at {service.price}
                    </div>
                  </div>
                  
                  <p style={{ fontSize: '16px', color: '#4B5563', lineHeight: '1.6', margin: 0, paddingRight: '20px' }}>
                    {service.desc}
                  </p>
                  
                  <div style={{ marginTop: '20px', color: '#3B2EA3', fontSize: '15px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    View details and book <span style={{ fontSize: '18px' }}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
