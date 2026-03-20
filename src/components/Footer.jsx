import wordmark from '../assets/Wordmark.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '100px' }}>
            <Link to="/">
              <img src={wordmark} alt="Canvas" className="wordmark-img" />
            </Link>
            <p>Code something worth looking at.</p>
          </div>

          <nav className="footer-links">
            <a href="https://mayahazarika.com" target="_blank" rel="noreferrer" className="nav-link">Maya's site</a>
            <a href="https://hackclub.com" target="_blank" rel="noreferrer" className="nav-link">Hack Club</a>
            <a href="https://github.com/mayalh22/canvas" target="_blank" rel="noreferrer" className="nav-link">Source</a>
          </nav>
        </div>
      </div>

      <p className="footer-copy">
        Made by Maya for Hack Club · {new Date().getFullYear()}
      </p>
    </footer>
  )
}