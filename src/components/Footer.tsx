'use client'

const FOOTER_LINKS = {
  'Services': ['Home Cleaning', 'Plumbing', 'Electrical', 'AC Services', 'Beauty & Spa', 'Carpentry', 'Pest Control', 'Painting'],
  'Company': ['About ProFom', 'How It Works', 'Our Promise', 'Careers', 'Press', 'Contact Us'],
  'Support': ['Help Center', 'Safety', 'Terms of Service', 'Privacy Policy', 'Refund Policy'],
  'Cities': ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad'],
}

export default function Footer() {
  return (
    <footer style={{
      background: '#FAFAFA',
      borderTop: '1px solid #E5E7EB',
      position: 'relative', overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 32px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '48px', marginBottom: '64px' }}>

          {/* Brand */}
          <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <img src="/logo.png" alt="ProFom Logo" style={{ height: '44px', borderRadius: '10px', objectFit: 'contain' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '26px', fontWeight: '800',
              color: '#111827', letterSpacing: '-0.5px'
            }}>Pro<span style={{ color: '#3B2EA3' }}>Fom</span></span>
          </div>
            <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.7', marginBottom: '24px', maxWidth: '280px' }}>
              India's most trusted home services platform. Connecting you with verified professionals for a seamless experience.
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: '𝕏', label: 'Twitter' },
                { icon: 'in', label: 'LinkedIn' },
                { icon: 'f', label: 'Facebook' },
                { icon: '▶', label: 'YouTube' },
              ].map(social => (
                <a
                  key={social.label}
                  href="#"
                  style={{
                    width: '36px', height: '36px',
                    background: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '13px', color: '#6B7280',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontWeight: '600'
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = '#EEF2FF'
                    ;(e.currentTarget as HTMLElement).style.borderColor = '#C7D2FE'
                    ;(e.currentTarget as HTMLElement).style.color = '#3B2EA3'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = '#FFFFFF'
                    ;(e.currentTarget as HTMLElement).style.borderColor = '#E5E7EB'
                    ;(e.currentTarget as HTMLElement).style.color = '#6B7280'
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 style={{
                fontSize: '13px', fontWeight: '800',
                color: '#111827', letterSpacing: '0.5px',
                textTransform: 'uppercase', marginBottom: '20px'
              }}>{category}</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {links.map(link => (
                  <li key={link}>
                    <a href="#" style={{
                      fontSize: '14px', color: '#6B7280',
                      textDecoration: 'none', fontWeight: '500',
                      transition: 'color 0.2s ease'
                    }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#3B2EA3'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#6B7280'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: '24px',
          padding: '32px 40px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '32px',
          flexWrap: 'wrap',
          marginBottom: '48px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
        }}>
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#111827', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Subscribe to our Newsletter
            </h4>
            <p style={{ fontSize: '14px', color: '#6B7280' }}>
              Get updates on new services, features, and exclusive offers.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexShrink: 0, flexWrap: 'wrap', width: '100%', maxWidth: '380px' }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                background: '#F9FAFB',
                border: '1px solid #E5E7EB',
                borderRadius: '12px',
                padding: '12px 20px',
                fontSize: '14px', color: '#111827',
                outline: 'none', width: '100%', flex: '1 1 200px',
                fontFamily: 'var(--font-body)'
              }}
            />
            <button style={{ 
              background: '#111827', color: 'white', border: 'none',
              padding: '12px 24px', borderRadius: '12px', fontSize: '14px', fontWeight: '700',
              cursor: 'pointer', whiteSpace: 'nowrap', flex: '1 1 auto'
            }}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ height: '1px', background: '#E5E7EB', marginBottom: '28px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontSize: '14px', color: '#6B7280' }}>
            © {new Date().getFullYear()} ProFom Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
              <a key={link} href="#" style={{ fontSize: '14px', color: '#6B7280', textDecoration: 'none', fontWeight: '500' }}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr 1fr !important; }
          footer > div > div:first-child > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
