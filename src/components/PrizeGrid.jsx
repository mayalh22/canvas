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
      { name: 'Procreate',           img: procreate,   note: 'iPad drawing app',             link: 'https://procreate.com/procreate' },
      { name: 'Sketchbook',          img: sketchbook,  note: 'Professional drawing app',     link: 'https://www.amazon.com/Sketchbook-Hardcover-Drawing-Acid-Free-Quality/dp/1454931477' },
      { name: 'Micron Pen Set',      img: micron,      note: 'Archival ink pens',            link: 'https://www.amazon.com/Sakura-Pigma-Micron-Fineliner-drawing/dp/B07D5TT6LS' },
    ],
  },
  {
    pixels: '10 pixels',
    prizes: [
            { name: 'Copic Markers',       img: copic,       note: 'Set of alcohol markers',       link: 'https://www.amazon.com/Copic-Marker-SB12-12-Piece-Sketch/dp/B000MRR3GU?th=1' },

      { name: 'Apple Pencil',        img: applePencil, note: 'For iPad drawing',             link: 'https://www.apple.com/apple-pencil/' },
      { name: 'Adobe Subscription',  img: adobe,       note: 'Creative Cloud access',        link: 'https://www.adobe.com/creativecloud/plans.html' },
    ],
  },
  {
    pixels: '30 pixels',
    prizes: [
      { name: 'AxiDraw Pen Plotter', img: robot,        note: 'Draws your code on paper',     link: 'https://www.axidraw.com/' },
      { name: 'iPad',                img: ipad,        note: 'Draw anywhere',                link: 'https://www.apple.com/ipad/' },
      { name: 'Wacom Tablet',        img: wacom,       note: 'Professional drawing tablet',  link: 'https://www.wacom.com/en-us' },
    ],
  },
]

export default function PrizeGrid() {
  return (
    <div>
      {TIERS.map((tier) => (
        <div key={tier.pixels}>
          <p className="section-label">{tier.pixels}</p>
          <Grid cols={3}>
            {tier.prizes.map((prize) => (
              <div key={prize.name} className="prize-card">
                {prize.img && (
                  <img
                    src={prize.img}
                    alt={prize.name}
                    style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                  />
                )}
                <a
  href={prize.link}    // <-- use it directly
                  target="_blank"
                  rel="noreferrer"
                  className="section-label"
                >
                  {prize.name}
                </a>
                <p style={{ background: 'var(--pink)', color: 'var(--green)', padding: '0.1rem 0.4rem' }}>
                  {prize.note}
                </p>
              </div>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  )
}