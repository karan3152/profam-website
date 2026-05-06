'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`
      }
    }

    let rafId: number
    const animate = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerX - 18}px, ${followerY - 18}px)`
      }
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    rafId = requestAnimationFrame(animate)

    const handleMouseDown = () => {
      if (cursorRef.current) cursorRef.current.style.transform += ' scale(0.8)'
    }
    const handleMouseUp = () => {
      if (cursorRef.current) cursorRef.current.style.transform = cursorRef.current.style.transform.replace(' scale(0.8)', '')
    }

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}
