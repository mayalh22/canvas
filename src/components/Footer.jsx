import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <nav className="footer-links">
          <a href="https://mayahazarika.com" target="_blank" rel="noreferrer" className="nav-link">Maya's site</a>
          <a href="https://hackclub.com" target="_blank" rel="noreferrer" className="nav-link">Hack Club</a>
          <a href="https://github.com/mayalh22/canvas" target="_blank" rel="noreferrer" className="nav-link">Source</a>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>Code something worth looking at!</p>

        <p className="footer-copy">Maya Hazarika · {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}