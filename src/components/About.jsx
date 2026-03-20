import Grid from "./Helpful/Grid"
import Button from "./Helpful/Button"
import paintBuckets from '../assets/icons/paintbuckets.png'

export default function About() {
  return (
    <section id="about" className="section">

      <Grid cols={2}>
        <div className="about-main">
          <h1 className="title">CANVAS</h1>
          <h1 className="subtitle">Code something worth looking at!</h1>
          <p>
You know how to write code: you’ve used functions, loops, APIs, and all other types of very impressive tools...but code isn’t just useful, it can be beautiful too! Canvas is a YSWS for Hack Clubbers who want to see their programs turned into art and hung on their wall.          </p>
          <p>
            Ship something visual to earn pixels!
          </p>
<img src={paintBuckets} alt="" className="section-icon" />
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
  <p className="section-label">My notes!</p>
  <p>
        Creative coding is the practice of using programming as artistic expression, where algorithms, randomness, and data become the tools instead of a paintbrush. It challenges the idea that code is purely functional and shows that it can be just as expressive as any traditional art form. I wanted a YSWS for that. So here it is. Ship something pretty, get paintbrushes. Ship something really pretty, get an iPad!

  </p>
  <p className="section-label">Cool ideas for the future:</p>
  <ul>
    <li>Maybe have a "gallery" section where people can share their work?</li>
    <li>I'd like to allow people to vote on slack for their favorite...</li>
    <li>Absolutely definitely I will add a prize option of getting art printed on sweatshirts, stickers, etc</li>
  </ul>
  <p className="journal-date">March 2026</p>
  <Button label="RSVP here... or else!!" onClick={() => window.open('https://forms.fillout.com/t/rYV9dBqDLqus', '_blank')} />
</div>
      </Grid>
    </section>
  )
}