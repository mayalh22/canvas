import Grid from "./Helpful/Grid"

export default function About() {
  return (
    <section id="about" className="section">
      <p className="section-label">what is this</p>
      <Grid cols={2}>
        <div className="about-main">
          <h1 className="title">Code something worth looking at.</h1>
          <p>
You know how to write code. You’ve worked with functions, loops, API’s, anything useful. Code is inherently useful! But it can also look nice.
Canvas is a YSWS for Hack Clubbers who want to see their program hung on their wall.
          </p>
          <p>
            Ship something visual to earn pixels!
          </p>

          <div className="rule-list">
            <div className="rule-item">
              <span className="rule-mark rule-mark-lime" />
              <p>The primary output must be visual and non-functional</p>
            </div>
            <div className="rule-item">
              <span className="rule-mark rule-mark-pink" />
              <p>Ex: pixel art tool qualifies, but a todo app with nice CSS does not.</p>
            </div>
            <div className="rule-item">
              <span className="rule-mark rule-mark-teal" />
              <p>Each verified hour earns 1 pixel.</p>
            </div>
          </div>
        </div>

        <div className="journal-card">
          <p className="section-label">from maya's journal</p>
          <p>
            I kept making generative art and data viz side projects and wondering
            why isn't there a YSWS for this... So here it is. Ship something pretty,
            get paintbrushes. Ship something really pretty, get an iPad!
          </p>
          <p className="journal-date">March 2026</p>
        </div>
      </Grid>
    </section>
  )
}