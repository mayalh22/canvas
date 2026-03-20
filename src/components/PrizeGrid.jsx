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
      { name: 'Procreate',           img: procreate,   note: 'iPad drawing app',             link: 'BLANKLINK.com' },
      { name: 'Sketchbook',          img: sketchbook,  note: 'Professional drawing app',     link: 'BLANKLINK.com' },
      { name: 'Micron Pen Set',      img: micron,      note: 'Archival ink pens',            link: 'BLANKLINK.com' },
    ],
  },
  {
    pixels: '10 pixels',
    prizes: [
            { name: 'Copic Markers',       img: copic,       note: 'Set of alcohol markers',       link: 'BLANKLINK.com' },

      { name: 'Apple Pencil',        img: applePencil, note: 'For iPad drawing',             link: 'BLANKLINK.com' },
      { name: 'Adobe Subscription',  img: adobe,       note: 'Creative Cloud access',        link: 'BLANKLINK.com' },
    ],
  },
  {
    pixels: '30 pixels',
    prizes: [
      { name: 'AxiDraw Pen Plotter', img: robot,        note: 'Draws your code on paper',     link: 'BLANKLINK.com' },
      { name: 'iPad',                img: ipad,        note: 'Draw anywhere',                link: 'BLANKLINK.com' },
      { name: 'Wacom Tablet',        img: wacom,       note: 'Professional drawing tablet',  link: 'BLANKLINK.com' },
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
                  href={`https://${prize.link}`}
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