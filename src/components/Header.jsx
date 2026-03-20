import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Helpful/Button'
import wordmark from '../assets/Wordmark.png'


/*
  NAV LINK RULES:
  - Use <Link to="/path"> for pages that are their own Route (e.g. /faq)
  - Use a plain <a href="#id"> for sections on the same page (e.g. #about, #options)
  - The #id must match the id="..." on the <section> tag in that component
*/

const PAGE_LINKS = [
  { label: 'FAQ', to: '/faq' },  // its own route -> use Link
]

const ANCHOR_LINKS = [
  { label: 'About',      href: '#about'   },  // matches id="about"   in About.jsx
  { label: 'Prizes',     href: '#options' },  // matches id="options" in Options.jsx
  { label: 'Challenges', href: '#options' },
  { label: 'Gallery',    href: '#options' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
<img src={wordmark} alt="Canvas" className="wordmark-img" />

        <nav className="nav">
          {ANCHOR_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
          {PAGE_LINKS.map((l) => (
            <Link key={l.label} to={l.to} className="nav-link">{l.label}</Link>
          ))}
        </nav>

        <div className="header-cta">
          <Button label="Submit" onClick={() => { window.location.href = '#forms' }} />
        </div>

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? 'close' : 'menu'}
        </button>
      </div>

      {open && (
        <nav className="nav-mobile">
          {ANCHOR_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="nav-link" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          {PAGE_LINKS.map((l) => (
            <Link key={l.label} to={l.to} className="nav-link" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <Button label="Submit" onClick={() => { setOpen(false); window.location.href = '#forms' }} />
        </nav>
      )}
    </header>
  )
}