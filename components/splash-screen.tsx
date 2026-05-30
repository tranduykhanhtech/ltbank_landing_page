"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Show splash screen for 1.5 seconds on initial load
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#000810]"
        >
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute left-1/2 top-1/2 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan/5 blur-[100px]" 
            />
          </div>

          <div className="relative flex flex-col items-center justify-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="text-4xl md:text-6xl font-bold tracking-tighter">
                <span className="text-gradient">LT</span>
                <span className="text-white">Bank</span>
              </div>
              
              {/* Scanline Effect */}
              <motion.div 
                initial={{ top: 0, opacity: 0 }}
                animate={{ top: "100%", opacity: [0, 1, 0] }}
                transition={{ duration: 1.2, ease: "linear", repeat: Infinity }}
                className="absolute left-0 w-full h-[2px] bg-neon-cyan shadow-[0_0_10px_var(--color-neon-cyan)]"
              />
            </motion.div>

            {/* Subtitle / Loading text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 flex items-center gap-3 text-sm tracking-[0.2em] text-white/50 uppercase"
            >
              <div className="h-px w-8 bg-white/20" />
              <span>Khởi tạo hệ thống</span>
              <div className="h-px w-8 bg-white/20" />
            </motion.div>

            {/* Spinner Progress */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "120px" }}
              transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
              className="mt-8 h-0.5 overflow-hidden rounded-full bg-white/10"
            >
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
