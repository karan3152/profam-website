'use client'

const FOOTER_LINKS = {
  'Services': ['Home Cleaning', 'Plumbing', 'Electrical', 'AC Services', 'Beauty & Spa', 'Carpentry', 'Pest Control', 'Painting'],
  'Company': ['About Profam', 'How It Works', 'Our Promise', 'Careers', 'Press', 'Contact Us'],
  'Support': ['Help Center', 'Safety', 'Terms of Service', 'Privacy Policy', 'Refund Policy'],
  'Cities': ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad'],
}

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-bg-2)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Top section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 32px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '48px', marginBottom: '64px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{
                width: '44px', height: '44px',
                background: 'linear-gradient(135deg, #00c6ff, #0072ff)',
                borderRadius: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px', fontWeight: '800', color: 'white',
                fontFamily: 'var(--font-display)',
                boxShadow: '0 6px 20px rgba(0, 114, 255, 0.4)'
              }}>P</div>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '28px', fontWeight: '700',
                color: 'white', letterSpacing: '-0.5px'
              }}>Profam</span>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '24px', maxWidth: '260px' }}>
              India's most trusted home services platform. Connecting you with verified professionals for a better home life.
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
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '13px', color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontWeight: '600'
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0,198,255,0.15)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,198,255,0.3)'
                    ;(e.currentTarget as HTMLElement).style.color = 'var(--color-accent)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'
                    ;(e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'
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
                fontSize: '13px', fontWeight: '700',
                color: 'white', letterSpacing: '1px',
                textTransform: 'uppercase', marginBottom: '20px'
              }}>{category}</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map(link => (
                  <li key={link}>
                    <a href="#" style={{
                      fontSize: '14px', color: 'var(--color-text-muted)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)'}
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
          background: 'linear-gradient(135deg, rgba(0,198,255,0.08), rgba(0,114,255,0.06))',
          border: '1px solid rgba(0,198,255,0.15)',
          borderRadius: '20px',
          padding: '32px 40px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '32px',
          flexWrap: 'wrap',
          marginBottom: '48px'
        }}>
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Get exclusive offers & updates <img src="https://img.icons8.com/3d-fluency/94/gift.png" alt="" style={{width: '24px'}} />
            </h4>
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
              Join 50K+ subscribers for tips, offers and new service alerts.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0', flexShrink: 0 }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRight: 'none',
                borderRadius: '50px 0 0 50px',
                padding: '12px 20px',
                fontSize: '14px', color: 'white',
                outline: 'none', width: '240px',
                fontFamily: 'var(--font-body)'
              }}
            />
            <button className="btn-primary" style={{ borderRadius: '0 50px 50px 0', whiteSpace: 'nowrap' }}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider" style={{ marginBottom: '28px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
            © {new Date().getFullYear()} Profam Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy', 'Terms', 'Cookies'].map(link => (
              <a key={link} href="#" style={{ fontSize: '13px', color: 'var(--color-text-muted)', textDecoration: 'none' }}>
                {link}
              </a>
            ))}
          </div>
          <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Made with <img src="https://img.icons8.com/3d-fluency/94/star.png" alt="" style={{width: '16px'}} /> in India
          </p>
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
