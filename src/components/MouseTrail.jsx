import { useEffect, useRef } from 'react'

const TRAIL_LENGTH = 10  // number of dots
const DOT_LIFETIME = 300 // ms before dot disappears (no fade, just removed)

export default function MouseTrail() {
  const dotsRef = useRef([])

  useEffect(() => {
    const handleMove = (e) => {
      const dot = document.createElement('div')
      dot.className = 'trail-dot'
      dot.style.left = e.clientX + 'px'
      dot.style.top  = e.clientY + 'px'
      document.body.appendChild(dot)
      dotsRef.current.push(dot)

      // hard remove after lifetime — no fade
      setTimeout(() => {
        dot.remove()
        dotsRef.current = dotsRef.current.filter(d => d !== dot)
      }, DOT_LIFETIME)

      // also cap total dots so old ones are culled instantly
      if (dotsRef.current.length > TRAIL_LENGTH) {
        const oldest = dotsRef.current.shift()
        oldest?.remove()
      }
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return null  // renders nothing itself, dots go on document.body
}