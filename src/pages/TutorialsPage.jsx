import { useState } from 'react'
import Button from '../components/Helpful/Button'
import P5J5 from '../components/Tutorial/P5J5'
import ASCII from '../components/Tutorial/ASCII'
import CSS from '../components/Tutorial/CSS'

const TABS = [
  { id: 'p5', label: 'P5.js' },
  { id: 'ascii', label: 'ASCII' },
  { id: 'css', label: 'CSS' },
]

export default function TutorialsPage() {
  const [active, setActive] = useState(null)

  return (
    <section className="section">
      <p className="section-label">Learn something new!</p>
      <h2 className="subtitle">Tutorials</h2>
      <p>Not sure where to start? These three tutorials will get you from nothing to a decent piece! If you use one of these as a starting point, you must make at least one structural change and mention it in your artist statement.</p>
      <br />
      <div className="tab-row">
        {TABS.map((tab) => (
          <Button
            key={tab.id}
            label={tab.label}
            variant={active === tab.id ? 'primary' : 'secondary'}
            onClick={() => setActive(tab.id)}
          />
        ))}
      </div>
      <br />
      <div className="tab-panel">
        {active === 'p5'    && <P5J5 />}
        {active === 'ascii' && <ASCII />}
        {active === 'css'   && <CSS />}
        {active === null    && <p className="tab-empty">Select a tutorial above to get started!</p>}
      </div>
    </section>
  )
}