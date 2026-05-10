'use client'

export default function AppHero() {
  return (
    <>
      <style>{`
        .hero-section {
          background: url("/hero-bg.png") center/cover no-repeat, #FAFAFA;
        }
        @media (max-width: 768px) {
          .hero-section {
            background: url("/hero-bg.png") bottom/contain no-repeat, #FAFAFA !important;
            padding-bottom: 250px !important;
          }
        }
      `}</style>
      <section className="hero-section" style={{
        padding: '120px 0 100px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <div style={{ 
        maxWidth: '550px', 
        margin: '0 auto', 
        padding: '0 20px', 
        position: 'relative', 
        zIndex: 10
      }}>
        
        {/* Title Group */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: '900',
            color: '#111827',
            marginBottom: '12px',
            fontFamily: 'var(--font-body)',
            lineHeight: '1.2',
            letterSpacing: '-1px',
            textShadow: '0px 0px 12px rgba(255,255,255,0.9), 0px 0px 24px rgba(255,255,255,0.8)'
          }}>
            India's First Quick Service App
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#374151',
            maxWidth: '450px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '600',
            textShadow: '0px 0px 8px rgba(255,255,255,0.9)'
          }}>
            On-demand home services to empower urban households
          </p>
        </div>

        {/* Rating */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '8px' }}>
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: '#F43F5E', fontSize: '24px' }}>★</span>
            ))}
          </div>
          <p style={{ fontSize: '15px', color: '#6B7280', fontWeight: '500' }}>
            <span style={{ color: '#111827', fontWeight: '700' }}>4.8</span> • 74,712 Ratings Combined
          </p>
        </div>

        {/* Store Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="#" style={{ 
            background: '#000000', 
            padding: '12px 24px', 
            borderRadius: '12px', 
            color: 'white', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            textDecoration: 'none',
            transition: 'transform 0.3s ease',
            border: '1px solid rgba(255,255,255,0.1)'
          }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <img src="https://img.icons8.com/color/48/google-play.png" alt="" style={{ width: '24px' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', opacity: 0.7 }}>Get it on</div>
              <div style={{ fontSize: '16px', fontWeight: '700' }}>Google Play</div>
            </div>
          </a>
          <a href="#" style={{ 
            background: '#000000', 
            padding: '12px 24px', 
            borderRadius: '12px', 
            color: 'white', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            textDecoration: 'none',
            transition: 'transform 0.3s ease',
            border: '1px solid rgba(255,255,255,0.1)'
          }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <img src="https://img.icons8.com/ios-filled/50/ffffff/apple-app-store--v1.png" alt="" style={{ width: '24px' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', opacity: 0.7 }}>Download on the</div>
              <div style={{ fontSize: '16px', fontWeight: '700' }}>App Store</div>
            </div>
          </a>
        </div>
      </div>
      </section>
    </>
  )
}
