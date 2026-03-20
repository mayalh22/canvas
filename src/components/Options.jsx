import { useState } from "react"
import Button from "./Helpful/Button"
import Grid from "./Helpful/Grid"
import PrizeGrid from "./PrizeGrid"
import ChallengeGrid from "./ChallengeGrid"
import ExampleArtGrid from "./ExampleArtGrid"
import Gallery from "./Gallery"

const TABS = [
  { id: "prizes",     label: "Prizes"       },
  { id: "challenges", label: "Challenges"   },
  { id: "examples",   label: "Art Examples" },
  { id: "gallery",    label: "Gallery"      },
]

export default function Options() {
  const [active, setActive] = useState(null)

  return (
    <section id="options" className="section">
      <p className="section-label">Explore!</p>
      <h2 className="subtitle">What's inside</h2>

      <div className="tab-row">
        {TABS.map((tab) => (
          <Button
            key={tab.id}
            label={tab.label}
            variant={active === tab.id ? "primary" : "secondary"}
            onClick={() => setActive(active === tab.id ? null : tab.id)}
          />
        ))}
      </div>

      <div className="tab-panel">
        {active === "prizes"     && <PrizeGrid />}
        {active === "challenges" && <ChallengeGrid />}
        {active === "examples"   && <ExampleArtGrid />}
        {active === "gallery"    && <Gallery />}
        {active === null && (
          <p className="tab-empty">Select a category above to explore.</p>
        )}
      </div>
    </section>
  )
}