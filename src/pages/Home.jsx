import { useState, useRef, useEffect } from 'react'
import About from '../components/About'
import Options from '../components/Options'
import FormsChoose from '../components/FormsChoose'

function LazyMount({ children }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref}>{visible && children}</div>
}

export default function Home() {
  return (
    <>
      <About />
      <LazyMount><Options /></LazyMount>
      <LazyMount><FormsChoose /></LazyMount>
    </>
  )
}