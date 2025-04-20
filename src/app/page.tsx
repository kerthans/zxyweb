import Hero from '@/components/hero'
import Products from '@/components/products'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'
import Pricing from '@/components/pricing'
import Contact from '@/components/contact'

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