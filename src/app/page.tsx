import Image from 'next/image'
import Hero from './landingpage/hero'
import Features from './landingpage/features'
import Contact from './landingpage/contact'
import Footer from './landingpage/footer'
import Header from './landingpage/header'



export default function Home() {
  return (
<main>
<Header />
<Hero />
<Features />
<Contact />
<Footer />
</main>

  )
}
