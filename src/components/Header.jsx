import { useState } from 'react'
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

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/">
          <img src={wordmark} alt="Canvas" className="wordmark-img" />
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link" onClick={scrollToAbout}>About</Link>
          {PAGE_LINKS.map((l) => (
            <Link key={l.label} to={l.to} className="nav-link">{l.label}</Link>
          ))}
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