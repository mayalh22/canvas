export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="wordmark">Canvas</p>
          <p>Code something worth looking at.</p>
        </div>

        <nav className="footer-links">
          <a href="mailto:maya@hackclub.com" className="nav-link">Contact Maya</a>
          <a href="https://maya.dino.icu" target="_blank" rel="noreferrer" className="nav-link">Maya's site</a>
          <a href="https://hackclub.com" target="_blank" rel="noreferrer" className="nav-link">Hack Club</a>
          <a href="https://github.com/hackclub/canvas" target="_blank" rel="noreferrer" className="nav-link">Source</a>
        </nav>
      </div>

      <p className="footer-copy">Made by Maya for Hack Club · {new Date().getFullYear()}</p>
    </footer>
  )
}