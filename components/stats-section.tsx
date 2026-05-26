"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useState } from "react"

const stats = [
  { value: 99.9, suffix: "%", label: "Uptime hệ thống", decimals: 1 },
  { value: 500, suffix: "ms", label: "Thời gian xử lý giao dịch", prefix: "<", decimals: 0 },
  { value: 256, suffix: "-bit", label: "Mã hóa AES", decimals: 0 },
  { value: 24, suffix: "/7", label: "Hỗ trợ khách hàng", decimals: 0 },
]

function AnimatedCounter({ 
  value, 
  decimals = 0 
}: { 
  value: number
  decimals?: number 
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => 
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest)
  )

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 2,
      ease: "easeOut",
    })

    const unsubscribe = rounded.on("change", (v) => {
      setDisplayValue(typeof v === "string" ? parseFloat(v) : v)
    })

    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [value, motionValue, rounded, decimals])

  return <>{decimals > 0 ? displayValue.toFixed(decimals) : displayValue}</>
}

export function StatsSection() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-1.5 text-sm font-medium text-neon-cyan">
            Hiệu suất
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Số liệu{" "}
            <span className="text-gradient">ấn tượng</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/50"
            >
              {/* Hover Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                  <span className="text-gradient">
                    {stat.prefix}
                    <AnimatedCounter value={stat.value} decimals={stat.decimals} />
                    {stat.suffix}
                  </span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground sm:text-base">{stat.label}</div>
              </div>

              {/* Border Glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-primary/50 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
