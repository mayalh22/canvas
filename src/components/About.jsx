import { useEffect, useRef } from "react"
import Grid from "./Helpful/Grid"
import Button from "./Helpful/Button"
import paintBuckets from '../assets/icons/paintbuckets.png'
import useTypewriter from '../useTypewriter'

const TITLE = "Canvas"
const SLOGAN = "Code something worth looking at!"

function TypeH({ text, startAfter = 0, className }) {
  const displayed = useTypewriter(text, startAfter)
  const done = displayed.length === text.length
  return (
    <h1 className={className}>
      {displayed}
      {!done && <span className="type-cursor">|</span>}
    </h1>
  )
}

function P5Sketch() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js'
    script.async = true
    script.onload = () => {
      const colors = ['#c7d04a', '#5d88a8', '#4dab81', '#ff5f74', '#ffce48', '#fbcbbc']
      const el = canvasRef.current
      if (!el) return

      const sketch = (p) => {
        p.setup = () => {
          const canvas = p.createCanvas(el.offsetWidth, 300)
          canvas.parent(el)
          p.background('#1f1c1f')
          p.noStroke()
        }

        p.draw = () => {}

        p.windowResized = () => {
          p.resizeCanvas(el.offsetWidth, 300)
          p.background('#1f1c1f')
        }

        p.mouseMoved = () => {
          if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
            const col = p.color(p.random(colors))
            col.setAlpha(120)
            p.fill(col)
            p.circle(p.mouseX, p.mouseY, p.random(10, 80))
          }
        }
      }

      window._canvasSketch = new window.p5(sketch)
    }

    document.head.appendChild(script)
    return () => {
      if (window._canvasSketch) { window._canvasSketch.remove(); window._canvasSketch = null }
      script.remove()
    }
  }, [])

  return (
    <div>
      <p className="section-label"><br/> Here's a cool example I made in P5.js. Move your mouse over the box below!...and learn how to build this in the tutorials tab<br/> </p>
<div ref={canvasRef} style={{ width: '100%', height: '300px', overflow: 'hidden', border: '2px solid var(--blue)' }} />    </div>
  )
}

export default function About() {
  const sloganDelay = TITLE.length * 30 + 200

  return (
    <section id="about" className="section">
      <Grid cols={2}>
        <div className="about-main">
          <TypeH text={TITLE} startAfter={0} className="title" />
          <TypeH text={SLOGAN} startAfter={sloganDelay} className="subtitle" />

          <p>You know how to write code: you've used functions, loops, APIs, and all other types of very impressive tools...but code can be more than useful, it can be beautiful too! Canvas is a YSWS for Hack Clubbers who want to see their programs turned into art and hung on their wall.</p>
          <p>Ship something visual to earn pixels!</p>

          <img src={paintBuckets} alt="" className="section-icon" />

          <div className="rule-list">
            <div className="rule-item">
              <span className="rule-mark rule-mark-lime" />
              <p>The primary output must be visual (it can also be functional)</p>
            </div>
            <div className="rule-item">
              <span className="rule-mark rule-mark-pink" />
              <p>Ex: pixel art tool qualifies, but a todo app with nice CSS does not.</p>
            </div>
          </div>
        </div>

        <div className="journal-card">
          <p className="section-label">My notes!</p>
          <p>Creative coding is using programming as artistic expression with algorithms, randomness, and data as tools. Ship something pretty, get paintbrushes. <br/> Ship something really pretty, get an iPad!<br/>  Each verified hour earns 1 pixel. Check the prizes tab for things to do with those pixels!!</p>
          <p className="section-label">Cool ideas for the future:</p>
          <ul>
            <li>Maybe have a gallery section where people can share their work?</li>
            <li>I'd like to allow people to vote on Slack for their favorite...</li>
            <li>Absolutely definitely I will add a prize option of getting art printed on sweatshirts, stickers, etc</li>
          </ul>
          <p className="journal-date">March 2026</p>
          <Button label="RSVP here... or else!!" onClick={() => window.open('https://forms.fillout.com/t/rYV9dBqDLqus', '_blank')} />
        </div>
      </Grid>

      <P5Sketch />
    </section>
  )
}