import Grid from './Helpful/Grid'
import TypeH from '../components/Helpful/TypeH'


const CHALLENGES = [
  {
    name: 'Monochrome',
    constraint: 'One color only',
    description: 'Pick one color and commit to it entirely. Every element in your piece must live within that single hue. The challenge is finding depth, contrast, and interest without reaching for another color. Shades and tints are fair game, but nothing else is!',
  },
  {
    name: 'Thumbnail',
    constraint: '36x36 pixels exactly',
    description: 'Your canvas is 36 pixels wide and 36 pixels tall. That is the size of a browser favicon, and every single pixel counts. This challenge is about extreme intentionality. What can you say in a space that most people use for a logo dot?',
  },
  {
    name: 'Restoration',
    constraint: 'Old tools only',
    description: 'Make something new using the software of the past. Processing, HyperCard, Logo, BASIC, or anything with a release date older than you are. These tools have personality, hard limits, and a visual identity that modern software has completely forgotten. Embrace all of it!',
  },
  {
    name: 'Kinetic',
    constraint: 'Must be animated',
    description: 'Your piece must move, and the movement must be the point. A looping generative animation, a reactive shader, a particle system, a clock made of shapes. Motion should feel intentional rather than decorative. A still screenshot should not do it justice!',
  },
  {
    name: 'Typeface',
    constraint: 'ASCII characters only',
    description: 'Your entire visual output must be built from printable ASCII characters. No images, no canvas drawing, no SVG. Just text arranged into something worth looking at. Portraits, landscapes, abstract patterns, and animations are all on the table. The terminal is your canvas!',
  },
]

export default function ChallengeGrid() {
  return (
    <div>
      <p className="section-label">Optional Constraints Below:</p>
      <TypeH text="Palette Challenges" />
      <p>Each challenge adds a creative constraint to your submission. You do not have to do one, but if you do, it shows up on your gallery entry and earns you extra recognition. Constraints are declared at submission time!</p>
      <br />
      <Grid cols={2}>
        {CHALLENGES.map((c) => (
          <div key={c.name} className="prize-card">
            <p className="section-label">{c.constraint}</p>
            <h3 className="subtitle">{c.name}</h3>
            <p>{c.description}</p>
          </div>
        ))}
      </Grid>
    </div>
  )
}