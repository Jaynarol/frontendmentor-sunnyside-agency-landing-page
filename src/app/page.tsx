import Clients from '../components/Clients'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'

const Home = () => (
  <>
    <header className="h-[550px] bg-[#3ebfff] bg-mobileHeader bg-cover bg-bottom bg-no-repeat text-white md:h-[680px] md:bg-desktopHeader md:bg-contain ">
      <NavBar />
      <Hero />
    </header>
    <main>
      <Features />
      <Clients />
      <Gallery />
    </main>
    <Footer />
  </>
)

export default Home
