import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { WhyUs } from './components/sections/WhyUs'
import { StatsCounter } from './components/sections/StatsCounter'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <StatsCounter />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
