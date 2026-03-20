import { useState } from "react"
import Button from "./Helpful/Button"
import yarn from '../assets/icons/Yarn.png'

export default function FormsChoose() {
  const [active, setActive] = useState(null)

  const handleClick = (type, url) => {
    setActive(type)
    window.open(url, "_blank")
  }

  return (
    <section id="forms" className="section">
      <div className="rule-item" style={{ justifyContent: 'space-between' }}>
        <div>
          <p className="section-label">Ready to submit or spend pixels?</p>
          <h2 className="subtitle">Forms and Things of that Sort</h2>
          <p>Pick what you're here to do (obv. this counts only when Canvas has launched)!</p>
        </div>
        <img src={yarn} alt="" className="section-icon" />
      </div>

      <div className="forms-choice-row">
        <Button
          label="Submit a project"
          variant={active === "submit" ? "primary" : "secondary"}
          onClick={() => handleClick("submit", "https://forms.fillout.com/t/cpkSPtkx7wus")}
        />
        <Button
          label="Redeem pixels"
          variant={active === "prize" ? "primary" : "secondary"}
          onClick={() => handleClick("prize", "https://forms.fillout.com/t/2MzaQbUpvWus")}
        />
      </div>
    </section>
  )
}