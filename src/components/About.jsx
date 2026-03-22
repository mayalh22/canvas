import Grid from "./Helpful/Grid"
import Button from "./Helpful/Button"
import paintBuckets from '../assets/icons/paintbuckets.png'
import useTypewriter, { chainDelays } from '../useTypewriter'
import { useEffect, useRef } from "react"

const LEFT_TEXTS = [
  "You know how to write code: you've used functions, loops, APIs, and all other types of very impressive tools...but code isn't just useful, it can be beautiful too! Canvas is a YSWS for Hack Clubbers who want to see their programs turned into art and hung on their wall.",
  "Ship something visual to earn pixels!",
  "The primary output must be visual (it can also be functional)",
  "Ex: pixel art tool qualifies, but a todo app with nice CSS does not.",
  "Each verified hour earns 1 pixel. Check the prizes tab for things to do with those pixels!!",
]

const RIGHT_TEXTS = [
  "Creative coding is the practice of using programming as artistic expression, where algorithms, randomness, and data become the tools instead of a paintbrush. It challenges the idea that code is purely functional and shows that it can be just as expressive as any traditional art form. I wanted a YSWS for that. So here it is. Ship something pretty, get paintbrushes. Ship something really pretty, get an iPad!",
  "Maybe have a gallery section where people can share their work?",
  "I'd like to allow people to vote on slack for their favorite...",
  "Absolutely definitely I will add a prize option of getting art printed on sweatshirts, stickers, etc",
]
const allTexts = [...LEFT_TEXTS, ...RIGHT_TEXTS]
const allDelays = chainDelays(allTexts)
const leftDelays = allDelays.slice(0, LEFT_TEXTS.length)
const rightDelays = allDelays.slice(LEFT_TEXTS.length)
function TypeP({ text, startAfter = 0 }) {
  const displayed = useTypewriter(text, startAfter)
  const done = displayed.length === text.length
  return (
    <p>
      {displayed}
      {!done && <span className="type-cursor">|</span>}
    </p>
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
      <p className="section-label">Here's a cool example I made in P5.js. Move your mouse over this!...and learn how in the tutorial tab</p>
      <div ref={canvasRef} style={{ width: '100%', height: '300px', overflow: 'hidden' }} />
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section">
      <Grid cols={2}>
        <div className="about-main">
          <h1 className="title">CANVAS</h1>
          <h1 className="subtitle">Code something worth looking at!</h1>

          <TypeP text={LEFT_TEXTS[0]} startAfter={leftDelays[0]} />
          <TypeP text={LEFT_TEXTS[1]} startAfter={leftDelays[1]} />

          <img src={paintBuckets} alt="" className="section-icon" />

          <div className="rule-list">
            <div className="rule-item">
              <span className="rule-mark rule-mark-lime" />
              <TypeP text={LEFT_TEXTS[2]} startAfter={leftDelays[2]} />
            </div>
            <div className="rule-item">
              <span className="rule-mark rule-mark-pink" />
              <TypeP text={LEFT_TEXTS[3]} startAfter={leftDelays[3]} />
            </div>
            <div className="rule-item">
              <span className="rule-mark rule-mark-teal" />
              <TypeP text={LEFT_TEXTS[4]} startAfter={leftDelays[4]} />
            </div>
          </div>
        </div>

        <div className="journal-card">
          <p className="section-label">My notes!</p>
          <TypeP text={RIGHT_TEXTS[0]} startAfter={rightDelays[0]} />
          <p className="section-label">Cool ideas for the future:</p>
          <ul>
            <li><TypeP text={RIGHT_TEXTS[1]} startAfter={rightDelays[1]} /></li>
            <li><TypeP text={RIGHT_TEXTS[2]} startAfter={rightDelays[2]} /></li>
            <li><TypeP text={RIGHT_TEXTS[3]} startAfter={rightDelays[3]} /></li>
          </ul>
          <p className="journal-date">March 2026</p>
          <Button label="RSVP here... or else!!" onClick={() => window.open('https://forms.fillout.com/t/rYV9dBqDLqus', '_blank')} />
        </div>
      </Grid>

      <P5Sketch />
    </section>
  )
}