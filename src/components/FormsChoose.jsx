import { useState } from "react"
import Button from "./Helpful/Button"
import Submit from "./Form/Submit"
import Prize from "./Form/Prize"

export default function FormsChoose() {
  const [active, setActive] = useState(null)

  return (
    <section id="forms" className="section">
      <p className="section-label">ready?</p>
      <h2 className="subtitle">Let's go</h2>
      <p>Pick what you're here to do.</p>

      <div className="forms-choice-row">
        <Button
          label="Submit a project"
          variant={active === "submit" ? "primary" : "secondary"}
          onClick={() => setActive(active === "submit" ? null : "submit")}
        />
        <Button
          label="Redeem pixels"
          variant={active === "prize" ? "primary" : "secondary"}
          onClick={() => setActive(active === "prize" ? null : "prize")}
        />
      </div>

      <div className="form-panel">
        {active === "submit" && <Submit />}
        {active === "prize"  && <Prize />}
      </div>
    </section>
  )
}