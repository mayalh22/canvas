export default function Grid({ children, cols = 2 }) {
  return (
    <div className={`grid grid-${cols}`}>
      {children}
    </div>
  )
}