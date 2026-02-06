"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ScreenContainer from "../ScreenContainer"

export default function MessageScreen() {
    const [showOverlay, setShowOverlay] = useState(false)

    const romanticMessage = `My Dearest Pappa 🎂💖,

Today is not just another day — it’s the day the world became brighter because YOU were born.

You bring so much happiness, warmth, laughter, and love into my life. Your smile can fix my worst days, and your presence alone makes everything feel better.

I admire your heart, your kindness, your strength, and the beautiful soul that you are. Every little moment with you feels special, and I’m so grateful to be a part of your life.

May this year bring you endless smiles, fulfilled dreams, good health, and all the love you truly deserve. I’ll always be right here — cheering for you, supporting you, and loving you more with each passing day.

Happy Birthday, my favorite person 🎉💖  
Never forget how special you are to me.

With all my love,  
Always yours 💕`


    const handleCardClick = () => {
        setShowOverlay(true)
    }

    const closeOverlay = () => {
        setShowOverlay(false)
    }

    return (
        <ScreenContainer>
            <div className="w-full max-w-4xl mx-auto text-center relative">
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-4 text-balance leading-tight"
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                        A Special Message For You
                    </motion.h1>
                </motion.div>

                <motion.div
                    className="relative group mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        onClick={handleCardClick}
                        className="w-80 h-48 mx-auto bg-gradient-to-br from-pink-900/40 via-purple-900/40 to-pink-800/40 backdrop-blur-lg rounded-2xl border-2 border-pink-400/50 shadow-2xl relative overflow-hidden cursor-pointer">
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                        <div className="flex flex-col items-center justify-center h-full p-6">
                            <motion.div
                                className="text-6xl mb-4"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 5, -5, 0],
                                }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            >
                                💌
                            </motion.div>

                            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                For You, My Cutiepiee
                            </h3>

                            <p className="text-purple-300 text-sm">Click to read my message</p>
                        </div>
                    </motion.div>
                </motion.div>

                <AnimatePresence>
                    {showOverlay && (
                        <motion.div
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: .5 }}
                            exit={{ opacity: 0 }}
                            onClick={closeOverlay}
                        >
                            <motion.div
                                className="w-full max-w-2xl bg-gradient-to-b from-purple-950/50 via-black/90 to-pink-950/50 rounded-2xl shadow-2xl border-2 border-pink-400/40 p-8 relative"
                                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={closeOverlay}
                                    className="absolute top-4 right-4 text-pink-400 hover:text-pink-300 text-2xl"
                                >
                                    ×
                                </button>

                                <div className="text-center mb-6">
                                    <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                        Happy Birthday 🎂🎉
                                    </h3>
                                    <p className="text-purple-300">This is just for you ♥</p>
                                </div>

                                <div
                                    className="h-80 overflow-y-auto pr-4 mb-6"
                                    style={{
                                        scrollbarWidth: "thin",
                                        scrollbarColor: "rgba(236, 72, 153, 0.5) rgba(0, 0, 0, 0.2)",
                                    }}
                                >
                                    <div className="text-sm text-pink-100 leading-relaxed text-left whitespace-pre-line">
                                        {romanticMessage}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </ScreenContainer>
    )
}
