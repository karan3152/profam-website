import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import WhyChooseUs from '@/components/WhyChooseUs'
import AppShowcase from '@/components/AppShowcase'
import Testimonials from '@/components/Testimonials'
import AppHero from '@/components/AppHero'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <Services />
        <div className="divider" />
        <HowItWorks />
        <div className="divider" />
        <WhyChooseUs />
        <div className="divider" />
        <AppShowcase />
        <div className="divider" />
        <Testimonials />
        <div className="divider" />
        <AppHero />
      </main>
      <Footer />
    </>
  )
}
