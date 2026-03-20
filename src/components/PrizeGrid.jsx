import Grid from './Helpful/Grid'

import procreate   from '../assets/prizes/Procreate.png'
import sketchbook  from '../assets/prizes/Sketchbook.png'
import copic       from '../assets/prizes/Copic.png'
import micron      from '../assets/prizes/Micron.png'
import applePencil from '../assets/prizes/ApplePencil.png'
import adobe       from '../assets/prizes/Adobe.png'
import robot       from '../assets/prizes/Robot.png'
import wacom       from '../assets/prizes/Wacom.png'
import ipad        from '../assets/prizes/iPad.png'

const TIERS = [
  {
    pixels: '5 pixels',
    prizes: [
      { name: 'Procreate',      img: procreate,   note: 'The industry standard for digital illustration on iPad.',    link: 'https://procreate.com/procreate' },
      { name: 'Sketchbook',     img: sketchbook,  note: 'A solid hardcover sketchbook for ideas that haeve to live off-screen!', link: 'https://www.amazon.com/Sketchbook-Hardcover-Drawing-Acid-Free-Quality/dp/1454931477' },
      { name: 'Micron Pen Set', img: micron,      note: 'Archival pigment ink pens used by illustrators and architects.', link: 'https://www.amazon.com/Sakura-Pigma-Micron-Fineliner-drawing/dp/B07D5TT6LS' },
    ],
  },
  {
    pixels: '10 pixels',
    prizes: [
      { name: 'Copic Markers',      img: copic,       note: 'Refillable alcohol markers trusted by manga artists and designers worldwid!.', link: 'https://www.amazon.com/Copic-Marker-SB12-12-Piece-Sketch/dp/B000MRR3GU?th=1' },
      { name: 'Apple Pencil',       img: applePencil, note: 'Low latency, pressure sensitive, (the best way to draw on an iPad).',       link: 'https://www.apple.com/apple-pencil/' },
      { name: 'Adobe Subscription', img: adobe,       note: 'Full Creative Cloud access: Photoshop, Illustrator, After Effects, etc.', link: 'https://www.adobe.com/creativecloud/plans.html' },
    ],
  },
  {
    pixels: '30 pixels',
    prizes: [
      { name: 'AxiDraw Pen Plotter', img: robot, note: 'A machine that draws your code on real paper with a real pen. Very very cool...', link: 'https://www.axidraw.com/' },
      { name: 'iPad',                img: ipad,  note: 'Pair it with Procreate and the Apple Pencil?!',        link: 'https://www.apple.com/ipad/' },
      { name: 'Wacom Tablet',        img: wacom, note: 'The go-to drawing tablet for digital artists who work at a desk.',                 link: 'https://www.wacom.com/en-us' },
    ],
  },
]

export default function PrizeGrid() {
  return (
    <div className="rule-list">
      {TIERS.map((tier) => (
        <div key={tier.pixels}>
          <h3 className="subtitle">{tier.pixels}</h3>
          <Grid cols={3}>
            {tier.prizes.map((prize) => (
              <a
                key={prize.name}
                href={prize.link}
                target="_blank"
                rel="noreferrer"
                className="prize-card"
              >
                {prize.img && <img src={prize.img} alt={prize.name} />}
                <p className="section-label">{prize.name}</p>
                <p>{prize.note}</p>
              </a>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  )
}