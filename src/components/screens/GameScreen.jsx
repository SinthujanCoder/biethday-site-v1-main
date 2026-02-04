"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ScreenContainer from "../ScreenContainer"

const TARGET_SCORE = 8
const TIME_LIMIT = 20

export default function GameScreen({ onWin }) {
  const [time, setTime] = useState(TIME_LIMIT)
  const [score, setScore] = useState(0)
  const [heart, setHeart] = useState(null)

  // TIMER
  useEffect(() => {
    if (time <= 0) return
    const timer = setInterval(() => setTime(t => t - 1), 1000)
    return () => clearInterval(timer)
  }, [time])

  // SPAWN HEART RANDOMLY
  useEffect(() => {
    if (time <= 0 || score >= TARGET_SCORE) return

    const spawn = setTimeout(() => {
      setHeart({
        top: Math.random() * 200 + 10,
        left: Math.random() * 200 + 10,
        id: Date.now(),
      })
    }, 600)

    return () => clearTimeout(spawn)
  }, [score, time])

  // AUTO REMOVE HEART IF MISSED
  useEffect(() => {
    if (!heart) return
    const remove = setTimeout(() => {
      setHeart(null)
    }, 1200)

    return () => clearTimeout(remove)
  }, [heart])

  // WIN
  useEffect(() => {
    if (score === TARGET_SCORE) {
      setTimeout(onWin, 800)
    }
  }, [score, onWin])

  // LOSE
  if (time === 0 && score < TARGET_SCORE) {
    return (
      <ScreenContainer>
        <div className="text-center text-white">
          <h2 className="text-3xl mb-3">Almost 💔</h2>
          <p className="mb-6">Try once more, cutie</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-pink-500 rounded-full"
          >
            Retry 💖
          </button>
        </div>
      </ScreenContainer>
    )
  }

  return (
    <ScreenContainer>
      <div className="text-center text-white">
        <p className="mb-3 text-lg">
          ⏱ {time}s &nbsp; | &nbsp; 💖 {score}/{TARGET_SCORE}
        </p>

        <div className="relative w-64 h-64 mx-auto rounded-xl border-2 border-pink-400 bg-black/30 overflow-hidden">
          <AnimatePresence>
            {heart && (
              <motion.div
                key={heart.id}
                className="absolute text-4xl cursor-pointer select-none"
                style={{ top: heart.top, left: heart.left }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring" }}
                onClick={() => {
                  setScore(s => s + 1)
                  setHeart(null)
                }}
              >
                💖
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="mt-4 text-white/60">
          Tap the heart before it disappears 💕
        </p>
      </div>
    </ScreenContainer>
  )
}
