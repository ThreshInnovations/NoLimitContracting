import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandSplit from './components/BrandSplit'
import AboutSplit from './components/AboutSplit'
import Services from './components/Services'
import SocialStrip from './components/SocialStrip'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BrandSplit />
      <AboutSplit />
      <Services />
      <SocialStrip />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
