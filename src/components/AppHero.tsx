'use client'
import { useEffect, useState } from 'react'

export default function AppHero() {
  const [shirtColor, setShirtColor] = useState('#3B2EA3') // Start with Royal Blue

  useEffect(() => {
    const colors = ['#3B2EA3', '#FFFFFF']
    let i = 0
    const interval = setInterval(() => {
      i = (i + 1) % colors.length
      setShirtColor(colors[i])
    }, 3000) // Change every 3 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{
      padding: '100px 0 60px',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF1F2 100%)',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center'
    }}>
      {/* Sparkles/Stars in background */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[...Array(12)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            width: '12px',
            height: '12px',
            color: '#F43F5E',
            opacity: 0.4,
            animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`
          }}>✦</div>
        ))}
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 10 }}>
        
        {/* Title Group */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 64px)',
            fontWeight: '800',
            color: '#111827',
            marginBottom: '16px',
            fontFamily: 'var(--font-body)',
            lineHeight: '1.1',
            letterSpacing: '-1px'
          }}>
            India's First Quick Service<br />App
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#4B5563',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
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

      {/* Characters on sides */}
      {/* Left 1: Ironing */}
      <div className="character" style={{
        position: 'absolute', bottom: '40px', left: '5%',
        width: '240px', height: '320px',
        opacity: 0.9
      }}>
        <CharacterSVG type="iron" shirtColor={shirtColor} />
      </div>

      {/* Left 2: Ladder/Dusting */}
      <div className="character hidden-mobile" style={{
        position: 'absolute', bottom: '100px', left: '20%',
        width: '200px', height: '400px',
        opacity: 0.9
      }}>
        <CharacterSVG type="ladder" shirtColor={shirtColor} />
      </div>

      {/* Right 1: Cleaning window */}
      <div className="character hidden-mobile" style={{
        position: 'absolute', bottom: '100px', right: '20%',
        width: '220px', height: '380px',
        opacity: 0.9
      }}>
        <CharacterSVG type="window" shirtColor={shirtColor} />
      </div>

      {/* Right 2: Sweeping */}
      <div className="character" style={{
        position: 'absolute', bottom: '40px', right: '5%',
        width: '240px', height: '320px',
        opacity: 0.9
      }}>
        <CharacterSVG type="sweep" shirtColor={shirtColor} />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(10deg); }
        }
        @media (max-width: 1024px) {
          .hidden-mobile { display: none; }
        }
      `}</style>
    </section>
  )
}

function CharacterSVG({ type, shirtColor }: { type: string, shirtColor: string }) {
  const isWhite = shirtColor === '#FFFFFF'
  const accentColor = isWhite ? '#3B2EA3' : '#FFFFFF'

  // Common styles
  const skin = '#8D5524'
  const hair = '#111827'
  const pants = '#1F2937'

  return (
    <svg viewBox="0 0 200 300" style={{ width: '100%', height: '100%', transition: 'all 0.8s ease' }}>
      {/* Body / Shirt */}
      <path 
        d="M80,100 L120,100 L130,180 L70,180 Z" 
        fill={shirtColor} 
        stroke={isWhite ? '#3B2EA3' : 'none'} 
        strokeWidth="1"
      />
      
      {/* ProFam Label on shirt */}
      <text x="100" y="140" textAnchor="middle" fontSize="8" fontWeight="800" fill={accentColor} style={{ fontFamily: 'var(--font-body)', transition: 'fill 0.8s ease' }}>ProFam</text>

      {/* Head */}
      <circle cx="100" cy="70" r="25" fill={skin} />
      <path d="M75,70 Q75,40 100,40 Q125,40 125,70" fill={hair} />
      {/* Ponytail */}
      <path d="M125,70 Q145,90 135,110" fill={hair} stroke={hair} strokeWidth="8" strokeLinecap="round" />

      {/* Pants */}
      <path d="M70,180 L130,180 L135,280 L110,280 L100,200 L90,280 L65,280 Z" fill={pants} />

      {/* Specific accessories based on type */}
      {type === 'iron' && (
        <>
          <path d="M40,200 L160,200 L150,210 L50,210 Z" fill="#E5E7EB" /> {/* Ironing board */}
          <rect x="70" y="180" width="40" height="20" fill="#3B2EA3" rx="4" /> {/* Iron */}
          <path d="M70,180 Q60,160 80,160" stroke={shirtColor} strokeWidth="6" fill="none" /> {/* Arm */}
        </>
      )}

      {type === 'ladder' && (
        <>
          <path d="M50,280 L70,50 M130,280 L110,50 M60,100 L120,100 M60,150 L120,150 M60,200 L120,200" stroke="#94A3B8" strokeWidth="4" /> {/* Ladder */}
          <path d="M120,130 Q140,110 160,110" stroke={shirtColor} strokeWidth="8" fill="none" strokeLinecap="round" /> {/* Arm reaching up */}
          <path d="M160,110 L170,90" stroke="#FBBF24" strokeWidth="12" strokeLinecap="round" /> {/* Duster */}
        </>
      )}

      {type === 'window' && (
        <>
          <path d="M130,130 Q160,130 160,130" stroke={shirtColor} strokeWidth="8" fill="none" strokeLinecap="round" /> {/* Arm */}
          <rect x="155" y="110" width="30" height="40" fill="rgba(0,198,255,0.2)" stroke="#00c6ff" strokeWidth="1" /> {/* Window */}
          <circle cx="165" cy="125" r="5" fill="#3B2EA3" /> {/* Spray bottle */}
        </>
      )}

      {type === 'sweep' && (
        <>
          <path d="M130,160 Q150,180 160,220" stroke={shirtColor} strokeWidth="8" fill="none" strokeLinecap="round" /> {/* Arm */}
          <line x1="160" y1="100" x2="160" y2="280" stroke="#78350F" strokeWidth="4" /> {/* Broom handle */}
          <path d="M145,280 L175,280 L180,300 L140,300 Z" fill="#FDE68A" /> {/* Broom head */}
        </>
      )}
    </svg>
  )
}
