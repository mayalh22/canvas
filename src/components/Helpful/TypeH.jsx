import useTypewriter from '../../useTypewriter'

export default function TypeH({ text, startAfter = 0, className = 'subtitle' }) {
  const displayed = useTypewriter(text, startAfter)
  const done = displayed.length === text.length
  return (
    <h2 className={className}>
      {displayed}
      {!done && <span className="type-cursor">|</span>}
    </h2>
  )
}