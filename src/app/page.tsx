import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'

export default function Home() {
  return (
      <div className="container mx-auto px-4">
        <Hero />
        <Products />
        <Features />
        <Testimonials />
        <Pricing />
        <Contact />
      </div>
  )
}