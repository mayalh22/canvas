import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from './Helpful/Button'
import wordmark from '../assets/wordmark.png'

const PAGE_LINKS = [
  { label: 'Prizes',     to: '/prizes'     },
  { label: 'Challenges', to: '/challenges' },
  { label: 'Gallery',    to: '/gallery'    },
  { label: 'Tutorials',  to: '/tutorials'  },
  { label: 'FAQ',        to: '/faq'        },
]

const scrollToAbout = () => {
  setTimeout(() => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'instant' })
  }, 100)
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  const toggleMusic = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <header className="header">
      <audio ref={audioRef} src="/music.mp3" loop />
      <div className="header-inner">
          <Link to="/">
            <img src={wordmark} alt="Canvas" className="wordmark-img" />
          </Link>


        <nav className="nav">
          <Link to="/" className="nav-link" onClick={scrollToAbout}>About</Link>
          {PAGE_LINKS.map((l) => (
            <Link key={l.label} to={l.to} className="nav-link">{l.label}</Link>
          ))}
                    <button
            onClick={toggleMusic}
            className="music-toggle"
            aria-label={playing ? 'Pause music' : 'Play music'}
          >
            {playing ? '♪ on' : '♪ off'}
          </button>
        </nav>

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? 'close' : 'menu'}
        </button>
      </div>

      {open && (
        <nav className="nav-mobile">
          <Link to="/" className="nav-link" onClick={() => { setOpen(false); scrollToAbout() }}>About</Link>
          {PAGE_LINKS.map((l) => (
            <Link key={l.label} to={l.to} className="nav-link" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <Button label="Submit" onClick={() => { setOpen(false); window.location.href = '#forms' }} />
        </nav>
      )}
    </header>
  )
}