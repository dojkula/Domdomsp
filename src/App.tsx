import { Component, ReactNode } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { WhyUs } from './components/sections/WhyUs'
import { StatsCounter } from './components/sections/StatsCounter'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'

class RootErrorBoundary extends Component<{ children: ReactNode }, { error: boolean }> {
  state = { error: false }
  static getDerivedStateFromError() { return { error: true } }
  render() {
    if (this.state.error) return (
      <div className="min-h-screen flex items-center justify-center bg-off">
        <p className="font-display text-navy-900 text-xl">Ups, prišlo je do napake. Osvežite stran.</p>
      </div>
    )
    return this.props.children
  }
}

function App() {
  return (
    <RootErrorBoundary>
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
    </RootErrorBoundary>
  )
}

export default App
