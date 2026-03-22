import { useState, useEffect, useRef } from 'react'

const SPEED = 60

export default function useTypewriter(text, startAfterMs = 0) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    setDisplayed('')
    let i = 0
    let intervalId = null

    const startTimer = setTimeout(() => {
      intervalId = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(intervalId)
          intervalId = null
        }
      }, SPEED)
    }, startAfterMs)

    return () => {
      clearTimeout(startTimer)
      if (intervalId) clearInterval(intervalId)  // ← actually clears leaking intervals
    }
  }, [text, startAfterMs])

  return displayed
}

export function chainDelays(texts, gapMs = 200) {
  const delays = []
  let total = 0
  for (const text of texts) {
    delays.push(total)
    total += text.length * SPEED + gapMs  // consistent SPEED used everywhere
  }
  return delays
}