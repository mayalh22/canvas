import Grid from './Helpful/Grid'

const EXAMPLES = [
  { title: 'Blot Painting in P5.js',         url: 'https://mostlymaths.net/2020/05/blot-painting-p5js-sketch.html/', color: 'var(--lime)'   },
  { title: 'Getting Started with P5.js',      url: 'https://www.gorillasun.de/blog/getting-started-with-p5js/',       color: 'var(--teal)'   },
  { title: 'P5.js Sketch Gallery',            url: 'https://p5js.org/sketches/2225777/',                               color: 'var(--pink)'   },
  { title: 'ASCII Shader Art',                url: 'https://ianparberry.com/art/ascii/shader/',                        color: 'var(--yellow)' },
  { title: 'Procedural World with Perlin',    url: 'https://www.reddit.com/r/proceduralgeneration/comments/10p2v9g/2d_procedural_world_generation_using_perlin_noise/', color: 'var(--blue)'   },
  { title: 'ZIM JS Art Examples',             url: 'https://zimjs.com/art.html',                                       color: 'var(--peach)'  },
  { title: 'Generative Art on Vimeo',         url: 'https://vimeo.com/592558420',                                      color: 'var(--red)'    },
  { title: 'Processing Art Gallery',          url: 'https://www.katevassgalerie.com/blog/processing',                  color: 'var(--lime)'   },
]

export default function ExampleArtGrid() {
  return (
    <div>
      <p className="section-label">Inspiration</p>
      <h2 className="subtitle">Example Art</h2>
      <p>Here are some examples of the kind of work Canvas is for. Click any to open it.</p>
      <br />
      <Grid cols={2}>
        {EXAMPLES.map((ex) => (
          <a
            key={ex.title}
            href={ex.url}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'block',
              border: `3px solid ${ex.color}`,
              padding: '1.5rem',
              color: ex.color,
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1rem',
            }}
          >
            {ex.title}
          </a>
        ))}
      </Grid>
    </div>
  )
}