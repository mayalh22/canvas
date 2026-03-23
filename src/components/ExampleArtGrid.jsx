import Grid from './Helpful/Grid'
import TypeH from '../components/Helpful/TypeH'


import ex1 from '../assets/artex/1.png'
import ex2 from '../assets/artex/2.png'
import ex3 from '../assets/artex/3.png'
import ex4 from '../assets/artex/4.png'
import ex5 from '../assets/artex/5.png'
import ex6 from '../assets/artex/6.png'
import ex7 from '../assets/artex/7.png'
import ex8 from '../assets/artex/8.png'

const EXAMPLES = [
  { title: 'Blot Painting in P5.js',       img: ex1, url: 'https://mostlymaths.net/2020/05/blot-painting-p5js-sketch.html/',  color: 'var(--lime)'   },
  { title: 'Getting Started with P5.js',    img: ex2, url: 'https://www.gorillasun.de/blog/getting-started-with-p5js/',        color: 'var(--teal)'   },
  { title: 'P5.js Sketch Gallery',          img: ex3, url: 'https://p5js.org/sketches/2225777/',                               color: 'var(--pink)'   },
  { title: 'ASCII Shader Art',              img: ex4, url: 'https://ianparberry.com/art/ascii/shader/',                        color: 'var(--yellow)' },
  { title: 'Procedural World with Perlin',  img: ex5, url: 'https://www.reddit.com/r/proceduralgeneration/comments/10p2v9g/2d_procedural_world_generation_using_perlin_noise/', color: 'var(--blue)'   },
  { title: 'ZIM JS Art Examples',           img: ex6, url: 'https://zimjs.com/art.html',                                       color: 'var(--peach)'  },
  { title: 'Generative Art on Vimeo',       img: ex7, url: 'https://vimeo.com/592558420',                                      color: 'var(--red)'    },
  { title: 'Processing Art Gallery',        img: ex8, url: 'https://www.katevassgalerie.com/blog/processing',                  color: 'var(--lime)'   },
]

export default function ExampleArtGrid() {
  return (
    <div>
      <p className="section-label">Inspiration Below...Click on pics for more info!</p>
      <TypeH text="Example Art" />
      <p>Here are some examples of the kind of work Canvas is meant for.</p>
      <br />
      <Grid cols={2}>
        {EXAMPLES.map((ex) => (
          <a
            key={ex.title}
            href={ex.url}
            target="_blank"
            rel="noreferrer"
            style={{ display: 'block', border: `3px solid ${ex.color}`, color: ex.color }}
          >
            <img src={ex.img} alt={ex.title} style={{width: '100%', height: 'auto', display: 'block'}} />
            <p style={{padding: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: ex.color}}>{ex.title}</p>
          </a>
        ))}
      </Grid>
    </div>
  )
}