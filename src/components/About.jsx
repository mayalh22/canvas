import { useEffect, useRef } from "react"
import Grid from "./Helpful/Grid"
import Button from "./Helpful/Button"
import paintBuckets from '../assets/icons/paintbuckets.png'

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
        const circles = []

        p.setup = () => {
          const canvas = p.createCanvas(el.offsetWidth, 300)
          canvas.parent(el)
          p.background('#1f1c1f')
          p.noStroke()
          for (let i = 0; i < 40; i++) {
            circles.push({
              x: p.random(p.width),
              y: p.random(p.height),
              size: p.random(8, 40),
              col: p.random(colors),
              vx: p.random(-0.8, 0.8),
              vy: p.random(-0.8, 0.8),
            })
          }
        }

        p.draw = () => {
          p.background(31, 28, 31, 25)
          circles.forEach(c => {
            p.fill(c.col)
            p.circle(c.x, c.y, c.size, c.size)
            c.x += c.vx
            c.y += c.vy
            if (c.x < 0 || c.x > p.width)  c.vx *= -1
            if (c.y < 0 || c.y > p.height) c.vy *= -1
          })
        }

        p.mouseMoved = () => {
          if (
            p.mouseX > 0 && p.mouseX < p.width &&
            p.mouseY > 0 && p.mouseY < p.height
          ) {
            circles.push({
              x: p.mouseX,
              y: p.mouseY,
              size: p.random(6, 20),
              col: p.random(colors),
              vx: p.random(-1.2, 1.2),
              vy: p.random(-1.2, 1.2),
            })
            if (circles.length > 80) circles.shift()
          }
        }
      }

      window._canvasSketch = new window.p5(sketch)
    }

    document.head.appendChild(script)

    return () => {
      if (window._canvasSketch) {
        window._canvasSketch.remove()
        window._canvasSketch = null
      }
      script.remove()
    }
  }, [])

  return (
    <div>
      <p className="section-label">Here's a cool example I made in P5J5. Move your mouse over this!</p>
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
          <p>
            You know how to write code: you've used functions, loops, APIs, and all other types of very impressive tools...but code isn't just useful, it can be beautiful too! Canvas is a YSWS for Hack Clubbers who want to see their programs turned into art and hung on their wall.
          </p>
          <p>Ship something visual to earn pixels!</p>
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
      <P5Sketch />
    </section>
  )
}