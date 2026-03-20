import { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Stars from './components/Stars'
import MouseTrail from './components/MouseTrail'
import Home from './pages/Home'
import FAQPage from './pages/FAQPage'
import PrizeGrid from './components/PrizeGrid'
import ChallengeGrid from './components/ChallengeGrid'
import Gallery from './components/Gallery'

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.scroll-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function PrizePage() {
  return <section className="section"><Link to="/" className="nav-link">← Home</Link><PrizeGrid /></section>
}

function ChallengePage() {
  return <section className="section"><Link to="/" className="nav-link">← Home</Link><ChallengeGrid /></section>
}

function GalleryPage() {
  return <section className="section"><Link to="/" className="nav-link">← Home</Link><Gallery /></section>
}

export default function App() {
  useScrollReveal()

  return (
    <div className="app">
      <Stars />
      <MouseTrail />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/prizes" element={<PrizePage />} />
          <Route path="/challenges" element={<ChallengePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}