"use client"
import { useEffect, useRef } from "react"

export default function MusicPlayer({ play }) {
  const audioRef = useRef(null)

  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.volume = 0.6
      audioRef.current.play().catch(() => {})
    }
  }, [play])

  return (
    <audio ref={audioRef} loop>
      <source src="/music/love.mp3" type="audio/mpeg" />
    </audio>
  )
}
