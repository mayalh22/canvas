import { useState } from "react"
import Button from "./Helpful/Button"

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Prizes",     href: "#prizes" },
  { label: "Challenges", href: "#challenges" },
  { label: "Gallery",    href: "#gallery" },
  { label: "FAQ",        href: "#faq" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#" className="wordmark">Canvas</a>

        <nav className="nav">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header-cta">
          <Button label="Submit" onClick={() => { window.location.href = "#forms" }} />
        </div>

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {open && (
        <nav className="nav-mobile">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Button label="Submit" onClick={() => { setOpen(false); window.location.href = "#forms" }} />
        </nav>
      )}
    </header>
  )
}