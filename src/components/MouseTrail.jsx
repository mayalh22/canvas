import { useEffect, useRef } from 'react'

const TRAIL_LENGTH = 10
const DOT_LIFETIME = 300

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

      setTimeout(() => {
        dot.remove()
        dotsRef.current = dotsRef.current.filter(d => d !== dot)
      }, DOT_LIFETIME)

      if (dotsRef.current.length > TRAIL_LENGTH) {
        const oldest = dotsRef.current.shift()
        oldest?.remove()
      }
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return null
}