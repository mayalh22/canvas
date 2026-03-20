import artInFrame from '../assets/icons/artinframe.png'

export default function Gallery() {
  return (
    <section>
      <div className="rule-item" style={{ justifyContent: 'space-between' }}>
        <div>
          <p className="section-label">Coming soon!</p>
          <h2 className="subtitle">The Gallery</h2>
        </div>
        <img src={artInFrame} alt="" className="section-icon" />
      </div>
      <p>Canvas is not live yet, but the gallery will be the most important part. Every accepted submission gets a public entry showing the art, the artist, the pixel count, the tool used, and a link to the source code. Once a week, the Slack channel votes on their favorite piece via reactions, and the winner gets their art printed in large format and mailed to them. The gallery will also display active palette challenge tags, so you can filter by Monochrome, Kinetic, Typeface, and more. Check back this summer!</p>
    </section>
  )
}