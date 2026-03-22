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
import TutorialsPage from './pages/TutorialsPage'

function useHideHeaderOnScroll() {
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const current = window.scrollY
      const header = document.querySelector('.header')
      if (!header) return
      if (current > last && current > 10) {
        header.classList.add('header-hidden')
      } else {
        header.classList.remove('header-hidden')
      }
      last = current
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
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
  useHideHeaderOnScroll()

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
          <Route path="/tutorials" element={<TutorialsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}