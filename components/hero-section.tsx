"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 md:pt-0">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-neon-cyan/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-neon-purple/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan/5 blur-2xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:flex-row lg:gap-12 lg:px-8">
        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-1.5 text-sm font-medium text-neon-cyan">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-cyan" />
              Hệ Thống Ngân Hàng Thực Tế
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">LTBank</span>
            <span className="text-foreground"> - Ngân Hàng Số Trong Tầm Tay.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty sm:text-xl lg:mx-0"
          >
            Hệ thống ngân hàng số hoàn chỉnh với đầy đủ chức năng thực tế. 
            Tối giản, an toàn và hiện đại. Trải nghiệm mượt mà trên cả iOS và Android.
          </motion.p>

          {/* Download Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            id="download"
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <motion.div
              className="relative flex w-full items-center justify-center gap-2.5 rounded-xl border border-border/50 bg-card/50 px-4 py-2.5 opacity-50 cursor-not-allowed select-none sm:w-auto"
            >
              {/* Coming Soon Badge */}
              <span className="absolute -right-2 -top-2 z-10 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white shadow-lg">
                Coming Soon
              </span>
              <AppleIcon className="h-6 w-6 text-muted-foreground" />
              <div className="text-left">
                <span className="block text-[10px] leading-tight text-muted-foreground/70">Tải trên</span>
                <span className="block text-sm font-semibold text-muted-foreground">App Store</span>
              </div>
            </motion.div>

            <motion.a
              href="#"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex w-full items-center justify-center gap-2.5 rounded-xl border border-border bg-card px-4 py-2.5 transition-all hover:border-neon-purple/50 hover:glow-purple sm:w-auto"
            >
              <AndroidIcon className="h-6 w-6 text-foreground" />
              <div className="text-left">
                <span className="block text-[10px] leading-tight text-muted-foreground">Tải APK</span>
                <span className="block text-sm font-semibold text-foreground">Android</span>
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Phone Mockups */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative mt-12 flex-1 lg:mt-0"
        >
          <div className="relative mx-auto w-full max-w-lg">
            {/* Glow Effects */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-neon-cyan/15 to-neon-purple/15 blur-2xl opacity-75" />
            
            {/* Main Phone */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: "transform" }}
              className="relative z-10"
            >
              <div className="relative mx-auto w-64 overflow-hidden rounded-[3rem] border-4 border-border bg-card p-2 shadow-2xl sm:w-72">
                <div className="aspect-[9/19] overflow-hidden rounded-[2.5rem] bg-background">
                  {/* Phone Screen Content */}
                  <div className="flex h-full flex-col">
                    {/* Status Bar */}
                    <div className="flex items-center justify-between px-6 py-3">
                      <span className="text-xs font-medium text-foreground">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="h-2.5 w-4 rounded-sm bg-foreground" />
                      </div>
                    </div>
                    
                    {/* App Content Preview */}
                    <div className="flex-1 px-4 pb-4">
                      <div className="mb-4 text-center">
                        <span className="text-sm text-muted-foreground">Số dư khả dụng</span>
                        <div className="mt-1 text-2xl font-bold text-gradient">12,500,000 đ</div>
                      </div>
                      
                      {/* Quick Actions */}
                      <div className="mt-4 grid grid-cols-4 gap-2">
                        {["Chuyển", "QR", "Nạp", "More"].map((action, i) => (
                          <div key={i} className="flex flex-col items-center gap-1">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                              <div className="h-4 w-4 rounded bg-neon-cyan/50" />
                            </div>
                            <span className="text-xs text-muted-foreground">{action}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Transaction List Preview */}
                      <div className="mt-6 space-y-3">
                        <div className="text-sm font-medium text-foreground">Giao dịch gần đây</div>
                        {[1, 2, 3].map((_, i) => (
                          <div key={i} className="flex items-center justify-between rounded-xl bg-secondary/50 p-3">
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-neon-purple/30" />
                                <div>
                                  <div className="h-2 w-16 rounded bg-foreground/20" />
                                  <div className="mt-1 h-2 w-12 rounded bg-muted-foreground/20" />
                                </div>
                              </div>
                              <div className="h-2 w-14 rounded bg-neon-cyan/30" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Notch */}
                  <div className="absolute left-1/2 top-4 h-6 w-24 -translate-x-1/2 rounded-full bg-background" />
                </div>
              </motion.div>
  
              {/* Floating Debit Card (Premium detail) */}
              <motion.div
                animate={{ 
                  y: [-15, 15, -15],
                  rotate: [-5, 5, -5],
                }}
                transition={{ 
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
                style={{ willChange: "transform" }}
                className="absolute -left-12 bottom-12 z-20 hidden w-48 aspect-[1.586/1] rounded-xl bg-gradient-to-br from-neon-cyan via-card to-neon-purple p-4 shadow-2xl border border-white/10 backdrop-blur-md lg:block opacity-90 select-none"
              >
                <div className="flex h-full flex-col justify-between text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[7px] uppercase tracking-widest text-white/50">LTBank</p>
                      <p className="text-[10px] font-bold text-white">Premium</p>
                    </div>
                    <div className="h-4 w-4 rounded-full bg-white/20" />
                  </div>
                  <div className="h-5 w-7 rounded bg-amber-400/80 shadow-sm" />
                  <div className="flex items-end justify-between">
                    <p className="font-mono text-[9px] tracking-wider">•••• 8888</p>
                    <div className="flex gap-0.5">
                      <div className="h-3 w-3 rounded-full bg-red-500/80" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/80 -ml-1.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
  
              {/* Secondary Phone (Background) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{ willChange: "transform" }}
                className="absolute -right-8 top-16 hidden w-48 opacity-60 lg:block"
              >
                <div className="overflow-hidden rounded-[2rem] border-2 border-border bg-card p-1 shadow-xl">
                  <div className="aspect-[9/19] rounded-[1.75rem] bg-background">
                    <div className="flex h-full flex-col items-center justify-center p-4">
                      <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 animate-pulse" />
                      <div className="mt-4 h-2 w-20 rounded bg-foreground/20" />
                      <div className="mt-2 h-2 w-16 rounded bg-muted-foreground/20" />
                    </div>
                  </div>
                </div>
              </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Cuộn xuống</span>
          <div className="h-8 w-5 rounded-full border-2 border-muted-foreground/50 p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-1 rounded-full bg-neon-cyan"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-1.4-.59-2.96-.92-4.62-.92s-3.21.33-4.62.92L5.55 5.67c-.18-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85L6.3 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25S6.31 12.75 7 12.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
    </svg>
  )
}
