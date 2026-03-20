import Grid from './Helpful/Grid'
import brush from '../assets/icons/brushandpainttube.png'

import procreate   from '../assets/prizes/procreate.png'
import sketchbook  from '../assets/prizes/sketchbook.png'
import copic       from '../assets/prizes/copic.png'
import micron      from '../assets/prizes/micron.png'
import applePencil from '../assets/prizes/applepencil.png'
import adobe       from '../assets/prizes/adobe.png'
import robot       from '../assets/prizes/robot.png'
import wacom       from '../assets/prizes/wacom.png'
import ipad        from '../assets/prizes/ipad.png'

const TIERS = [
  {
    pixels: '5 pixels',
    prizes: [
      { name: 'Procreate',      img: procreate,   note: 'The iPad drawing app. Very very very cool!',                              link: 'https://procreate.com/procreate' },
      { name: 'Sketchbook',     img: sketchbook,  note: 'A good hardcover sketchbook. For when you need to think away from a screen.', link: 'https://www.amazon.com/Sketchbook-Hardcover-Drawing-Acid-Free-Quality/dp/1454931477' },
      { name: 'Micron Pen Set', img: micron,      note: 'Archival ink pens: ine lines, no bleeding, and lasts forever!',                 link: 'https://www.amazon.com/Sakura-Pigma-Micron-Fineliner-drawing/dp/B07D5TT6LS' },
    ],
  },
  {
    pixels: '20 pixels',
    prizes: [
      { name: 'Copic Markers',      img: copic,       note: 'Refillable alcohol markers (really!!!!).',                                     link: 'https://www.amazon.com/Copic-Marker-SB12-12-Piece-Sketch/dp/B000MRR3GU?th=1' },
      { name: 'Apple Pencil',       img: applePencil, note: 'Works exactly how you expect it to...',            link: 'https://www.apple.com/apple-pencil/' },
      { name: 'Adobe Subscription', img: adobe,       note: 'Full Creative Cloud: Photoshop, Illustrator, After Effects, etc...',    link: 'https://www.adobe.com/creativecloud/plans.html' },
    ],
  },
  {
    pixels: '60 pixels',
    prizes: [
      { name: 'AxiDraw Pen Plotter', img: robot, note: 'Draws your code on actual paper with an actual pen.',         link: 'https://www.axidraw.com/' },
      { name: 'iPad',                img: ipad,  note: 'You already know what an iPad is!',                                   link: 'https://www.apple.com/ipad/' },
      { name: 'Wacom Tablet',        img: wacom, note: 'The standard drawing tablet: serious tool for serious work.',  link: 'https://www.wacom.com/en-us' },
    ],
  },
]

export default function PrizeGrid() {
  return (
    <div className="rule-list">

      <div className="about-main">
        <div className="rule-item">
          <img src={brush} alt="" className="section-icon" />
          <div>
            <h2 className="subtitle">Prizes</h2>
            <p>Every verified hour of work earns you one pixel. Spend your pixels on real art supplies, professional tools, or hardware. Prizes are redeemed through a separate form and shipped to you directly.</p>
          </div>
        </div>
      </div>

      {TIERS.map((tier) => (
        <div key={tier.pixels} className="rule-list">
          <p className="section-label">{tier.pixels}</p>
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