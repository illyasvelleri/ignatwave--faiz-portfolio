import Image from "next/image";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Work from './components/Work'
import TechStack from './components/TechSack'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechMarquee />
      <Services />
      <WhyUs />
      <Work />
      <TechStack />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}