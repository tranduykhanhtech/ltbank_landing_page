"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function MouseGlow() {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(-1000) // Start far off-screen
  const mouseY = useMotionValue(-1000)

  // Configure smooth spring physics for an organic tracking lag effect
  const springConfig = { damping: 35, stiffness: 110, mass: 0.6 }
  const glowX = useSpring(mouseX, springConfig)
  const glowY = useSpring(mouseY, springConfig)

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by 250px (half of 500px width/height) to center the glow on the cursor
      mouseX.set(e.clientX - 250)
      mouseY.set(e.clientY - 250)
    }

    // Hide glow when cursor leaves the window
    const handleMouseLeave = () => {
      mouseX.set(-1000)
      mouseY.set(-1000)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [mouseX, mouseY])

  if (!mounted) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-10 hidden lg:block overflow-hidden">
      <motion.div
        className="h-[500px] w-[500px] rounded-full blur-[80px]"
        style={{
          x: glowX,
          y: glowY,
          position: "absolute",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.22) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 100%)",
        }}
      />
    </div>
  )
}
